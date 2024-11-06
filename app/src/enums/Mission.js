export const TRAINING = "TRAINING";
export const THE_FINAL_TEST = "THE_FINAL_TEST";
export const THE_SHOWSTOPPER = "THE_SHOWSTOPPER";
export const HOLIDAY_HOARDERS = "HOLIDAY_HOARDERS";
export const WORLD_OF_TOMORROW = "WORLD_OF_TOMORROW";
export const THE_ICON = "THE_ICON";
export const LANDSLIDE = "LANDSLIDE";
export const THE_AUTHOR = "THE_AUTHOR";
export const A_GUILDED_CAGE = "A_GUILDED_CAGE";
export const A_HOUSE_BUILT_ON_SAND = "A_HOUSE_BUILT_ON_SAND";
export const CLUB_27 = "CLUB_27";
export const THE_SOURCE = "THE_SOURCE";
export const FREEDOM_FIGHTERS = "FREEDOM_FIGHTERS";
export const THE_VECTOR = "THE_VECTOR";
export const SITUS_INVERTUS = "SITUS_INVERTUS";
export const PATIENT_ZERO = "PATIENT_ZERO";
export const HOKKAIDO_SNOW_FESTIVAL = "HOKKAIDO_SNOW_FESTIVAL";
export const NIGHTCALL = "NIGHTCALL";
export const THE_FINISH_LINE = "THE_FINISH_LINE";
export const A_SILVER_TONGUE = "A_SILVER_TONGUE";
export const THREE_HEADER_SERPENT = "THREE_HEADER_SERPENT";
export const EMBRACE_OF_THE_SERPENT = "EMBRACE_OF_THE_SERPENT";
export const CHASING_A_GHOST = "CHASING_A_GHOST";
export const ILLUSIONS_OF_GRANDEUR = "ILLUSIONS_OF_GRANDEUR";
export const ANOTHER_LIFE = "ANOTHER_LIFE";
export const A_BITTER_PILL = "A_BITTER_PILL";
export const THE_ARK_SOCIETY = "THE_ARK_SOCIETY";
export const GOLDEN_HANDSHAKE = "GOLDEN_HANDSHAKE";
export const THE_LAST_RESORT = "THE_LAST_RESORT";
export const THE_LAST_YARDBIRD = "THE_LAST_YARDBIRD";
export const THE_PEN_AND_THE_SWORD = "THE_PEN_AND_THE_SWORD";
export const CRIME_AND_PUNISHMENT = "CRIME_AND_PUNISHMENT";
export const ON_TOP_OF_THE_WORLD = "ON_TOP_OF_THE_WORLD";
export const DEATH_IN_THE_FAMILY = "DEATH_IN_THE_FAMILY";
export const THE_DARTMOOR_GARDEN_SHOW = "THE_DARTMOOR_GARDEN_SHOW";
export const APEX_PREDATOR = "APEX_PREDATOR";
export const END_OF_AN_ERA = "END_OF_AN_ERA";
export const THE_FAREWELL = "THE_FAREWELL";
export const UNTOUCHABLE = "UNTOUCHABLE";
export const SHADOWS_IN_THE_WATER = "SHADOWS_IN_THE_WATER";

export const MISSION = [
    TRAINING,
    THE_FINAL_TEST,
    THE_SHOWSTOPPER,
    HOLIDAY_HOARDERS,
    WORLD_OF_TOMORROW,
    THE_ICON,
    LANDSLIDE,
    THE_AUTHOR,
    A_GUILDED_CAGE,
    A_HOUSE_BUILT_ON_SAND,
    CLUB_27,
    THE_SOURCE,
    FREEDOM_FIGHTERS,
    THE_VECTOR,
    SITUS_INVERTUS,
    PATIENT_ZERO,
    HOKKAIDO_SNOW_FESTIVAL,
    NIGHTCALL,
    THE_FINISH_LINE,
    A_SILVER_TONGUE,
    THREE_HEADER_SERPENT,
    EMBRACE_OF_THE_SERPENT,
    CHASING_A_GHOST,
    ILLUSIONS_OF_GRANDEUR,
    ANOTHER_LIFE,
    A_BITTER_PILL,
    THE_ARK_SOCIETY,
    GOLDEN_HANDSHAKE,
    THE_LAST_RESORT,
    THE_LAST_YARDBIRD,
    THE_PEN_AND_THE_SWORD,
    CRIME_AND_PUNISHMENT,
    ON_TOP_OF_THE_WORLD,
    DEATH_IN_THE_FAMILY,
    THE_DARTMOOR_GARDEN_SHOW,
    APEX_PREDATOR,
    END_OF_AN_ERA,
    THE_FAREWELL,
    UNTOUCHABLE,
    SHADOWS_IN_THE_WATER,
];

export const labels = (mission, t) => {
    console.log(mission);
    switch (mission) {
        case TRAINING:
            return t("enum.mission.training")
        case THE_FINAL_TEST:
            return t("enum.mission.theFinalTest")
        case THE_SHOWSTOPPER:
            return t("enum.mission.theShowstopper")
        case HOLIDAY_HOARDERS:
            return t("enum.mission.holidayHoarders")
        case WORLD_OF_TOMORROW:
            return t("enum.mission.worldOfTomorrow")
        case THE_ICON:
            return t("enum.mission.theIcon")
        case LANDSLIDE:
            return t("enum.mission.landslide")
        case THE_AUTHOR:
            return t("enum.mission.theAuthor")
        case A_GUILDED_CAGE:
            return t("enum.mission.aGuildedCage")
        case A_HOUSE_BUILT_ON_SAND:
            return t("enum.mission.aHouseBuiltOnSand")
        case CLUB_27:
            return t("enum.mission.club27")
        case THE_SOURCE:
            return t("enum.mission.theSource")
        case FREEDOM_FIGHTERS:
            return t("enum.mission.freedomFighters")
        case THE_VECTOR:
            return t("enum.mission.theVector")
        case SITUS_INVERTUS:
            return t("enum.mission.situsInvertus")
        case PATIENT_ZERO:
            return t("enum.mission.patientZero")
        case HOKKAIDO_SNOW_FESTIVAL:
            return t("enum.mission.hokkaidoSnowFestival")
        case NIGHTCALL:
            return t("enum.mission.nightcall")
        case THE_FINISH_LINE:
            return t("enum.mission.theFinishLine")
        case A_SILVER_TONGUE:
            return t("enum.mission.aSilverTongue")
        case THREE_HEADER_SERPENT:
            return t("enum.mission.threeHeaderSerpent")
        case EMBRACE_OF_THE_SERPENT:
            return t("enum.mission.embraceOfTheSerpent")
        case CHASING_A_GHOST:
            return t("enum.mission.chasingAGhost")
        case ILLUSIONS_OF_GRANDEUR:
            return t("enum.mission.illusionsOfGrandeur")
        case ANOTHER_LIFE:
            return t("enum.mission.anotherLife")
        case A_BITTER_PILL:
            return t("enum.mission.aBitterPill")
        case THE_ARK_SOCIETY:
            return t("enum.mission.theArkSociety")
        case GOLDEN_HANDSHAKE:
            return t("enum.mission.goldenHandshake")
        case THE_LAST_RESORT:
            return t("enum.mission.theLastResort")
        case THE_LAST_YARDBIRD:
            return t("enum.mission.theLastYardbird")
        case THE_PEN_AND_THE_SWORD:
            return t("enum.mission.thePenAndTheSword")
        case CRIME_AND_PUNISHMENT:
            return t("enum.mission.crimeAndPunishment")
        case ON_TOP_OF_THE_WORLD:
            return t("enum.mission.onTopOfTheWorld")
        case DEATH_IN_THE_FAMILY:
            return t("enum.mission.deathInTheFamily")
        case THE_DARTMOOR_GARDEN_SHOW:
            return t("enum.mission.theDartmoorGardenShow")
        case APEX_PREDATOR:
            return t("enum.mission.apexPredator")
        case END_OF_AN_ERA:
            return t("enum.mission.endOfAnEra")
        case THE_FAREWELL:
            return t("enum.mission.theFarewell")
        case UNTOUCHABLE:
            return t("enum.mission.untouchable")
        case SHADOWS_IN_THE_WATER:
            return t("enum.mission.shadowsInTheWater")
    }
}