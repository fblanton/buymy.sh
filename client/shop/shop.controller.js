angular
  .module('app')
  .controller('Shop', Shop)

Shop.$inject = ['dataservice', '$scope', '$stateParams']

function Shop(dataservice, $scope, $stateParams) {
  const { items, shops } = dataservice
  const { shopName } = $stateParams
  const vm = this

  vm.title = ''
  vm.items = []

  shops
    .read(shopName)
    .then(shop => Object.assign(vm, shop))

  items
    .shopItems(shopName)
    .then(items => vm.items = items)
}
