Package.describe({
  name: 'thepumpinglemma:cookies',
  summary: 'Meteor package that wrap the cookies package from NPM.',
  version: '1.0.0',
  git: 'https://github.com/ThePumpingLemma/meteor-cookies.git'
});

Npm.depends({
  'cookies': '0.5.0'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.export('Cookies', ['server'])
  api.addFiles('thepumpinglemma:cookies.js', ['server']);
});

