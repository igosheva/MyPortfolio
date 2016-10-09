import gulp from 'gulp';
import plumber from 'gulp-plumber';
import gulpIf from 'gulp-if';
import rupture from 'rupture';
import stylint from 'gulp-stylint';
import stylus from 'gulp-stylus';
import importIfExist from 'stylus-import-if-exist';
import autoprefixer from 'autoprefixer-stylus';
import gcmq from 'gulp-group-css-media-queries';
import nano from 'gulp-cssnano';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import errorHandler from 'gulp-plumber-error-handler';
import replace from 'gulp-replace';
import flatten from 'gulp-flatten';
import concat from 'gulp-concat';

const isDebug = process.env.NODE_ENV !== 'production';

const prodImagePath = '../images/';
const devImagePath = 'assets/images/';

const prodFontsPath = '../fonts/';
const devFontsPath = 'assets/fonts/';

const pathsToCssToLoad = [
	'node_modules/qtip2/dist/jquery.qtip.css'
	// 'app/common/scripts/vendor/jquery-ui/css/base/*.css',
	// 'app/common/scripts/vendor/jquery-ui-timepicker-addon.css',
	// 'node_modules/bxslider/dist/jquery.bxslider.css',
];

gulp.task('styles', () => (
	gulp.src([
		'app/**/*.styl',
		...pathsToCssToLoad
		])
		.pipe(plumber({errorHandler: errorHandler(`Error in \'styles\' task`)}))
		.pipe(gulpIf(isDebug, sourcemaps.init()))
		.pipe(stylus({
			use: [
				importIfExist(),
				rupture(),
				autoprefixer()
			],
			'include css': true
		}))
		.pipe(gulpIf(!isDebug, gcmq()))
		.pipe(gulpIf(!isDebug, nano({zindex: false, discardUnused: {fontFace: false}})))
		.pipe(gulpIf(!isDebug, replace(devImagePath, prodImagePath)))
		.pipe(gulpIf(!isDebug, replace(devFontsPath, prodFontsPath)))
		.pipe(gulpIf(isDebug, sourcemaps.write()))
		.pipe(flatten())
		.pipe(concat('app.min.css'))
		.pipe(gulp.dest('dist/assets/styles'))
));

gulp.task('styles:lint', () => (
	gulp.src(['app/**/**/*.styl', '!app/common/styles/**'])
		.pipe(stylint({
			reporter: 'stylint-stylish',
			reporterOptions: {verbose: true}
		}))
		.pipe(stylint.reporter())
));
