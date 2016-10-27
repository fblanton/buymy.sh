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
    remove,
    checkTitle
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

  function checkTitle(url) {
    return $http
      .post(url)
      .then(r => r.data)
  }
}
