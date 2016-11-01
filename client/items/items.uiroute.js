angular
  .module('app')
  .config($stateProvider => {
    const Items = {
      name: 'Shop.Items',
      url: '',
      templateUrl: 'templates/items.html',
    }

    $stateProvider.state(Items)
  })
