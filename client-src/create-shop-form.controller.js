angular
  .module('app')
  .controller('CreateShopForm', CreateShopForm)

CreateShopForm.$inject = ['dataservice']

function CreateShopForm(dataservice) {
  const vm = this

  vm.description = ''
  vm.title = ''
  vm.message = {status: false, phrase: ''}
  vm.handleSubmit = handleSubmit
  vm.handleCancel = handleCancel

  function handleSubmit() {
    dataservice
      .create('/ops', {
        shopName: vm.title,
        title: vm.title,
        description: vm.description
      })
      .then(r => vm.message = {
        status: 'success',
        phrase: `Shop ${r.title} created successfully.`
      })
      .catch(() => vm.message = {
        status: 'danger',
        phrase: `Unable to create shop.`
      })
  }

  function handleCancel() {
    window.history.back()
  }
}
