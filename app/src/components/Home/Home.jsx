import { useTranslation } from "react-i18next";
import MainGameMode from "../MainGameMode/MainGameMode.jsx";
import styles from "./Home.module.css";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <h2 className={styles.title}>{t("home.title")}</h2>
            <MainGameMode />
        </>
    )
}

Home.propTypes = {};

export default Home;