const gulp = require('gulp');
const postcss = require('gulp-postcss');

gulp.task('css', function() {
  return (
    gulp
      .src('./style.css')
      // ...
      .pipe(
        postcss([
          // ...
          require('tailwindcss'),
          require('autoprefixer')
          // ...
        ])
      )
      // ...
      .pipe(gulp.dest('build/'))
  );
});
