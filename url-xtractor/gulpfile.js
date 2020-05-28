// jshint node: true
// jshint esversion: 10 
'use strict';
const {
  parallel,
  src,
  dest,
  series,
  watch,
  gulp
} = require('gulp'),
  concat = require('gulp-concat'),
  rename = require("gulp-rename"),
  minifyHTML = require("gulp-htmlmin"),
  minify = require('gulp-minify'),
  sass = require("gulp-sass"),
  autoprefixer = require('gulp-autoprefixer'),
  sourcemaps = require('gulp-sourcemaps'),
  browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

var _headerScripts = ['json2.js', 'strsup.js', 'localread.js', 'csvparse.js', 'csvsup.js'];
var headerScripts = _headerScripts.map(elem => "src/js/libs/" + elem);
headerScripts.push("src/js/header.js");

var mainGulp = {
  // Điều chỉnh, thêm bớt dữ liệu tại đây
  path: {
    html: "src/content.html",
    sass: "src/scss/style.scss",
    headerjs: headerScripts,
    footerjs: "src/js/footer.js",
    dist: "./dist"
  },
  name: {
    html: "index.html",
    css: "style.css",
    headerjs: "footer.js",
    footerjs: "header.js"
  },
  // Phần dưới này tốt nhất mặc kệ
  export: {
    headerjs: function () {
      return src(mainGulp.path.headerjs)
        .pipe(concat(mainGulp.name.footerjs))
        .pipe(sourcemaps.init())
        .pipe(minify({
          mangle: false,
          noSource: true,
          ext: {
            min: ".min.js"
          }
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest(mainGulp.path.dist))
        .pipe(browserSync.stream());
    },
    footerjs: function () {
      return src(mainGulp.path.footerjs)
        .pipe(concat(mainGulp.name.footerjs))
        .pipe(sourcemaps.init())
        .pipe(minify({
          mangle: false,
          noSource: true,
          ext: {
            min: ".min.js"
          }
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest(mainGulp.path.dist))
        .pipe(browserSync.stream());
    },
    css: function () {
      return src(mainGulp.path.sass)
        .pipe(rename(mainGulp.name.css))
        .pipe(rename(function (path) {
          return {
            dirname: path.dirname + "/",
            basename: path.basename + ".min",
            extname: ".css",
          };
        }))
        .pipe(sourcemaps.init())
        .pipe(minify({
          mangle: false,
          noSource: true,
          ext: {
            min: ".min.css"
          }
        }))
        .pipe(sass.sync({
          "outputStyle": "compressed",
        }).on('error', sass.logError))
        .pipe(autoprefixer({
          cascade: true
        }))
        .pipe(sourcemaps.write("./"))
        .pipe(dest(mainGulp.path.dist))
        .pipe(browserSync.stream());
    },
    html: function () {
      return src(mainGulp.path.html)
        .pipe(minifyHTML({
          collapseWhitespace: true,
          removeComments: true,
          removeEmptyAttributes: false,
          minifyCSS: true,
          minifyJS: true,
        }))
        .pipe(rename(mainGulp.name.html))
        .pipe(dest(mainGulp.path.dist))
        .pipe(browserSync.stream());
        
    },
  },
  watch: function () {
    browserSync.init({
      server: {
        baseDir: "./"
      }
    });
    watch([mainGulp.path.sass, mainGulp.path.html], exports.build, function () {
      browserSync.reload();
    });
  },
};

exports.build = parallel(mainGulp.export.headerjs, mainGulp.export.footerjs, mainGulp.export.html, mainGulp.export.css);
exports.watch = series(exports.build, mainGulp.watch);
exports.default = exports.watch;