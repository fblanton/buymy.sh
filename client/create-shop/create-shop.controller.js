angular
  .module('app')
  .controller('CreateShop', CreateShop)

CreateShop.$inject = ['dataservice', '$scope']

function CreateShop(dataservice, $scope) {
  const vm = this

  vm.description = ''
  vm.title = ''
  vm.name = ''
  vm.message = {status: false, phrase: ''}
  vm.handleSubmit = handleSubmit
  vm.handleCancel = handleCancel
  $scope.$watch(() => vm.title, toName)

  function toName(title) {
    if (title){
      vm.name = title.toString().replace(/\s/g, '').toLowerCase()
    }
  }

  function handleSubmit() {
    dataservice
      .create('/ops', {
        shopName: vm.name,
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
