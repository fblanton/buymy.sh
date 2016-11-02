angular
  .module('app')
  .config($stateProvider => {
    const Shop = {
      name: 'Shop',
      url: '/shops/:shopName',
      abstract: true,
      templateUrl: 'templates/shop.html',
      controller: 'Shop as shop',
      resolve: {
        shop:  ($stateParams, dataservice) =>
          dataservice.shops
            .read($stateParams.shopName)
            .then(shop => shop),
        items: ($stateParams, dataservice) =>
          dataservice.items
            .shopItems($stateParams.shopName)
            .then(items => items)
      }
    }

    $stateProvider.state(Shop)
  })
