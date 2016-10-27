angular
  .module('app')
  .directive('validTitle', validTitle)

function validTitle(dataservice) {
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.validTitle = function(title) {
        if (title === '') return Promise.resolve()

        const name =  title.toString().replace(/\s/g, '').toLowerCase()
console.log(name)
        return dataservice
          .checkTitle('ops/' + name)
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
