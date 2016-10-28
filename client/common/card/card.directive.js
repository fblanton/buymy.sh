angular
  .module('app')
  .directive('card', card)

function card() {
  return {
    restrict: 'E',
    scope: { vm: '=' },
    templateUrl: 'templates/card.html'
  }
}
