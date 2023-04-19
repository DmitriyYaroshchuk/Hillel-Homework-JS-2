"use strict"
const { task, src, dest, watch, series } = require("gulp");
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
const del = require("del");// Удаляет папку dist, если что-то удалили в папке src
const browserSync = require("browser-sync").create();// Позволяет наблюдать за изменениями в реальном времени без перезагрузки страницы
const notify = require("gulp-notify");// Указывает на ошибки, работает в связке с plumber

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
task('update', () => {
    browserSync.init({
        server: {
            baseDir: "./" + distPath
        }
    })
})
task('html', () => {
    return src(path.src.html, {base: srcPath})
        .pipe(plumber())
        .pipe(dest(path.build.html))
        .pipe(browserSync.reload({stream: true}))
})
task('css', () => {
    return src(path.src.css, {base: srcPath + "scss/"})
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "SCSS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end')
            }
        }))
        .pipe(sass())
        .pipe(autoprefixer('last 2 versions'))
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
        .pipe(browserSync.reload({stream: true}))

})
task('js', () => {
    return src(path.src.js, {base: srcPath + "js/"})
        .pipe(plumber({
            errorHandler: function (err) {
                notify.onError({
                    title: "JS Error",
                    message: "Error: <%= error.message %>"
                })(err);
                this.emit('end')
            }
        }))
        .pipe(rigger())
        .pipe(dest(path.build.js))
        .pipe(uglify())
        .pipe(rename({
            suffix: ".min",
            extname: ".js",
        }))
        .pipe(dest(path.build.js))
        .pipe(browserSync.reload({stream: true}))
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
        .pipe(browserSync.reload({stream: true}))
})
task('fonts', () => {
    return src(path.src.fonts, {base: srcPath + "fonts/"})
        .pipe(dest(path.build.fonts))
})

task('clean', () => {
    return del(path.clean)
})
task('build', series('html', 'css', 'js', 'images', 'fonts'))

task('watchFiles', () => {
    watch(path.watch.html, series('html'))
    watch(path.watch.css, series('css'))
    watch(path.watch.js, series('js'))
    watch(path.watch.images, series('images'))
    watch(path.watch.fonts, series('fonts'))
})
task('watch', series('build', 'watchFiles', 'update'))