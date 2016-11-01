angular
  .module('app')
  .config($stateProvider => {
    const Shop = {
      name: 'Shop',
      url: '/shops/:shopName',
      abstract: true,
      templateUrl: 'templates/shop.html',
      controller: 'Shop as shop'
    }

    $stateProvider.state(Shop)
  })
