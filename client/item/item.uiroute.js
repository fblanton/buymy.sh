angular
  .module('app')
  .config($stateProvider => {
    const Item = {
      name: 'Item',
      url: '/shops/:shopName/items/:itemId',
      templateUrl: 'templates/item.html',
      controller: 'Item as item'
    }

    $stateProvider.state(Item)
  })
