angular
  .module('app')
  .directive('shopListing', shopListing)

function shopListing() {
  return {
    restrict: 'E',
    scope: { shop: '=' },
    templateUrl: 'templates/shop-listing.html'
  }
}
