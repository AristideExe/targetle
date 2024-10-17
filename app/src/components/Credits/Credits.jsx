import { useTranslation } from "react-i18next";

const Credits = () => {

    const { t } = useTranslation();

    return (
        <p>{t("credits.title")}</p>
    )
};

Credits.propTypes = {};

export default Credits;