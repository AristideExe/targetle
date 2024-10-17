import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

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
        <>
            <h1>Targetle</h1>
            <Link onClick={handleChangeLanguage}>{t("layout.changeLangage")}</Link>
            <br/>
            <Link onClick={handleChangeColorScheme}>
                {isDark ? t("layout.switchToLightMode") : t("layout.switchToDarkMode")}
            </Link>
            <Outlet />
        </>
    )
};

Layout.propTypes = {};

export default Layout;