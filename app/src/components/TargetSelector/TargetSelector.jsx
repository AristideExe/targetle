import PropTypes from "prop-types";
import AsyncSelect from "react-select/async";
import { useTranslation } from "react-i18next";
import "./TargetSelector.css";
import { useState } from "react";
import { labels as labelsGender } from "../../enums/Gender";
import { labels as labelsNationality } from "../../enums/Nationality";
import { labels as labelsDestination } from "../../enums/Destination";

const loadOptions = (inputValue, callback, notIn) => {
    fetch(`http://localhost:8000/controllers/TargetController.php?
        getAll&startWith=${inputValue}&notIn=${JSON.stringify(notIn)}`)
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

// Le paquet react-select recommande fortement d'utiliser du css dans le js afin de
// personnaliser les styles internes du select.
const customStyles = {
    menu: (styles) => ({
        ...styles,
        background: "var(--background-color-secondary)"
    }),
    input: (styles) => ({
        ...styles,
        color: "var(--color-white)"
    }),
    control: (styles) => ({
        ...styles,
        background: "var(--background-color-secondary)",
        borderColor: "var(--color-main)",
        "img": {
            ...styles["img"],
            height: "7rem",
            display: "inline",
            verticalAlign: "middle",
            padding: "0 1rem"
        },
        "span": {
            ...styles["span"],
            display: "inline",
            verticalAlign: "middle",
            color: "var(--color-white)",
            padding: "0 1rem"
        }
    }),
    option: (styles, {isFocused}) => ({
        ...styles,
        backgroundColor: isFocused ? "var(--color-red)" : "var(--background-color-secondary)",
        color: "var(--color-white)",
        cursor: isFocused ? "pointer" : "default",
        "img": {
            ...styles["img"],
            height: "7rem",
            width: "7rem",
            objectFit: "cover",
            display: "inline",
            verticalAlign: "middle",
            padding: "0 1rem",
        },
        "span": {
            ...styles["span"],
            display: "inline",
            verticalAlign: "middle",
            color: "var(--color-white)",
            padding: "0 1rem"
        }
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: "rgba(0,0,0,0)"
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "var(--color-white)"
    }),
}

const TargetSelector = () => {
    const { t } = useTranslation();
    const [ selectValue, setSelectValue ] = useState(null);
    const [ answers, setAnswers ] = useState([]);

    const handleChange = (value) => {
        setSelectValue(null);

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

    const notIn = answers.map(answer => answer.target_id.value);

    return (
        <>
            <AsyncSelect
                loadOptions={(inputValue, callback) => loadOptions(inputValue, callback, notIn)}
                noOptionsMessage={({inputValue}) => 
                    inputValue !== "" ? (<p>{t("home.targetSelector.noCharacterFound")}</p>) : null
                }
                placeholder={t("home.targetSelector.startTyping")}
                formatOptionLabel={option => {
                    return (
                        <div className="option">
                            <img src={`targets/${option.image_path}`} />
                            <span>{option.name}</span>
                        </div>
                    )
                }}
                value={selectValue}
                styles={customStyles}
                onChange={handleChange}
            />
            <Answers answers={answers} />
        </>
    );
};

TargetSelector.propTypes = {};

export default TargetSelector;

const Answers = ({ answers = [] }) => {
    const { t } = useTranslation();

    return (
        <div>
            <div className="answers">
                <div className="answersHeader">
                    <span>{t("home.targetSelector.header.target")}</span>
                    <span>{t("home.targetSelector.header.gender")}</span>
                    <span>{t("home.targetSelector.header.destination")}</span>
                    <span>{t("home.targetSelector.header.nationality")}</span>
                    <span>{t("home.targetSelector.header.yearOfBirth")}</span>
                    <span>{t("home.targetSelector.header.hitmanGame")}</span>
                </div>
                {answers.map((answer, index) => 
                    <Answer 
                        answer={answer} 
                        isNew={index === 0}
                        key={answer.target_id?.value}
                    />
                )}
            </div>
        </div>
    )
};

Answers.propTypes = {
    answers: PropTypes.array
}

const Answer = ({ answer, isNew }) => {
    const { t } = useTranslation();

    return (
    <div className={`answer ${isNew ? 'last' : ''}`}>
        <img src={`targets/${answer?.image_path?.value}`} title={answer?.name?.value} />
        <AnswerBloc value={labelsGender(answer?.gender?.value, t)} result={answer?.gender?.result} />
        <AnswerBloc value={labelsDestination(answer.destination?.value, t)} result={answer?.destination?.result} />
        <AnswerBloc value={labelsNationality(answer.nationality?.value, t)} result={answer?.nationality?.result} />
        <AnswerBloc value={answer?.yearOfBirth?.value} result={answer?.yearOfBirth?.result} />
        <AnswerBloc value={answer?.hitmanGame?.value} result={answer?.hitmanGame?.result} />
    </div>
)};


Answer.propTypes = {
    answer: PropTypes.object.isRequired,
    isNew: PropTypes.bool,
}

const AnswerBloc = ({ value, result }) => {
    const className = result === true ? "correct" : result === false ?
        "incorrect" : result === "less" ? "less" : "more"

    return (
        <span className={className}>{value}</span>
)}

AnswerBloc.propTypes = {
    value: PropTypes.any.isRequired,
    result: PropTypes.any.isRequired,
}