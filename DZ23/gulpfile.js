const {series, parallel, src, dest} = require ('gulp');
const concat = require ('gulp-concat');
const uglify = require('gulp-uglify');
const inject = require('gulp-inject');
const del = require('del');

function cleanDist () {
    return del('dist')  
}
function copyCss() {
    return src( 
    [
    '../common/css/normalize.css',
    '../common/css/skeleton.css',
    '../common/css/dark-theme.css',
    './src/styles.css']
    )
    .pipe(concat('app.css'))
    .pipe(dest('./dist/css'))
}

function copyHtml() {
    return src('./public/*.html')
    .pipe(dest('./dist'));
}

function copyImg() {
    return src('./public/img/*')
    .pipe(dest('./dist/img'))
}

function copyJs() {
    return src('src/**/**.js', '../common/js/utils.js')
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(dest('./dist/js'))
}

function injectIndex() {
    const target = src('./dist/index.html');
    const sources = src(['./dist/css/*.css', './dist/js/*.js']);

    return target.pipe(inject(sources,
        {relative: true,
        transform: function (filepath) {
            if (filepath.slice(-3) === '.js') {
                return '<script src="' + filepath + '" defer></script>';
            }
            return inject.transform.apply(inject.transform, arguments);
            }
        }
        
        ))
    .pipe(dest('./dist'));
}

module.exports = {
    build: series(cleanDist, parallel(copyCss, copyJs, copyImg, copyHtml), injectIndex)
}