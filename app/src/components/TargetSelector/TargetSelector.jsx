import PropTypes from "prop-types";
import AsyncSelect from "react-select/async";
import { useTranslation } from "react-i18next";
import "./TargetSelector.css";
import { useState } from "react";

const loadOptions = (inputValue, callback) => {
    fetch('http://localhost:8000/controllers/TargetController.php')
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

const TargetSelector = ({ submitTarget }) => {
    const { t } = useTranslation();
    const [ selectValue, setSelectValue ] = useState(null);
    const [ answers, setAnswers ] = useState([]);

    const handleChange = (value) => {
        setSelectValue(null);
        setAnswers([value, ...answers ])

        if (submitTarget(value.id)){
            // console.log("gagner")
        }
        else {
            // console.log("perdut")
        }
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

TargetSelector.propTypes = {
    submitTarget: PropTypes.func.isRequired
};

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
                </div>
                {answers.map(answer => 
                    <Answer answer={answer} key={answer.target_id} />
                )}
            </div>
        </div>
    )
};

Answers.propTypes = {
    answers: PropTypes.array
}

const Answer = ({ answer }) => (
    <div className="answer">
        <img src={`targets/${answer.image_path}`} />
        <span>{answer.gender}</span>
        <span>{answer.mission}</span>
        <span>{answer.nationality}</span>
        <span>{answer.age}</span>
    </div>
);

Answer.propTypes = {
    answer: PropTypes.object
}