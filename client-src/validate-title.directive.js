// angular
//   .module('app')
//   .directive('validTitle', validTitle)
//
// function validTitle() {
//   return {
//     require: 'ngModel',
//     restrict: 'A',
//     link: function(scope, elm, attrs, controller) {
//
//     }
//   }
// }


angular
  .module('app')
  .directive('validTitle', validTitle)

function validTitle(dataservice) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.validTitle = function(title) {
        if (title === '') return Promise.resolve()

        return dataservice
          .checkTitle('ops/' + title)
          .then(response => {
            if (response.available) {
              return Promise.resolve()
            }
            else { return Promise.reject() }
          })
      }
    }
  }
}
