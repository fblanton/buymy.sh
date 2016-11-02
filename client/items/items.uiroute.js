angular
  .module('app')
  .config($stateProvider => {
    const Items = {
      name: 'Shop.Items',
      url: '',
      templateUrl: 'templates/items.html',
      controller: 'Items'
    }

    $stateProvider.state(Items)
  })
