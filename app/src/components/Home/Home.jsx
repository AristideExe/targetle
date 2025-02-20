import { useTranslation } from "react-i18next";
import "./Home.css";
import MainGameMode from "../MainGameMode/MainGameMode.jsx";


const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("home.title")}</h2>
            <MainGameMode />
        </>
    )
}

Home.propTypes = {};

export default Home;