import {useLocalStorage} from "@uidotdev/usehooks";
import {GAMEMODE} from "../../enums/Gamemode.js";

const useStatistics = (gamemode) => {
    const [ statistics, setStatistics ] = useLocalStorage('statistics',
        GAMEMODE.reduce((obj, item) => (obj[item] = {
            lastPlayed: "",
            lastVictory: "",
            victoriesCount: 0,
            dailyStreak: 0
        }, obj), {}));

    const gameModeStatistics = statistics[gamemode] ?? {};

    const setGamemodeProperty = (property, value) => {
        gameModeStatistics[property] = value;
        setStatistics(statistics);
    }

    return {
        lastPlayed: gameModeStatistics.lastPlayed,
        setLastPlayed: value => setGamemodeProperty("lastPlayed", value),
        lastVictory: gameModeStatistics.lastVictory,
        setLastVictory: value => setGamemodeProperty("lastVictory", value),
        victoriesCount: gameModeStatistics.victoriesCount,
        setVictoriesCount: value => setGamemodeProperty("victoriesCount", value),
        dailyStreak: gameModeStatistics.dailyStreak,
        setDailyStreak: value => setGamemodeProperty("dailyStreak", value),
    }
}

export default useStatistics;