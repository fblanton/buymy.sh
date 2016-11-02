angular
  .module('app')
  .controller('Shop', Shop)

function Shop($scope, shop, items) {
  const vm = this
  vm.items = items

  Object.assign(vm, shop)
}
