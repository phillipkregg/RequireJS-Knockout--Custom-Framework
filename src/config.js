require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,
  paths: {
    'knockout'    : '../external/knockout',
    'smokesignals': '../external/smokesignals',
    'text'        : '../external/text',
    'views'       : '../views'
  },

  // shim allows you to use a non-amd script within your project as if it were amd
  shim: {
    'smokesignals': {
      exports: 'smokesignals'
    }
  }

});
define();
