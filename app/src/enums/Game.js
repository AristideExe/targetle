export const WOA1 = "WOA1";
export const WOA2 = "WOA2";
export const WOA3 = "WOA3";

export const GAME = [WOA1, WOA2, WOA3];

export const labels = (game, t) => {
    switch (game) {
        case WOA1:
            return t("enum.game.woa1");
        case WOA2:
            return t("enum.game.woa2");
        case WOA3:
            return t("enum.game.woa3");
    }
}