const colors = require("tailwindcss/colors");

module.exports = {
    purge: ["./*.html", "./*.js"],
    darkMode: "class",
    theme: {
        colors: {
            gray: colors.gray,
            red: colors.red,
            yellow: colors.amber,
            green: colors.emerald,
            blue: colors.blue,
            indigo: colors.indigo,
            purple: colors.violet,
            pink: colors.pink,
            transparent: "transparent",
            current: "currentColor",
            black: colors.black,
            white: colors.white,
            primary: colors.blue
        }
    },
    variants: {
        extend: {},
    }
};