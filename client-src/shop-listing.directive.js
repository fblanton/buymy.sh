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
    <div class="card">
      <img class="card-img-top img-fluid" src="http://placehold.it/390x180">
      <div class="card-block">
        <h4 class="card-title">{{ shop.title }}</h4>
        <p class="card-text">
          {{ shop.description }}
        </p>
      </div>
    </div>
    `
  }
}
