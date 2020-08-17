// 导入模块
let gulp = require('gulp');
let sass = require('gulp-sass');
let cssnano = require('gulp-cssnano');
let imagemin = require('gulp-imagemin');
let htmlmin = require('gulp-htmlmin');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');




// sass转css
function fnSass(){
    return gulp.src('./src/sass/*.scss')
    .pipe(sass())
    // .pipe(sass({outputStyle: 'expanded'}))
    // .pipe(cssnano())
    .pipe(gulp.dest('./dist/css'))
}

// 拷贝index.html
function fnCopy(){
    return gulp.src('./src/index.html')
    .pipe(gulp.dest('./dist'))
}

// 压缩图片
function fnImg(){
    return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'));
}

// 压缩html
function fnHtml(){
    return gulp.src('./src/html/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist/html'));
}

// 压缩js
function fnJs(){
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'));
}


// 导出模块
exports.fnSass = fnSass;
exports.fnCopy = fnCopy;
exports.fnImg = fnImg;
exports.fnHtml = fnHtml;
exports.fnJs = fnJs;




// 监听
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnSass);
    gulp.watch('./src/js/*.js',fnJs);
}
exports.default = fnWatch;