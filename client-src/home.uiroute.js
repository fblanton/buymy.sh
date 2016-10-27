angular
  .module('app')
  .config($stateProvider => {
    const home = {
      name: 'home',
      url: '/',
      templateUrl: 'templates/home.html',
    }

    $stateProvider.state(home)
  })
