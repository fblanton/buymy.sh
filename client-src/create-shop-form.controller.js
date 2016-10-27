angular
  .module('app')
  .controller('CreateShopForm', CreateShopForm)

CreateShopForm.$inject = ['dataservice']

function CreateShopForm(dataservice) {
  const vm = this

  vm.title = ""
  vm.description = ""
  vm.handleSubmit = handleSubmit

  function handleSubmit() {
    dataservice
    .create('/ops', { title: vm.title, description: vm.description })
    .then()
  }
}
