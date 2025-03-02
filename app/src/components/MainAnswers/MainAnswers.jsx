import {useTranslation} from "react-i18next";
import PropTypes from "prop-types";
import {labels as labelsGame} from "../../enums/Game.js";
import {labels as labelsGender} from "../../enums/Gender.js";
import {labels as labelsNationality} from "../../enums/Nationality.js";
import {labels as labelsDestination} from "../../enums/Destination.js";
import styles from "./MainAnswers.module.css";
import classNames from "classnames";

const MainAnswers = ({ answers = [], isVictory }) => {
    const { t } = useTranslation();

    return answers.length > 0 ? (
        <div className={styles.answers}>
            <div className={styles.answersHeader}>
                <span>{t("home.targetSelector.header.target")}</span>
                <span>{t("home.targetSelector.header.hitmanGame")}</span>
                <span>{t("home.targetSelector.header.gender")}</span>
                <span>{t("home.targetSelector.header.nationality")}</span>
                <span>{t("home.targetSelector.header.destination")}</span>
                <span>{t("home.targetSelector.header.yearOfBirth")}</span>
            </div>
            <div className={styles.answersBody}>
                {answers.map((answer, index) =>
                    <Answer
                        answer={answer}
                        isNew={index === 0 && !isVictory}
                        key={answer.target_id?.value}
                    />
                )}
            </div>
        </div>
    ) : null;
};

MainAnswers.propTypes = {
    answers: PropTypes.array,
    isVictory: PropTypes.bool,
}

export default MainAnswers;

const Answer = ({ answer, isNew }) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(styles.answer, isNew ? styles.last : null)}>
            <img src={`targets/${answer?.image_path?.value}`} title={answer?.name?.value} />
            <AnswerBloc value={labelsGame(answer?.hitmanGame?.value, t)} result={answer?.hitmanGame?.result} />
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
    const className = result === true ? styles.correct : result === false ?
        styles.incorrect : result === "less" ? styles.less : styles.more

    return (
        <span className={className}>{value}</span>
    )}

AnswerBloc.propTypes = {
    value: PropTypes.any.isRequired,
    result: PropTypes.any.isRequired,
}