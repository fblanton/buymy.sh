angular
  .module('app')
  .directive('navBar', navBar)

function navBar() {
  return {
    restrict: 'E',
    templateUrl: 'templates/navbar.html'
  }
}
