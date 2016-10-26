angular
  .module('app')
  .directive('shopListing', shopListing)

function shopListing() {
  return {
    restrict: 'E',
    scope: { shop: '=' },
    template: template()
  }

  function template() {
    return `
    <div>
      <h1>{{ shop.title }}</h1>
      <h3>{{ shop.shopName }}</h3>
      <p>{{ shop.shopId }}</p>
    </div>
    `
  }
}
