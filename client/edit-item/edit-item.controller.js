angular
  .module('app')
  .controller('EditItem', EditItem)

function EditItem($stateParams, shop, items, ngMeta, dataservice) {
  const { itemId } = $stateParams
  const vm = this

  vm.item = {
    _id: '',
    title: '',
    description: '',
    tags: [],
    materials: [],
    price: 1
  }
  vm.message = {
    status: false,
    phrase: ''
  }
  vm.shop = {
    _id: '',
    title: '',
    description: '',
    shopName: ''
  }
  vm.save = save
  vm.cancel = cancel

  init()

  function init() {
    if (shop) vm.shop = shop
    if (items) vm.item = items.find(item => item._id === itemId)

    vm.item.price = Number(vm.item.price)
    vm.item.title = decodeHTML(vm.item.title)
    vm.item.description = decodeHTML(vm.item.description)

    ngMeta.setTitle(`Edit | ${shop.title} | ${vm.item.title}`)
    ngMeta.setTag('description', vm.item.description.substring(0,200) + '...')
  }

  function save() {
    const { title, description, tags, materials, price } = vm.item
    dataservice.items
      .update(vm.item._id, { title, description, tags, materials, price })
      .then(updated => {
        vm.item = updated
        vm.message = {
          status: 'success',
          phrase: 'Item successfully updated.'
        }
      })
      .catch(() => vm.message = {
        status: 'danger',
        phrase: 'Unable to update item.'
      })
  }

  function cancel() {
    window.history.back()
  }

  function decodeHTML(html) {
    let text = document.createElement('textarea')
    text.innerHTML = html
    return text.value
  }
}
