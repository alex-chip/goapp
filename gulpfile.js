'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const dir = {
    src: 'resources',
    dist: 'public'
};

const options = {
    sass: { outputStyle: 'nested' },
    autoprefixer: {
        browsers: ['last 5 versions'],
        cascade: false
    }
};

gulp.task('sass', () => {
    gulp.src(`${dir.src}/scss/**/*.scss`)
        .pipe(sourcemaps.init())
        .pipe(sass(options.sass).on('error', sass.logError))
        .pipe(autoprefixer(options.autoprefixer))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(`${dir.dist}/css`));
});

gulp.task('watch', () => {
    gulp.watch(`${dir.src}/scss/**/*.scss`, ['sass'])
});

gulp.task('default', ['sass','watch']);