angular
  .module('app', ['ui.router', 'ngSanitize'])
  .config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/')
  })
