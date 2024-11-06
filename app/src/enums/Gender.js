export const M = "M";
export const F = "F";

export const GENDER = [M, F];

export const labels = (gender, t) => {
    switch (gender) {
        case M:
            return t("enum.gender.male");
        case F:
            return t("enum.gender.female");
    }
}