const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'] //what to give access for -google's list for
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google')
  );
};
