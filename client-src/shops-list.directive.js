angular
  .module('app')
  .directive('shopsList', shopsList)

function shopsList() {
  return {
    restrict: 'E',
    templateUrl: 'templates/shops-list.html',
    controller: 'ShopsList',
    controllerAs: 'shops'
  }
}
