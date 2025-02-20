// Le paquet react-select recommande fortement d'utiliser du css dans le js afin de
// personnaliser les styles internes du select.
export const targetSelectStyles = {
    menu: (styles) => ({
        ...styles,
        background: "var(--background-color-secondary)"
    }),
    input: (styles) => ({
        ...styles,
        color: "var(--color-white)"
    }),
    control: (styles) => ({
        ...styles,
        background: "var(--background-color-secondary)",
        borderColor: "var(--color-main)",
        "img": {
            ...styles["img"],
            height: "7rem",
            display: "inline",
            verticalAlign: "middle",
            padding: "0 1rem"
        },
        "span": {
            ...styles["span"],
            display: "inline",
            verticalAlign: "middle",
            color: "var(--color-white)",
            padding: "0 1rem"
        }
    }),
    option: (styles, {isFocused}) => ({
        ...styles,
        backgroundColor: isFocused ? "var(--color-red)" : "var(--background-color-secondary)",
        color: "var(--color-white)",
        cursor: isFocused ? "pointer" : "default",
        "img": {
            ...styles["img"],
            height: "7rem",
            width: "7rem",
            objectFit: "cover",
            display: "inline",
            verticalAlign: "middle",
            padding: "0 1rem",
        },
        "span": {
            ...styles["span"],
            display: "inline",
            verticalAlign: "middle",
            color: "var(--color-white)",
            padding: "0 1rem"
        }
    }),
    indicatorSeparator: (styles) => ({
        ...styles,
        backgroundColor: "rgba(0,0,0,0)"
    }),
    placeholder: (styles) => ({
        ...styles,
        color: "var(--color-white)"
    }),
}