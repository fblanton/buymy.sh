angular
  .module('app')
  .controller('Item', Item)

function Item($stateParams, shop, items, ngMeta) {
  const { itemId } = $stateParams
  const vm = this
  vm.shop = shop

  Object.assign(vm, items.find(item => item._id === itemId))

  ngMeta.setTitle(shop.title + ' | ' + vm.title)
  ngMeta.setTag('description', vm.description.substring(0,200) + '...')
}
