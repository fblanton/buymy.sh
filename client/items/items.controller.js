angular
  .module('app')
  .controller('Items', Items)

function Items($stateParams, shop, items, ngMeta) {
  ngMeta.setTitle(shop.title + ' | ' + shop.description)
  ngMeta.setTag('description', shop.description)
}
