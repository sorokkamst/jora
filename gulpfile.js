const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sourcemap = require("gulp-sourcemaps");
const less = require("gulp-less");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const csso = require("postcss-csso");
const rename = require("gulp-rename");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
const sync = require("browser-sync").create();

// html
const html = () => {
    return gulp.src("source/**/*.html")
        .pipe(htmlmin())
        .pipe(gulp.dest('build'))
        .pipe(sync.stream())
};

exports.html = html;

//styles
const styles = () => {
    return gulp.src("source/less/*.less")
        .pipe(sync.stream())
        .pipe(plumber())
        .pipe(sourcemap.init())
        .pipe(less())
        .pipe(gulp.dest("build/css"))
        .pipe(postcss([
            autoprefixer(),
            csso()
        ]))
        .pipe(sourcemap.write("."))
        .pipe(rename("style.min.css"))
        .pipe(gulp.dest("build/css"))
};

exports.styles = styles;

//copy
const copy = () => {
    return gulp.src([
        "source/fonts/*.{woff2,woff}",
        "source/images/**/*.{jpg,png,svg}"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("build"))
        .pipe(sync.stream());
};

exports.copy = copy;

//delete
const clean = () => {
    return del("dist");
};

//server
const server = (done) => {
    sync.init({
        server: {
            baseDir: "build"
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
};

exports.server = server;

//watcher
const watcher = () => {
    gulp.watch("source/less/**/*.less", gulp.series(styles));
    gulp.watch("source/**/*.html", gulp.series(html));
    gulp.watch("source/js/**/*.js", gulp.series(copy));
};

//build
const build = gulp.series(
    clean,
    gulp.parallel(
        styles,
        html,
        copy
    ));

exports.build = build;

exports.default = gulp.series(
    build, server, watcher
);
