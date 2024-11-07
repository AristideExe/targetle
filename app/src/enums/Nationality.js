export const AR = "AR";
export const AU = "AU";
export const BB = "BB";
export const BR = "BR";
export const CN = "CN";
export const CO = "CO";
export const CL = "CL";
export const DE = "DE";
export const DK = "DK";
export const ES = "ES";
export const FR = "FR";
export const GB = "GB";
export const GR = "GR";
export const IL = "IL";
export const IN = "IN";
export const IT = "IT";
export const JP = "JP";
export const KR = "KR";
export const LK = "LK";
export const MA = "MA";
export const MY = "MY";
export const NL = "NL";
export const NZ = "NZ";
export const RU = "RU";
export const SE = "SE";
export const TH = "TH";
export const US = "US";
export const ZA = "ZA";

export const NATIONALITY = [
    AR, AU, BB, BR, CN, CO, CL, DE, DK, ES, FR, GB, GR, IL, IN, IT, JP, KR, LK, MA, MY, NL, NZ, RU, SE, TH, US, ZA
];

export const labels = (nationality, t) => {
    switch (nationality) {
        case AR:
            return t("enum.nationality.ar");
        case AU:
            return t("enum.nationality.au");
        case BB:
            return t("enum.nationality.bb");
        case BR:
            return t("enum.nationality.br");
        case CN:
            return t("enum.nationality.cn");
        case CO:
            return t("enum.nationality.co");
        case CL:
            return t("enum.nationality.cl");
        case DE:
            return t("enum.nationality.de");
        case DK:
            return t("enum.nationality.dk");
        case ES:
            return t("enum.nationality.es");
        case FR:
            return t("enum.nationality.fr");
        case GB:
            return t("enum.nationality.gb");
        case GR:
            return t("enum.nationality.gr");
        case IL:
            return t("enum.nationality.il");
        case IN:
            return t("enum.nationality.in");
        case IT:
            return t("enum.nationality.it");
        case JP:
            return t("enum.nationality.jp");
        case KR:
            return t("enum.nationality.kr");
        case LK:
            return t("enum.nationality.lk");
        case MA:
            return t("enum.nationality.ma");
        case MY:
            return t("enum.nationality.my");
        case NL:
            return t("enum.nationality.nl");
        case NZ:
            return t("enum.nationality.nz");
        case RU:
            return t("enum.nationality.ru");
        case SE:
            return t("enum.nationality.se");
        case TH:
            return t("enum.nationality.th");
        case US:
            return t("enum.nationality.us");
        case ZA:
            return t("enum.nationality.za");
    }
};
