var gulp = require("gulp"),
    gutil = require("gulp-util"),
    sass = require("gulp-sass"),
    jsconcat = require("gulp-concat"),
    browserify = require("gulp-browserify"),
    connect = require("gulp-connect");

var htmlSources,
    sassSources,
    jsSources;

htmlSources = ["builds/development/*.html"];
sassSources = ["components/sass/*.sass"];
jsSources = ["components/scripts/*.js"];