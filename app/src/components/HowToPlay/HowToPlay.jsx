import { useTranslation } from "react-i18next";
import "./HowToPlay.css";

const HowToPlay = () => {

    const { t } = useTranslation();

    return (
        <div className="gameInfos">
            <p>{t("home.colorIndicators.title")}</p>
            <div className="colorIndicators">
                <div className="colorIndicator">
                    <div className="correct"></div>
                    <span>{t("home.colorIndicators.correct")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="incorrect"></div>
                    <span>{t("home.colorIndicators.incorrect")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="more"></div>
                    <span>{t("home.colorIndicators.more")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="less"></div>
                    <span>{t("home.colorIndicators.less")}</span>
                </div>
            </div>
        </div>
    )
};

HowToPlay.propTypes = {};

export default HowToPlay;