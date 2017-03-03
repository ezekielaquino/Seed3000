var argv = require('yargs').argv;
var gulpif = require('gulp-if');
var rename = require('gulp-rename');
var gulp = require('gulp');
var gutil = require('gulp-util');
var twig = require('gulp-twig');
var stylus = require('gulp-stylus');
var rupture = require('rupture');
var autoprefixer = require('autoprefixer-stylus');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var replace = require('gulp-replace');
var htmlreplace = require('gulp-html-replace');

var paths = {
  html: './source/twig/**/*.html',
  stylus: './source/stylus/**/*.styl',
  images: './source/images/**/*'
}

var dest = {
  build: './',
  assets: './assets',
  images: './assets/img'
}

gulp.task('compile-html', function() {
  return gulp.src(paths.html)
    .pipe(twig())
    .pipe(gulpif(argv.prod, htmlmin({ collapseWhitespace: true })))
    .pipe(gulpif(argv.dev, replace('images/', 'source/images/')))
    .pipe(gulpif(argv.prod, replace('images/', 'assets/img/')))
    .pipe(gulpif(argv.prod, htmlreplace({ css: 'style.min.css' })))
    .pipe(gulp.dest(dest.build))

  .on('end', function() {
    log('🏄 Html: Done!');
    if (argv.prod) log('🐳 Html: Minified!');
  });
});


gulp.task('compile-stylus', function() {
  var options = {
    use: [rupture(), autoprefixer()],
    compress: argv.prod ? true : false
  };

  return gulp.src('./source/stylus/style.styl')
    .pipe(stylus(options))
    .pipe(gulpif(argv.prod, rename('style.min.css')))
    .pipe(gulpif(argv.dev, replace('images/', 'source/images/')))
    .pipe(gulpif(argv.prod, replace('images/', 'assets/img/')))
    .pipe(gulp.dest('./'))

  .on('end', function() {
    log('🍒 Style: Done!');
    if (argv.prod) log('🍭 Style: Minified!');
  });
});


gulp.task('compress-images', function() {
  return gulp.src(paths.images)
    .pipe(imagemin())
    .pipe(gulp.dest(dest.images))

  .on('end', function() {
    log('📸 Images: Compressed!')
  });
});


gulp.task('watch', function() {
  gulp.watch(paths.html, ['compile-html']);
  gulp.watch(paths.stylus, ['compile-stylus']);
});


gulp.task('dev', [
  'compile-html',
  'compile-stylus',
  'watch'
]);

gulp.task('prod', [
  'compress-images',
  'compile-html',
  'compile-stylus'
]);


function log(message) {
  gutil.log(gutil.colors.bold.green(message));
}