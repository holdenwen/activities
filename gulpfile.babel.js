import gulp from 'gulp'
// import babel from 'gulp-babel'
// import concat from 'gulp-concat'
// import sourcemaps from 'gulp-sourcemaps'
import fs from 'fs'
// import zlib from 'zlib'
// import rollup from 'rollup'
// import uglify from 'uglify-js'

// import replace from 'rollup-plugin-replace'

const version = process.env.VERSION || require('./package.json').version
let banner =
    '/*!\n' +
    ' * http://viva.vip.com v' + version + '\n' +
    ' * (c) ' + new Date().getFullYear() + ' Tim Wen\n' +
    ' * Released under the MIT License.\n' +
    ' */'
// let main = fs
//     .readFileSync('src/index.js', 'utf-8')
//     .replace(/Vue\.version = '[\d\.]+'/, "Vue.version = '" + version + "'")
// fs.writeFileSync('src/index.js', main)



// gulp.task('default', () => {
    
// })

// gulp.task('development', () => {

// })

// gulp.task('production', () => {

// })


gulp.task('one', () => {
    console.log('one')
    // cb(err)
    // cb()
})

gulp.task('two', ['one'], () => {
    console.log('two')
})

gulp.task('default', ['one', 'two'], () => {
    console.log(banner)
})