Package.describe({
  name: 'ksrv:system-messages-router',
  version: '0.0.2',
  summary: 'Save cuurent URL from iron:router to system message.',
  git: 'https://github.com/ksrv/system-messages-router.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4');

  api.use('ecmascript');
  api.use('ksrv:system-messages@0.0.1');
  api.use('matb33:collection-hooks@0.8.3', 'client');

  api.mainModule('system-messages-router.js', 'client');
});
