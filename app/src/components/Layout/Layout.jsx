import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { homePath, howToPlayPath } from "../../routes";

const Layout = () => {
    const { t, i18n: { changeLanguage, language }} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)

    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <div className="layout">
            <div className="header">
                <Link to={{}} onClick={handleChangeLanguage}>{t("layout.header.changeLangage")}</Link>
                <Link to="/" className="title">
                    <h1>TARGETLE</h1>
                </Link>
            </div>
            <div className="content">
                <Outlet/>
            </div>
            <div className="footer">
                <Link to={homePath}>
                    <div className="footerLink">
                        {t("layout.footer.home")}
                    </div>
                </Link>
                <Link to={howToPlayPath}>
                    <div className="footerLink">
                        {t("layout.footer.howToPlay")}
                    </div>
                </Link>
            </div>
        </div>
    )
};

Layout.propTypes = {};

export default Layout;