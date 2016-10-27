angular
  .module('app')
  .directive('createShopForm', createShopForm)

function createShopForm() {
  return {
    restrict: 'E',
    templateUrl: 'templates/create-shop-form.html',
    controller: 'CreateShopForm',
    controllerAs: 'form'
  }
}
