var gulp = require('gulp');

gulp.task('default', function() {
  web: rackup faye.ru -E production -s thin
  web: bundle exec rails s

});
