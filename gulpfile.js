// Gulp.js configuration
var
  // modules
  gulp            = require('gulp'),

  plugin          = require('./_inc/plugin'),
  config          = require('./_inc/config'),
  paths           = require('./_inc/paths'),
  requireDir      = require('require-dir')('./_tasks')
;

// run folder tasks
gulp.task('do-all', ['html', 'images', 'css', 'css:bootstrap', 'js', 'rootfiles', 'css:critical']);

gulp.task('build', function(callback) {
  if (process.env.NODE_ENV == 'Staging' || process.env.NODE_ENV == 'Production') {
    plugin.runSequence('clean', 'do-all', 'sitemap', 'generate-service-worker', callback);
  } else {
    plugin.runSequence('clean', 'do-all', 'sitemap', callback);
  }
});

// default task for Devs (their local environment)
gulp.task('local', ['build', 'webserver']);

// default task for Devs (DL environment)
gulp.task('dev', ['set-dl-env','build','webserver']);

// default task for Devs (ML environmens)
gulp.task('staging', ['set-ml-env','build', 'webserver']);

// default task for Devs (Production environment)
gulp.task('prod', ['set-prod-env','build', 'webserver']);

// default task
gulp.task('default', ['set-dl-env','build', 'webserver']);
