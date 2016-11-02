angular
  .module('app')
  .controller('Shop', Shop)

function Shop($scope, shop, items, ngMeta) {
  const vm = this
  vm.items = items

  Object.assign(vm, shop)
  ngMeta.setTitle(shop.title + ' | ' + shop.description)
  ngMeta.setTag('description', shop.description)
}
