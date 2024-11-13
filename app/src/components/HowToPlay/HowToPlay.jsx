import { useTranslation } from "react-i18next";
import "./HowToPlay.css";

const HowToPlay = () => {

    const { t } = useTranslation();

    return (
        <div className="gameInfos">
            <p className="gameExplication">{t("howToPlay.gameExplication")}</p>

            <p>{t("howToPlay.colorIndicators.title")}</p>
            <div className="colorIndicators">
                <div className="colorIndicator">
                    <div className="correct"></div>
                    <span>{t("howToPlay.colorIndicators.correct")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="incorrect"></div>
                    <span>{t("howToPlay.colorIndicators.incorrect")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="more"></div>
                    <span>{t("howToPlay.colorIndicators.more")}</span>
                </div>
                <div className="colorIndicator">
                    <div className="less"></div>
                    <span>{t("howToPlay.colorIndicators.less")}</span>
                </div>
            </div>
        </div>
    )
};

HowToPlay.propTypes = {};

export default HowToPlay;