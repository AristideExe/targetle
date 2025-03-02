import TargetSelect, {valuesToFilter} from "../TargetSelector/TargetSelect.jsx";
import MainAnswers from "../MainAnswers/MainAnswers.jsx";
import {useEffect, useState} from "react";
import WinModal from "../WinModal/WinModal.jsx";
import {useLocalStorage} from "@uidotdev/usehooks";

const MainGameMode = () => {
    const [ answers, setAnswers ] = useLocalStorage("mainGameModeAnswers", []);
    const [ lastPlayed, setLastPlayed ] = useLocalStorage("mainGameModeLastPlayed", new Date().toLocaleDateString());
    const [ isVictory, setVictory ] = useLocalStorage("mainGameModeVictoryToday", false);

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
        if (lastPlayed !== currentDate){
            console.log("toto");
            setVictory(false);
            setAnswers([]);
            setLastPlayed(currentDate);
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
            />
        </>
    )
}

MainGameMode.propTypes = {};

export default MainGameMode;