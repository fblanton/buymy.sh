angular
  .module('app')
  .config($stateProvider => {
    const EditItem = {
      name: 'Shop.EditItem',
      url: '/items/:itemId/edit',
      templateUrl: 'templates/edit-item.html',
      controller: 'EditItem as item'
    }

    $stateProvider.state(EditItem)
  })
