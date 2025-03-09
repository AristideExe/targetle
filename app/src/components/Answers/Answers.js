import {useLocalStorage} from "@uidotdev/usehooks";
import {GAMEMODE} from "../../enums/Gamemode.js";

const useAnswers = (gamemode) => {
    const [ answers, setAnswers ] = useLocalStorage("answers",
        GAMEMODE.reduce((obj, item) => (obj[item] = [], obj), {}
    ));

    return {
        answers: answers[gamemode],
        addAnswer: answer => {
            answers[gamemode] = [answer, ...answers[gamemode]];
            setAnswers(answers);
        },
        clearAnswers: () => {
            answers[gamemode] = [];
            setAnswers(answers);
        }
    }
}

export default useAnswers;