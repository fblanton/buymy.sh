angular
  .module('app', ['ui.router'])
  .config($urlRouterProvider => {
    $urlRouterProvider.otherwise('/')
  })
