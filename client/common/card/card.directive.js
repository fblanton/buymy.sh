angular
  .module('app')
  .directive('card', card)

function card() {
  return {
    restrict: 'AE',
    scope: { vm: '=', details: '=' },
    templateUrl: 'templates/card.html'
  }
}
