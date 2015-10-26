var pack       = require('./package.json')
var gulp       = require('gulp');
var concat     = require('gulp-concat');
var rename     = require('gulp-rename');
var uglify     = require('gulp-uglify');
var less       = require('gulp-less');
var browserify = require('gulp-browserify');


gulp.task('buildJs', function(){
  gulp.src(['web/js/app.js'])
    .pipe(browserify({
          transform: ['babelify'],
          insertGlobals : true,
          debug : true
        }))
    .pipe(rename(pack.name + '.js'))
    .pipe(gulp.dest('./web/compiled'))
    .pipe(uglify())
    .pipe(rename(pack.name + '.min.js'))
    .pipe(gulp.dest('./web/compiled'));
});

gulp.task('copyFonts', function(){
    gulp.src(['node_modules/bootstrap/fonts/*'])
        .pipe(gulp.dest('web/fonts/bootstrap'));

    gulp.src(['node_modules/font-awesome/fonts/*'])
        .pipe(gulp.dest('web/fonts/fa'));
});

gulp.task('compileLess', function(){
    gulp.src(['web/styles/app.less'])
        .pipe(less())
        .pipe(rename(pack.name + '.css'))
        .pipe(gulp.dest('./web/compiled'));
});

gulp.task('build', function(){
  gulp.run('buildJs', 'copyFonts', 'compileLess');
});

gulp.task('watch', function(){
  gulp.watch(['web/**/*.js', '!web/compiled/*.js', 'web/**/*.less'], function(event){
    gulp.run('build');
  });
});

gulp.task('default', function(){
  gulp.run('build', 'watch');
});
