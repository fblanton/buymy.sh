angular
  .module('app')
  .config($stateProvider => {
    const Item = {
      name: 'Item',
      parent: 'Shop',
      url: '/items/:itemId',
      templateUrl: 'templates/item.html',
      controller: 'Item as item'
    }

    $stateProvider.state(Item)
  })
