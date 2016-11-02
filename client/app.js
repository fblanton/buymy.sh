angular
  .module('app', ['ui.router', 'ngSanitize', 'ngMeta'])
  .config(($urlRouterProvider, $uiViewScrollProvider) => {
    $urlRouterProvider.otherwise('/')
    $uiViewScrollProvider.useAnchorScroll()
  })
  .run(['ngMeta', function(ngMeta) {
    ngMeta.init();
  }])
