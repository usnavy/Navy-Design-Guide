'use strict';

import gulp from 'gulp';
import concat from 'gulp-concat';
import connect from 'gulp-connect';
import data from 'gulp-data';
import insert from 'gulp-insert';
import markdown from 'gulp-markdown';
import sass from 'gulp-sass';

const fontDirectory = './src/fonts/**/*';

gulp.task('md', () => {
  return gulp.src('./src/md/*.md')
    .pipe(markdown())
    .pipe(insert.wrap('<section>', '</section>'))
    .pipe(concat('body.html'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('md:watch', () => gulp.watch('./src/md/**/*.md', ['md']));

gulp.task('html', ['md'], () => {
  const sources = [
    './src/html/header.html',
    './dist/body.html',
    './src/html/footer.html'
  ];

  return gulp.src(sources)
    .pipe(concat('index.html'))
    .pipe(gulp.dest('./'));
});

gulp.task('html:watch', () => gulp.watch('./dist/*.html', ['html']));

gulp.task('sass', () => {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', () => {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('fonts', () => gulp.src(fontDirectory).pipe(gulp.dest('./dist/fonts')));

gulp.task('webserver', () => connect.server());

gulp.task('compile', ['md', 'html', 'sass', 'fonts']);

gulp.task('watch', ['compile', 'md:watch', 'html:watch', 'sass:watch', 'webserver']);

gulp.task('default', ['compile']);
