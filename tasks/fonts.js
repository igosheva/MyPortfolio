import gulp from 'gulp';
import flatten from 'gulp-flatten';

gulp.task('fonts', () => (
	gulp.src(['app/common/fonts/**/*'])
		.pipe(gulp.dest('dist/assets/fonts'))
));
