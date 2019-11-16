"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const browserSync = require("browser-sync").create();

function style() {
    return (
        gulp
            .src("./assets/sass/**/*.scss")
            .pipe(sass().on("error", sass.logError))
            .pipe(gulp.dest("./assets/css"))
            .pipe(browserSync.stream())
    );
}

function watch() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("./assets/sass/**/*.scss", style);
    gulp.watch("./*.html").on("change", browserSync.reload);
    gulp.watch("./assets/css/**/*.css").on("change", browserSync.reload);
    gulp.watch("./assets/js/**/*.js").on("change", browserSync.reload);
}

exports.style = style;
exports.watch = watch;