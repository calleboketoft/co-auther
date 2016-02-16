var gulp = require('gulp')

// Protractor
var path = require('path')
var child_process = require('child_process')
var express = require('express')
var http = require('http')
var server = http.createServer(express().use(express.static(__dirname)))
gulp.task('protractor-run', ['serve-files'], (done) => {
  var argv = process.argv.slice(3) // forward args to protractor
  child_process.spawn(getProtractorBinary('protractor'), argv, {
    stdio: 'inherit'
  }).once('close', done)
})
gulp.task('serve-files', (done) => server.listen(3000, done))
gulp.task('test-e2e', ['protractor-run'], (done) => server.close())

function getProtractorBinary(binaryName){
  var winExt = /^win/.test(process.platform)? '.cmd' : ''
  var pkgPath = require.resolve('protractor')
  var protractorDir = path.resolve(path.join(path.dirname(pkgPath), '..', 'bin'))
  return path.join(protractorDir, '/' + binaryName + winExt)
}

// TypeScript
var ts = require('gulp-typescript')
var sourcemaps = require('gulp-sourcemaps')
var tsProject = ts.createProject('src/tsconfig.json')
gulp.task('typescript', function () {
  var tsResult = gulp.src('src/**/*.ts')
    .pipe(sourcemaps.init())
    .pipe(ts(tsProject))

  return tsResult.js
    .pipe(sourcemaps.write({sourceRoot: '/node_modules'}))
    .pipe(gulp.dest('./src'))
})
gulp.task('typescript:watch', ['typescript'], function () {
  gulp.watch('src/**/*.ts', ['typescript'])
})

// SASS (for example-themed)
var sass = require('gulp-sass')
gulp.task('sass', function () {
  gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/example-themed/css'))
})