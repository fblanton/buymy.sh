angular
  .module('app')
  .controller('Shops', Shops)

Shops.$inject = ['dataservice']

function Shops(dataservice) {
  const vm = this

  vm.message = 'Hello Angular!'
  vm.list = []

  dataservice
    .read('/ops')
    .then(list => vm.list = list)
}
