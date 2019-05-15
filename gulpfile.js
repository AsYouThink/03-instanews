const gulp = require("gulp"); // Load Gulp!
// Now that we've installed the terser package we can require it:
const terser = require("gulp-terser"),
  rename = require("gulp-rename");
  
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});


gulp.task("scripts", function() {
  return gulp
    .src("./js/*.js") // What files do we want gulp to consume?
    .pipe(terser()) // Call the terser function on these files
    .pipe(rename({ extname: ".min.js" })) // Rename the uglified file
    .pipe(gulp.dest("./build/js")); // Where do we put the result?
});


gulp.task('say_hello', function(done) {
    console.log('Hello!');
  done();
});

gulp.task('reload'), function({
    browserSync.reload();
});

gulp.task("watch", function() {
    gulp.watch("js/*.js", gulp.series("scripts", ));
  });

gulp.task('default', gulp.series('watch'));