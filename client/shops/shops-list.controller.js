angular
  .module('app')
  .controller('ShopsList', ShopsList)

function ShopsList(dataservice, ngMeta) {
  const vm = this
  const { shops } = dataservice
  vm.list = []

  shops
    .read()
    .then(list => vm.list = list)

  ngMeta.setTitle('BuyMy Shops')
}
