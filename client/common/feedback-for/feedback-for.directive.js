angular
  .module('app')
  .directive('feedbackFor', feedbackFor)

function feedbackFor() {
  return {
    restrict: 'A',
    require: '^form',
    link
  }

  function link(scope, element, attrs, { $name }) {
    const observe = $name + '.' + attrs.feedbackFor
    element.toggleClass('has-feeback', true)
    scope.$watchCollection(observe, ({ $touched, $valid, $dirty }) => {
      element.toggleClass('has-success', ($dirty || $touched) && $valid)
      element.toggleClass('has-danger', ($dirty || $touched) && !$valid)
    })
  }
}
