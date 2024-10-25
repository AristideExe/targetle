// import { useTranslation } from "react-i18next";
import TargetSelector from "../TargetSelector/TargetSelector";

const Home = () => {
    // const { t } = useTranslation();

    return (
        <>
            {/* <p>{t("home.title")}</p> */}
            <TargetSelector submitTarget={(targetId) => targetId == 1}/>
        </>
    )
}

Home.propTypes = {};

export default Home;