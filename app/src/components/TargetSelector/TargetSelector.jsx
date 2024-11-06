import PropTypes from "prop-types";
import AsyncSelect from "react-select/async";
import { useTranslation } from "react-i18next";
import "./TargetSelector.css";
import { useState } from "react";
import { labels as labelsGender } from "../../enums/Gender";
import { labels as labelsNationality } from "../../enums/Nationality";
import { labels as labelsMission } from "../../enums/Mission";

const loadOptions = (inputValue, callback) => {
    fetch('http://localhost:8000/controllers/TargetController.php?getAll')
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

    return (
        <>
            <AsyncSelect
                cacheOptions
                loadOptions={loadOptions}
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
                    <span>{t("home.targetSelector.header.mission")}</span>
                    <span>{t("home.targetSelector.header.nationality")}</span>
                    <span>{t("home.targetSelector.header.age")}</span>
                    <span>{t("home.targetSelector.header.hitmanGame")}</span>
                </div>
                {answers.map(answer => 
                    <Answer answer={answer} key={answer.target_id?.value} />
                )}
            </div>
        </div>
    )
};

Answers.propTypes = {
    answers: PropTypes.array
}

const Answer = ({ answer }) => {
    const { t } = useTranslation();
    
    return (
    <div className="answer">
        <img src={`targets/${answer?.image_path?.value}`} title={answer?.name?.value} />
        <AnswerBloc value={labelsGender(answer?.gender?.value, t)} result={answer?.gender?.result} />
        <AnswerBloc value={labelsMission(answer.mission?.value, t)} result={answer?.mission?.result} />
        <AnswerBloc value={labelsNationality(answer.nationality?.value, t)} result={answer?.nationality?.result} />
        <AnswerBloc value={answer?.age?.value} result={answer?.age?.result} />
        <AnswerBloc value={answer?.hitmanGame?.value} result={answer?.hitmanGame?.result} />
    </div>
)};


Answer.propTypes = {
    answer: PropTypes.object
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