import TargetSelect, {valuesToFilter} from "../TargetSelector/TargetSelect.jsx";
import MainAnswers from "../MainAnswers/MainAnswers.jsx";
import {useState} from "react";

const MainGameMode = () => {
    const [ answers, setAnswers ] = useState([]);
    const notIn = answers.map(answer => answer.target_id.value);

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

    const onChange = (value) => {
        fetch(` http://localhost:8000/controllers/TargetController.php?propose=${value.target_id}`)
            .then(response => {
                if (!response.ok){
                    throw new Error('Erreur réseau: ' + response.statusText)
                };
                return response.json();
            })
            .then(proposal => {
                setAnswers([proposal, ...answers ])
            })
            .catch(error => {
                console.error('Erreur lors de la récupération des données :', error);
            });
    };

    return (
        <>
            <TargetSelect
                loadOptions={loadOptions}
                onChange={onChange}
            />
            <MainAnswers
                answers={answers}
            />
        </>
    )
}

MainGameMode.propTypes = {};

export default MainGameMode;