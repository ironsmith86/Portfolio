var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    concat = require("gulp-concat"),
    browserify = require("gulp-browserify"),
    connect = require("gulp-connect");

var htmlSources,
    sassSources,
    jsSources;

htmlSources = ["builds/development/*.html"];
sassSources = ["components/sass/*.sass"];
jsSources = ["components/scripts/*.js"];

gulp.task("connect", function(){
    connect.server({
        root: "builds/development/",
        livereload: true
    })
});

gulp.task('jsconcat', function(){
    gulp.src(jsSources)
        .pipe(concat("script.js"))
        .pipe(browserify())
        .pipe(gulp.dest("builds/development/js/"))
        .pipe(connect.reload());
})