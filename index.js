const plugin = require("tailwindcss/plugin");
const base = require("./dist/js/base"),
    components = require("./dist/js/components"),
    utilities = require("./dist/js/utilities");

module.exports = plugin(function ({ addUtilities, addComponents, addBase, e, prefix, config }) {
    addBase(base);
    addUtilities(utilities);
    addComponents(components, { variants: ["responsive"] });
});