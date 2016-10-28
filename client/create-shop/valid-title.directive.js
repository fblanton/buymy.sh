angular
  .module('app')
  .directive('validTitle', validTitle)

function validTitle(dataservice) {
  const { shops } = dataservice
  return {
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
      ctrl.$asyncValidators.validTitle = function(title) {
        if (title === '') return Promise.resolve()

        const name =  title.toString().replace(/\s/g, '').toLowerCase()

        return shops
          .checkTitle(name)
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
