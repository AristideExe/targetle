export const ICA_TRAINING_FACILITY = 'ICA_TRAINING_FACILITY';
export const PARIS = 'PARIS';
export const SAPIENZA = 'SAPIENZA';
export const MARRAKESH = 'MARRAKESH';
export const BANGKOK = 'BANGKOK';
export const COLORADO = 'COLORADO';
export const HOKKAIDO = 'HOKKAIDO';
export const HAWKES_BAY = 'HAWKES_BAY';
export const MIAMI = 'MIAMI';
export const SANTA_FORTUNA = 'SANTA_FORTUNA';
export const MUMBAI = 'MUMBAI';
export const WHITTLETON_CREEK = 'WHITTLETON_CREEK';
export const ISLE_OF_SGAIL = 'ISLE_OF_SGAIL';
export const NEW_YORK = 'NEW_YORK';
export const HAVEN_ISLAND = 'HAVEN_ISLAND';
export const HIMMELSTEIN = 'HIMMELSTEIN';
export const HANTU_PORT = 'HANTU_PORT';
export const SIBERIA = 'SIBERIA';
export const DUBAI = 'DUBAI';
export const DARTMOOR = 'DARTMOOR';
export const BERLIN = 'BERLIN';
export const CHONGQING = 'CHONGQING';
export const MENDOZA = 'MENDOZA';
export const CARPATHIAN_MOUNTAINS = 'CARPATHIAN_MOUNTAINS';
export const AMBROSE_ISLAND = 'AMBROSE_ISLAND';

export const DESTINATION = [
    ICA_TRAINING_FACILITY,
    PARIS,
    SAPIENZA,
    MARRAKESH,
    BANGKOK,
    COLORADO,
    HOKKAIDO,
    HAWKES_BAY,
    MIAMI,
    SANTA_FORTUNA,
    MUMBAI,
    WHITTLETON_CREEK,
    ISLE_OF_SGAIL,
    NEW_YORK,
    HAVEN_ISLAND,
    HIMMELSTEIN,
    HANTU_PORT,
    SIBERIA,
    DUBAI,
    DARTMOOR,
    BERLIN,
    CHONGQING,
    MENDOZA,
    CARPATHIAN_MOUNTAINS,
    AMBROSE_ISLAND
]

export const labels = (destination, t) => {
    switch (destination) {
        case ICA_TRAINING_FACILITY:
            return t("enum.destination.icaTrainingFacility")
        case PARIS:
            return t("enum.destination.paris")
        case SAPIENZA:
            return t("enum.destination.sapienza")
        case MARRAKESH:
            return t("enum.destination.marrakesh")
        case BANGKOK:
            return t("enum.destination.bangkok")
        case COLORADO:
            return t("enum.destination.colorado")
        case HOKKAIDO:
            return t("enum.destination.hokkaido")
        case HAWKES_BAY:
            return t("enum.destination.hawkesBay")
        case MIAMI:
            return t("enum.destination.miami")
        case SANTA_FORTUNA:
            return t("enum.destination.santaFortuna")
        case MUMBAI:
            return t("enum.destination.mumbai")
        case WHITTLETON_CREEK:
            return t("enum.destination.whittletonCreek")
        case ISLE_OF_SGAIL:
            return t("enum.destination.isleOfSgail")
        case NEW_YORK:
            return t("enum.destination.newYork")
        case HAVEN_ISLAND:
            return t("enum.destination.havenIsland")
        case HIMMELSTEIN:
            return t("enum.destination.himmelstein")
        case HANTU_PORT:
            return t("enum.destination.hantuPort")
        case SIBERIA:
            return t("enum.destination.siberia")
        case DUBAI:
            return t("enum.destination.dubai")
        case DARTMOOR:
            return t("enum.destination.dartmoor")
        case BERLIN:
            return t("enum.destination.berlin")
        case CHONGQING:
            return t("enum.destination.chongqing")
        case MENDOZA:
            return t("enum.destination.mendoza")
        case CARPATHIAN_MOUNTAINS:
            return t("enum.destination.carpathianMountains")
        case AMBROSE_ISLAND:
            return t("enum.destination.ambroseIsland")
    }
}