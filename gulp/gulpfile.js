"use strict"
const { task, src, dest } = require("gulp");
const gulp = require("gulp");
const autoprefixer = require('gulp-autoprefixer');
const cssbeautify = require('gulp-cssbeautify');
const stripCssComments = require('gulp-strip-css-comments');//Удаляет как однострочные, так и многострочные комментарии из JSON, JavaScript и CSS/текста.
const rename = require("gulp-rename");
const sass = require('gulp-sass')(require('sass'));
const cssnano = require('gulp-cssnano');//Минифицирует CSS
const rigger = require('gulp-rigger');//Собирает все js-файлы воедино
const uglify = require('gulp-uglify');//Минифицирует JS
const plumber = require('gulp-plumber'); //Предотвращает ошибки, не дает таску сломаться
const imagemin = require('gulp-imagemin');
const panini = require('panini');
const del = require("del");
const browserSync = require("browser-sync").create();

//_____Paths______//
const srcPath = "src/";
const distPath = "dist/"

const path = {
    build: {
        html: distPath,
        css: distPath + "css/",
        js: distPath + "js/",
        images: distPath + "images/",
        fonts: distPath + "fonts/",
    },
    src: {
        html: srcPath + "*.html",
        css: srcPath + "scss/*.scss",
        js: srcPath + "js/*.js",
        images: srcPath + "images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    watch: {
        html: srcPath + "**/*.html",
        js: srcPath + "js/**/*.js",
        css: srcPath + "scss/**/*.scss",
        images: srcPath + "images/**/*.{jpg,jpeg,png,svg,gif,ico,webp,webmanifest,xml,json}",
        fonts: srcPath + "fonts/**/*.{eot,woff,woff2,ttf,svg}"
    },
    clean: "./" + distPath
}
task('html', () => {
    return src(path.src.html, {base: srcPath})
        .pipe(plumber())
        .pipe(dest(path.build.html))
})
task('css', () => {
    return src(path.src.css, {base: srcPath + "scss/"})
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(cssbeautify())
        .pipe(dest(path.build.css))
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true,
            }
        }))
        .pipe(stripCssComments())
        .pipe(rename({
            suffix: ".min",
            extname: ".css",
        }))
        .pipe(dest(path.build.css))
})
task('js', () => {
    return src(path.src.js, {base: srcPath + "js/"})
        .pipe(plumber())
        .pipe(rigger())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js",
        }))
        .pipe(dest(path.build.js))
})
task('images', () => {
    return src(path.src.images, {base: srcPath + 'images/'})
        .pipe(imagemin([
            imagemin.gifsicle({interlaced: true}),
            imagemin.mozjpeg({quality: 80 , progressive: true}),
            imagemin.optipng({optimizationLevel: 5}),
            imagemin.svgo({
                plugins: [
                    {removeViewBox: true},
                    {cleanupIDs: false}
                ]
            })
        ]))
        .pipe(dest(path.build.images ))
})
task('fonts', () => {
    return src(path.src.fonts, {base: srcPath + "fonts/"})
        .pipe(dest(path.build.fonts))
})
task('build', () => {
    return gulp.series('clean', gulp.parallel('html', 'css', 'js', 'images', 'fonts'))
        .pipe(dest(path.build.html))
})
task('clean', () => {
    return del(path.clean)
})
