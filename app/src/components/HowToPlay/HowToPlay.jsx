import { useTranslation } from "react-i18next";
import styles from "./HowToPlay.module.css";

const HowToPlay = () => {

    const { t } = useTranslation();

    return (
        <div className={styles.gameInfos}>
            <p>{t("home.colorIndicators.title")}</p>
            <div className={styles.colorIndicators}>
                <div className={styles.colorIndicator}>
                    <div className={styles.correct}></div>
                    <span>{t("home.colorIndicators.correct")}</span>
                </div>
                <div className={styles.colorIndicator}>
                    <div className={styles.incorrect}></div>
                    <span>{t("home.colorIndicators.incorrect")}</span>
                </div>
                <div className={styles.colorIndicator}>
                    <div className={styles.more}></div>
                    <span>{t("home.colorIndicators.more")}</span>
                </div>
                <div className={styles.colorIndicator}>
                    <div className={styles.less}></div>
                    <span>{t("home.colorIndicators.less")}</span>
                </div>
            </div>
        </div>
    )
};

HowToPlay.propTypes = {};

export default HowToPlay;