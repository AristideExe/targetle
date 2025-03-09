import TargetSelect, {valuesToFilter} from "../TargetSelector/TargetSelect.jsx";
import MainAnswers from "../MainAnswers/MainAnswers.jsx";
import {useEffect, useState} from "react";
import WinModal from "../WinModal/WinModal.jsx";
import {useLocalStorage} from "@uidotdev/usehooks";
import useStatistics from "../WinModal/Statistics.js";
import {MAIN} from "../../enums/Gamemode.js";

const MainGameMode = () => {
    const [ answers, setAnswers ] = useLocalStorage("mainGameModeAnswers", []);
    const [ isVictory, setVictory ] = useState(false);
    const { lastPlayed, setLastPlayed, lastVictory, setLastVictory,
        victoriesCount, setVictoriesCount, dailyStreak, setDailyStreak } = useStatistics(MAIN);

    const [isModalVisible, setModalVisible] = useState(false);
    const [ selectDisabled, setSelectDisabled ] = useState(false);

    const notIn = answers.map(answer => answer.target_id.value);

    const closeModal = () => setModalVisible(false);

    const loadOptions = (inputValue, callback) => {
        fetch(`http://localhost:8000/controllers/TargetController.php?
        getAll&filter=${JSON.stringify(valuesToFilter({
            startWith: inputValue, 
            notIn
        }))}`)
            .then(response => {
                if (!response.ok){
                    throw new Error('Erreur réseau: ' + response.statusText)
                };
                return response.json();
            })
            .then(data => {
                callback(data)
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    }

    const checkVictory = (proposal) => {
        if (Object.values(proposal).find(property => property.result !== true)){
            setSelectDisabled(false);
        }
        else {
            setVictory(true);
            setVictoriesCount(victoriesCount + 1)
            setDailyStreak(dailyStreak + 1);
            setLastVictory(new Date().toLocaleDateString())
            setModalVisible(true);
        }
    }

    const onChange = (value) => {
        fetch(` http://localhost:8000/controllers/TargetController.php?propose=${value.target_id}`)
            .then(response => {
                if (!response.ok){
                    throw new Error('Erreur réseau: ' + response.statusText)
                };
                return response.json();
            })
            .then(proposal => {
                setAnswers([proposal, ...answers ]);
                setSelectDisabled(true);
                setTimeout(() => checkVictory(proposal), 3000);
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    };

    useEffect(() => {
        const currentDate = new Date().toLocaleDateString()
        const yesterday = new Date(new Date().setDate(new Date().getDate()-1)).toLocaleDateString();
        if (lastPlayed !== currentDate){
            // Si la personne n'a pas gagné hier, on reset son daily streak
            if (lastVictory !== yesterday){
                setDailyStreak(0);
            }
            setAnswers([]);
            setLastPlayed(currentDate);
        }
        else if (lastVictory === currentDate){
            setVictory(true);
        }
    }, []);

    return (
        <>
            {!isVictory && (
                <TargetSelect
                    loadOptions={loadOptions}
                    onChange={onChange}
                    isDisabled={selectDisabled}
                />
            )}
            <MainAnswers
                answers={answers}
                isVictory={isVictory}
            />
            <WinModal
                isVisible={isModalVisible}
                closeFunc={closeModal}
                targetName={answers[0]?.name?.value}
                targetImage={answers[0]?.image_path?.value}
                numberOfVictories={victoriesCount}
                dailyStreak={dailyStreak}
                numberOfAttempts={answers.length}
            />
        </>
    )
}

MainGameMode.propTypes = {};

export default MainGameMode;