const gulp = require('gulp');
const postcss = require('gulp-postcss');
const htmlmin = require('gulp-htmlmin');
const inline = require('gulp-inline');

gulp.task('css', () => {
  return gulp
    .src('./style.css')
    .pipe(
      postcss([
        require('tailwindcss'),
        require('autoprefixer'),
        require('uncss').postcssPlugin({
          html: ['index.html']
        }),
        require('cssnano')({
          preset: 'default'
        })
      ])
    )
    .pipe(gulp.dest('build/'));
});

gulp.task(
  'html',
  gulp.series('css', () => {
    return gulp
      .src('./index.html')
      .pipe(
        inline({
          base: 'build/',
          disabledTypes: ['svg', 'img', 'js']
        })
      )
      .pipe(
        htmlmin({
          collapseWhitespace: true,
          minifyJS: true,
          removeComments: true
        })
      )
      .pipe(gulp.dest('docs'));
  })
);
