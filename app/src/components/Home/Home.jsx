import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();

    return (
        <p>{t("home.title")}</p>
    )
}

Home.propTypes = {};

export default Home;