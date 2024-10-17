import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import { creditsPaths } from "../../routes";

const Layout = () => {
    const { t, i18n: { changeLanguage, language }} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    const [isDark, setIsDark] = useState(false);
    
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    const handleChangeColorScheme = () => {
        if (isDark) {
            setIsDark(false);
            document.body.classList.remove('dark');
        }
        else {
            setIsDark(true);
            document.body.classList.add('dark');
        }
    }

    return (
        <div className="layout">
            <div className="main">
                <div className="header">
                    <Link to={{}} onClick={handleChangeLanguage}>{t("layout.header.changeLangage")}</Link>
                    <Link to="/" className="title">
                        <h1>Targetle</h1>
                    </Link>
                    <Link to={{}} onClick={handleChangeColorScheme}>
                        {isDark ? t("layout.header.switchToLightMode") : t("layout.header.switchToDarkMode")}
                    </Link>
                </div>  
                <div className="content">
                    <Outlet/>
                </div>
                <div className="footer">
                    <Link to={creditsPaths}>{t("layout.footer.credits")}</Link>
                </div>
            </div>
        </div>
    )
};

Layout.propTypes = {};

export default Layout;