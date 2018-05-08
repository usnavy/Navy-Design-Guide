'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import data from 'gulp-data';
import insert from 'gulp-insert';
import markdown from 'gulp-markdown';
import sass from 'gulp-sass';

const fontDirectory = './src/fonts/**/*';

export const fonts = () => gulp.src(fontDirectory).pipe(gulp.dest('./dist/fonts'));
export const webserver = () => connect.server();

export function compileMarkdown() {
  return gulp.src('./src/md/**/*.md')
    .pipe(markdown({gfm: true}))
    .pipe(insert.wrap('<section>', '</section>'))
    .pipe(concat('body.html'))
    .pipe(gulp.dest('./dist/'));
}

export function concatHTML() {
  const sources = [
    './src/html/header.html',
    './dist/body.html',
    './src/html/footer.html'
  ];

  return gulp.src(sources)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
}

export const html = gulp.series(compileMarkdown, concatHTML);

export function compileSCSS() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
}

export const compile = gulp.parallel(html, compileSCSS, fonts);

export function watchFiles() {
  gulp.watch('./src/md/**/*.md', compileMarkdown);
  gulp.watch('./dist/*.html', html);
  gulp.watch('./src/scss/**/*.scss', compileSCSS);
}

export const watch = gulp.series(compile, webserver, watchFiles);

export default compile;
