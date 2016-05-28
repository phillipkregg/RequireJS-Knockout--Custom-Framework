require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,
  paths: {
    'knockout': '../external/knockout',
    'smokesignals': '../external/smokesignals'
  },

  // shim allows you to use a non-amd script within your project as if it were amd
  shim: {
    'smokesignals': {
      exports: 'smokesignals'
    }
  }

});
define();
