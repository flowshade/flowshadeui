module.exports = {
    purge: ["./*.html", "./*.js"],
    darkMode: "class", // or 'media' or 'class'
    theme: {
        // extend: {
        //     backgroundImage: theme => ({
        //         'select-arrow': "url('../arrows-scroll-v.svg')"
        //     })
        // }
    },
    plugins: [
        require("../index")
    ],
};