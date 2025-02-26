import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {labels as labelsGender} from "../../enums/Gender.js";
import {labels as labelsNationality} from "../../enums/Nationality.js";
import {labels as labelsDestination} from "../../enums/Destination.js";
import "./MainAnswers.css";

const MainAnswers = ({ answers = [] }) => {
    const { t } = useTranslation();

    return answers.length > 0 ? (
        <div className="answers">
            <div className="answersHeader">
                <span>{t("home.targetSelector.header.target")}</span>
                <span>{t("home.targetSelector.header.hitmanGame")}</span>
                <span>{t("home.targetSelector.header.gender")}</span>
                <span>{t("home.targetSelector.header.nationality")}</span>
                <span>{t("home.targetSelector.header.destination")}</span>
                <span>{t("home.targetSelector.header.yearOfBirth")}</span>
            </div>
            <div className="answersBody">
                {answers.map((answer, index) =>
                    <Answer
                        answer={answer}
                        isNew={index === 0}
                        key={answer.target_id?.value}
                    />
                )}
            </div>
        </div>
    ) : null;
};

MainAnswers.propTypes = {
    answers: PropTypes.array
}

export default MainAnswers;

const Answer = ({ answer, isNew }) => {
    const { t } = useTranslation();

    return (
        <div className={`answer ${isNew ? 'last' : ''}`}>
            <img src={`targets/${answer?.image_path?.value}`} title={answer?.name?.value} />
            <AnswerBloc value={answer?.hitmanGame?.value} result={answer?.hitmanGame?.result} />
            <AnswerBloc value={labelsGender(answer?.gender?.value, t)} result={answer?.gender?.result} />
            <AnswerBloc value={labelsNationality(answer.nationality?.value, t)} result={answer?.nationality?.result} />
            <AnswerBloc value={labelsDestination(answer.destination?.value, t)} result={answer?.destination?.result} />
            <AnswerBloc value={answer?.yearOfBirth?.value} result={answer?.yearOfBirth?.result} />
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