import { useTranslation } from "react-i18next";
import TargetSelector from "../TargetSelector/TargetSelector";
import "./Home.css";

const Home = () => {
    const { t } = useTranslation();

    return (
        <>
            <h2>{t("home.title")}</h2>
            <TargetSelector submitTarget={(targetId) => targetId == 1}/>
        </>
    )
}

Home.propTypes = {};

export default Home;