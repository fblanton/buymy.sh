angular
  .module('app')
  .controller('Item', Item)

Item.$inject = ['dataservice', '$scope', '$stateParams']

function Item(dataservice, $scope, $stateParams) {
  const { items, shops } = dataservice
  const { shopName, itemId } = $stateParams
  const vm = this

  vm.title = ''
  vm.description = ''
  vm.price= ''
  vm.tags = []
  vm.materials = []
  vm.shopName = ''
  vm.shop = {
    title: '',
    description: '',
  }
  vm._id = ''

  shops
    .read(shopName)
    .then(shop => Object.assign(vm, { shop: shop }))

  items
    .details(shopName, itemId)
    .then(items => Object.assign(vm, items[0]))
}
