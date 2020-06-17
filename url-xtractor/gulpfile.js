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
  sourcemaps = require('gulp-sourcemaps');
  // browserSync = require("browser-sync").create();
sass.compiler = require("node-sass");

var _headerScripts = ['json2.js', 'strsup.js', 'localread.js', 'csvparse.js', 'csvsup.js'];
var headerScripts = _headerScripts.map(elem => "src/js/libs/" + elem);
headerScripts.push("src/js/header.js");

var mainGulp = {
  // Điều chỉnh, thêm bớt dữ liệu tại đây
  path: {
    html: "./src/content.html",
    js: headerScripts,
    dist: "./dist"
  },
  name: {
    html: "index.html",
    js: "script.js"
  },
  // Phần dưới này tốt nhất mặc kệ
  export: {
    js: function () {
      return src(mainGulp.path.js)
        .pipe(concat(mainGulp.name.js))
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
        // .pipe(browserSync.stream());
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
        .pipe(dest("./"))
        // .pipe(browserSync.stream());

    },
  },
  watch: function () {
    // browserSync.init({
    //   server: {
    //     baseDir: "./"
    //   }
    // });
    watch(mainGulp.path.html, exports.build, function () {
      // browserSync.reload();
    });
  },
};

exports.build = parallel(mainGulp.export.js, mainGulp.export.html);
exports.watch = series(exports.build, mainGulp.watch);
exports.default = exports.watch;