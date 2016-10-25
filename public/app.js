angular
  .module('app', [])

/* global angular */

angular
  .module('app')
  .factory('dataservice', dataservice)

dataservice.$inject = ['$http']

function dataservice($http) {
  return {
    create,
    read,
    update,
    remove
  }

  function create(url, item) {
    return $http
      .post(url, item)
      .then(r => r.data)
  }

  function read(url) {
    return $http
      .get(url)
      .then(r => r.data)
  }

  function update(url, update) {
    return $http
      .put(url, update)
      .then(r => r.data)
  }

  function remove(url) {
    return $http
      .delete(url)
      .then(r => r.data)
  }
}

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
