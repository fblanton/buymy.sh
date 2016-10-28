angular
  .module('app')
  .controller('ShopsList', ShopsList)

ShopsList.$inject = ['dataservice']

function ShopsList(dataservice) {
  const vm = this
  vm.list = []

  dataservice
    .read('/ops')
    .then(list => vm.list = list)
}
