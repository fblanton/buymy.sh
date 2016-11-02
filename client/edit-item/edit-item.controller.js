angular
  .module('app')
  .controller('EditItem', EditItem)

function EditItem($stateParams, shop, items, ngMeta) {
  const { itemId } = $stateParams
  const vm = this

  vm.shop = {
    _id: '',
    title: '',
    description: '',
    shopName: ''
  }

  if (shop) vm.shop = shop

  vm._id = ''
  vm.title = ''
  vm.description = ''
  vm.tags = []
  vm.materials = []
  vm.price = 1
  vm.shopName = ''

  if (items) Object.assign(vm, items.find(item => item._id === itemId))

  vm.price = Number(vm.price)

  ngMeta.setTitle(shop.title + ' | ' + vm.title)
  ngMeta.setTag('description', vm.description.substring(0,200) + '...')
}
