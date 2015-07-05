var gulp = require('gulp');
var ts = require('gulp-typescript');
var util = require('gulp-util');
var webserver = require('gulp-webserver');

gulp.task('transpile', function(){
	gulp.src('ts/*.ts')
	.pipe(ts(
		{
			target: 'ES5',
           	declarationFiles: false,
           	noExternalResolve: true
		}
	))
	.pipe(gulp.dest('public/js'));
});

gulp.task('watch' , function(){
	gulp.watch('ts/*.ts', ['transpile']);
});

gulp.task('webServer' , function(){
	gulp.src('public/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'transpile' , 'webServer']);
