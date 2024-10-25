import PropTypes from "prop-types";
import AsyncSelect from "react-select/async";
import { useTranslation } from "react-i18next";
import "./TargetSelector.css";
import { useState } from "react";


const options = [
    { id: 1, name: 'Kalvin Ritter', image: "/targets/Kalvin-Ritter.webp" },
    { id: 2, name: 'Jasper Knight', image: "/targets/Jasper-Knight.webp" },
    { id: 3, name: 'Viktor Novikov', image: "/targets/Viktor-Novikov.webp" },
    { id: 4, name: 'Dalia Margolis', image: "/targets/Dalia-Margolis.webp" },
    { id: 5, name: 'Silvio Caruso', image: "/targets/Silvio-Caruso.webp" },
    { id: 6, name: 'Francesca De Santis', image: "/targets/Francesca-De-Santis.webp" },
];

const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
        callback(options.filter((option => 
            option.name.toLowerCase().includes(inputValue)))),
        1000
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
                formatOptionLabel={option => (
                    <div className="option">
                        <img src={option.image} />
                        <span>{option.name}</span>
                    </div>
                )}
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
                    <Answer answer={answer} key={answer.id} />
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
        <img src={answer.image} />
        <span>Homme</span>
        <span>The Showstopper</span>
        <span>Américain</span>
        <span>50</span>
    </div>
);

Answer.propTypes = {
    answer: PropTypes.object
}