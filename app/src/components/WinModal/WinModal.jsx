import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import ReactModal from 'react-modal';
import {Link} from "react-router-dom";
import styles from "./WinModal.module.css";
import Icon from "../Icon/Icon.jsx";
import {ACCEPT} from "../Icon/IconsEnum.js";
import {randomLabel as randomPlaystyle} from "../../enums/Playstyle.js";

const WinModal = ({ isVisible = false, closeFunc, targetName, targetImage, numberOfVictories, dailyStreak, numberOfAttempts }) => {
    const { t } = useTranslation();

    return (
        <ReactModal
            isOpen={isVisible}
            shouldFocusAfterRender={false}
            className={styles.modal}
            overlayClassName={styles.overlayModal}
            shouldCloseOnEsc
        >
            {targetName && targetImage && (
                <div className={styles.text}>
                    <div className={styles.resultsContainer}>
                        <img src={`targets/${targetImage}`} />
                        <div className={styles.results}>
                            <span className={styles.playstyle}>{randomPlaystyle(t)}</span>
                            <p>{t("home.winModal.resultText")}</p>
                            <div className={styles.statistics}>
                                <div>
                                    <span>{t("home.winModal.numberOfAttempts")}:</span>
                                    <p>{numberOfAttempts}</p>
                                </div>
                                <div>
                                    <span>{t("home.winModal.numberOfVictories")}:</span>
                                    <p>{numberOfVictories}</p>
                                </div>
                                <div>
                                    <span>{t("home.winModal.dailyStreak")}:</span>
                                    <p>{dailyStreak}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <Link to={{}} onClick={closeFunc} className={styles.button}>
                <Icon icon={ACCEPT} className={styles.icon}/>
                {t("home.winModal.closeModal")}
            </Link>
        </ReactModal>
    )
}

WinModal.propTypes = {
    isVisible: PropTypes.bool,
    closeFunc: PropTypes.func,
    targetName: PropTypes.string,
    targetImage: PropTypes.string,
    numberOfVictories: PropTypes.number,
    dailyStreak: PropTypes.number,
    numberOfAttempts: PropTypes.number,
}

export default WinModal;