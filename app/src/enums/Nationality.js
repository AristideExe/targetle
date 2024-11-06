export const FR = "FR";
export const IL = "IL";
export const IT = "IT";
export const RU = "RU";
export const US = "US";

export const NATIONALITY = [FR, IL, IT, RU, US];

export const labels = (nationality, t) => {
    switch (nationality) {
        case FR:
            return t("enum.nationality.fr");
        case IL:
            return t("enum.nationality.il");
        case IT:
            return t("enum.nationality.it");
        case RU:
            return t("enum.nationality.ru");
        case US:
            return t("enum.nationality.us");
    }
}