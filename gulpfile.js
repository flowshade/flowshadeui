const fs = require('fs');
const gulp = require("gulp");
const postcss_compiler = require("postcss");
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
const atImport = require("postcss-import");
const convertjs = require('postcss-js');
const tailwindcss = require('tailwindcss');
const exec = require('child_process').exec;

function compile () {
    const config = () => ({
        plugins: [
            autoprefixer(),
            atImport({ root: __dirname }),
            tailwindcss('./src/tailwind.config.js')
        ]
    });
    return gulp.src('./src/*.css')
    .pipe(postcss(config))
    .pipe(gulp.dest("./dist/css"));
}

function transpile (cb) {
    let files = fs.readdirSync('./dist/css').filter(fn => fn.endsWith('.css'));
    for (let i in files) {
        const css  = fs.readFileSync(`./dist/css/${files[i]}`);
        const root = postcss_compiler.parse(css)
        const output = `module.exports = ${JSON.stringify(convertjs.objectify(root))}`
        fs.writeFileSync(`./dist/js/${files[i].split('.').slice(0, -1).join('.')}.js`, output);
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

exports.host = (cb) => {
    exec('git config user.name', function(err, stdout, stderr) {
        console.log(stderr);
        let rgx = new RegExp(/(\p{L}{1})\p{L}+/, 'gu');
        let initials = [...stdout.matchAll(rgx)] || [];
        initials = ((initials.shift()?.[1] || '') + (initials.pop()?.[1] || '')).toLowerCase();
        exec(`lt --port 5500 --subdomain flowshadeui-${initials}`, function (err1, stdout1, stderr1) {
            console.log(stdout1);
            console.log(stderr1);
            cb(err1);
        });
        console.log(`Served! View webpage at https://flowshadeui-${initials}.loca.lt/`);
    })
    
}

exports.build = gulp.series(compile, transpile);
exports.test = gulp.series(gulp.series(compile, transpile), simulate);