require.config({
  baseUrl: 'src',
  deps: ['main'],
  enforceDefine: true,
  paths: {
    'knockout': '../external/knockout',
    'smokesignals': '../external/smokesignals'
  },
  shim: {
    'smokesignals': {
      exports: 'smokesignals'
    }
  }
});
define();
