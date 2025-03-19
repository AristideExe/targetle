import PropTypes from "prop-types";
import {useTranslation} from "react-i18next";
import styles from "./WinModal.module.css";
import {ACCEPT} from "../Icon/IconsEnum.js";
import {randomLabel as randomPlaystyle} from "../../enums/Playstyle.js";
import Modal from "../Modal/Modal.jsx";
import Button from "../Modal/Button.jsx";

const WinModal = ({ isVisible = false, closeFunc, targetName, targetImage, numberOfVictories, dailyStreak, numberOfAttempts }) => {
    const { t } = useTranslation();

    return (
        <Modal isVisible={isVisible}>
            <div>
                {targetName && targetImage && (
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
                )}
            </div>
            <Button onClick={closeFunc} icon={ACCEPT} text={t("home.winModal.closeModal")}/>
        </Modal>
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