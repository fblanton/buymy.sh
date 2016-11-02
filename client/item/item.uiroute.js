angular
  .module('app')
  .config($stateProvider => {
    const Item = {
      name: 'Shop.Item',
      url: '/items/:itemId',
      templateUrl: 'templates/item.html',
      controller: 'Item as item'
    }

    $stateProvider.state(Item)
  })
