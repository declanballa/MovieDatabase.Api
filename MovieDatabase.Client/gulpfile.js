var gulp = require("gulp");
var config = require("./gulp.config")();
var del = require("del");
var $ = require("gulp-load-plugins")({lazy: true});

gulp.task("default", ["help"]);
gulp.task("help", $.taskListing);

// Task to compile on sass into main:
gulp.task("styles", ["clean-styles"], function() {
    log("Compiling Sass --> CSS...");

    return gulp
        .src(config.sass)
        .pipe($.plumber())
        .pipe($.sass())
        .pipe($.autoprefixer({
            browsers: ["last 2 version", "> 5%"]
        }))
        .pipe(gulp.dest(config.temp));
});

// Task to clean out compiled temp folder:
gulp.task("clean-styles", function() {
    var files = config.temp + "main.css";

    log("Cleaning: " + $.util.colors.blue(files));
    del(files);
});

// Task for watching files for sass changes:
gulp.task("sass-watcher", function() {
    gulp.watch(config.sassWatch, ["styles"]);
});

// Internal function for all gulp task logging:
function log(message) {
    if (typeof(message) === "object") {
        for (var item in message) {
            if (message.hasOwnProperty(item)) {
                $.util.log($.util.colors.blue(message[item]));
            }
        }
    } else {
        $.util.log($.util.colors.blue(message));
    }
}