'use strict';

import fs from 'fs';
import path from 'path';
import gulp from 'gulp';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import data from 'gulp-data';
import insert from 'gulp-insert';
import markdown from 'gulp-markdown';
import sass from 'gulp-sass';
import merge from 'merge-stream';

const markdownDirectory = 'src/md';
const fontDirectory = 'src/fonts/**/*';
const partialsDirectory = 'dist/partials';

export const fonts = () => gulp.src(fontDirectory).pipe(gulp.dest('./dist/fonts'));
export const webserver = () => connect.server();

const getFolders = (dir) => fs.readdirSync(dir)
  .filter(file => fs.statSync(path.join(dir, file)).isDirectory());

const getFiles = (dir) => fs.readdirSync(dir)
  .filter(file => fs.statSync(path.join(dir, file)).isFile());

export function compileMarkdown(done) {
  const folders = getFolders(markdownDirectory);

  if (folders.length === 0) {
    return done();
  }

  const tasks = folders.map(folder => {
    return gulp.src(path.join(markdownDirectory, folder, '/**/*.md'))
      .pipe(markdown({gfm: true}))
      .pipe(insert.wrap('<section>', '</section>'))
      .pipe(concat(folder + '.html'))
      .pipe(insert.wrap('<section>', '</section>'))
      .pipe(gulp.dest(partialsDirectory));
  });

  return merge(tasks);
}

export function concatHTML() {
  let sources = getFiles(partialsDirectory);

  if (sources.length > 0) {
    sources = sources.map(file => {
      return path.join(partialsDirectory, file);
    });
  }

  sources.unshift('src/html/header.html');
  sources.push('src/html/footer.html');

  return gulp.src(sources)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
}

export const html = gulp.series(compileMarkdown, concatHTML);

export function compileSCSS() {
  return gulp.src('src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
}

export const compile = gulp.parallel(html, compileSCSS, fonts);

export function watchFiles() {
  gulp.watch('src/md/**/*.md', compileMarkdown);
  gulp.watch('dist/*.html', html);
  gulp.watch('src/scss/**/*.scss', compileSCSS);
}

export const watch = gulp.series(compile, webserver, watchFiles);

export default compile;
