angular
  .module('app')
  .config($stateProvider => {
    const createShop = {
      name: 'createShop',
      url: '/create-shop',
      templateUrl: 'templates/create-shop.html',
      controller: 'CreateShop as form'
    }

    $stateProvider.state(createShop)
  })
