import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
    const { t, i18n: { changeLanguage, language }} = useTranslation();
    const [currentLanguage, setCurrentLanguage] = useState(language)
    
    const handleChangeLanguage = () => {
        const newLanguage = currentLanguage === "fr" ? "en" : "fr";
        setCurrentLanguage(newLanguage);
        changeLanguage(newLanguage);
    }

    return (
        <>
            <h1>Targetle</h1>
            <Link onClick={handleChangeLanguage}>{t("layout.changeLangage")}</Link>
            <Outlet />
        </>
    )
};

Layout.propTypes = {};

export default Layout;