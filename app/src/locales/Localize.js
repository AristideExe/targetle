import {EN} from "./Lang.js";
import {useTranslation} from "react-i18next";

const FALLBACK_LOCALE = EN;

const useLocalize = () => {
    const { i18n: { language }} = useTranslation();

    return {
        localize: value =>
            typeof value === "object" ? value?.[language] ?? value?.[FALLBACK_LOCALE]
                : value,
    };
};

export default useLocalize;