const fs = require('fs');
const gulp = require("gulp");
const postcss_compiler = require("postcss");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const atImport = require("postcss-import");
const convertjs = require('postcss-js');
const tailwindcss = require('tailwindcss');
const cssnano = require("gulp-cssnano");

function compile () {
    const config = () => ({
        plugins: [
            autoprefixer(),
            atImport({ root: __dirname }),
            require('tailwindcss/nesting'),
            tailwindcss('./src/tailwind.config.js')
        ]
    });
    return gulp.src(['./src/*.css'])
    .pipe(postcss(config))
    .pipe(cssnano())
    .pipe(gulp.dest("./dist/css"))
}

function transpile (cb) {
    let files = fs.readdirSync('./dist/css').filter(fn => fn.endsWith('.css')).filter(fn => !fn.startsWith("flowshadeui")); //Reads and filters the CSS
    for (let i in files) {
        const css  = fs.readFileSync(`./dist/css/${files[i]}`);
        const root = postcss_compiler.parse(css)
        const output = `module.exports = ${JSON.stringify(convertjs.objectify(root))}`
        if (!fs.existsSync('./dist/js')) fs.mkdirSync('./dist/js');
        fs.writeFileSync(`${__dirname}\\dist\\js\\${files[i].split('.').slice(0, -1).join('.')}.js`, output)
    }
    return cb();
}

let simulate = () => {
    console.log(`\n`);
    let config = () => ({
        plugins: [
            autoprefixer(),
            tailwindcss('./test/tailwind.config.js')
        ]
    })
    return gulp.src('./test/style.css')
    .pipe(postcss(config))
    .pipe(gulp.dest("./test/lib"));
}

exports.build = gulp.series(compile, transpile);
exports.test = simulate;