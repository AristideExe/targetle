import { useLocalStorage } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { homePath, howToPlayPath } from "../../routes";
import styles from "./Layout.module.css";
import {useEffect, useState} from "react";
import Icon from "../Icon/Icon.jsx";
import {INFORMATION, TARGET} from "../Icon/IconsEnum.js";
import CreditsModal from "../CreditsModal/CreditsModal.jsx";

const Layout = () => {
    const { t, i18n: { changeLanguage, language }} = useTranslation();
    // On récupère la langue du local storage et on la set pour l'appli
    const [currentLanguage, setCurrentLanguage] = useLocalStorage('language', language);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    useEffect(() => {
        changeLanguage(currentLanguage);
    }, []);

    const [isCreditsModalVisible, setCreditsModalVisible] = useState(false);

    return (
        <>
            <div className={styles.layout}>
                <div className={styles.header}>
                    <Link to={{}} onClick={handleChangeLanguage}>{t("layout.header.changeLangage")}</Link>
                    <Link to="/" className={styles.title}>
                        <h1>TARGETLE</h1>
                    </Link>
                    <Link to={{}} onClick={() => setCreditsModalVisible(true)}>{t("layout.header.showCredits")}</Link>
                </div>
                <div className={styles.content}>
                    <Outlet/>
                </div>
                <div className={styles.footer}>
                    <Link to={homePath} className={styles.footerLink}>
                        <Icon icon={TARGET} className={styles.footerIcon}/>
                        {t("layout.footer.home")}
                    </Link>
                    <Link to={howToPlayPath} className={styles.footerLink}>
                        <Icon icon={INFORMATION} className={styles.footerIcon}/>
                        {t("layout.footer.howToPlay")}
                    </Link>
                </div>
            </div>
            <CreditsModal isVisible={isCreditsModalVisible} closeFunc={() => setCreditsModalVisible(false)} />
        </>
    )
};

Layout.propTypes = {};

export default Layout;