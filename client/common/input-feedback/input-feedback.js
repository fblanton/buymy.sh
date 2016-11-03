angular
  .module('app')
  .directive('inputFeedback', inputFeedback)

function inputFeedback() {
  return {
    restrict: 'A',
    link
  }

  function link(scope, element) {
    const inputs = element.find('input')

    for (let i = 0; i < inputs.length; i++) {
      const item = angular.element(inputs[i])
      const observe = element.attr('name') + '.' + item.attr('name')

      scope.$watchCollection(observe, ({ $touched, $valid, $dirty }) => {
        item.toggleClass('form-control-success', ($dirty || $touched) && $valid)
        item.toggleClass('form-control-danger', ($dirty || $touched) && !$valid)
      })
    }
  }
}
