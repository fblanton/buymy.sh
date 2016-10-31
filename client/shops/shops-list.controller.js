angular
  .module('app')
  .controller('ShopsList', ShopsList)

ShopsList.$inject = ['dataservice']

function ShopsList(dataservice) {
  const vm = this
  const { shops } = dataservice
  vm.list = []

  shops
    .read()
    .then(list => vm.list = list)
}
