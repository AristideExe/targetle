import { useLocalStorage } from "@uidotdev/usehooks";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import { homePath, howToPlayPath } from "../../routes";
import styles from "./Layout.module.css";

const Layout = () => {
    const { t, i18n: { changeLanguage, language }} = useTranslation();

    // On récupère la langue du local storage et on la set pour l'appli
    const [currentLanguage, setCurrentLanguage] = useLocalStorage('language', language);
    changeLanguage(currentLanguage);

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                <Link to={{}} onClick={handleChangeLanguage}>{t("layout.header.changeLangage")}</Link>
                <Link to="/" className={styles.title}>
                    <h1>TARGETLE</h1>
                </Link>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
            <div className={styles.footer}>
                <Link to={homePath}>
                    <div className={styles.footerLink}>
                        {t("layout.footer.home")}
                    </div>
                </Link>
                <Link to={howToPlayPath}>
                    <div className={styles.footerLink}>
                        {t("layout.footer.howToPlay")}
                    </div>
                </Link>
            </div>
        </div>
    )
};

Layout.propTypes = {};

export default Layout;