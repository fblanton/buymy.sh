angular
  .module('app')
  .factory('dataservice', dataservice)

dataservice.$inject = ['$http']

function dataservice($http) {
  return {
    shops: {
      create: shop => create('api/shops', shop),
      read: shop => read('api/shops', shop),
      update: shop => update('api/shops', shop),
      remove: shop => remove('api/shops/' + shop),
      checkTitle: title => checkTitle('api/shops/' + title)
    },
    items: {
      shopItems: shop => read(`api/shops/${shop}/items`)
    }
  }

  function create(url, item) {
    return $http
      .post(url, item)
      .then(r => r.data)

  }

  function read(url, identifier) {
    return $http
      .get(url + ((identifier) ? ('/' + identifier) : ''))
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
