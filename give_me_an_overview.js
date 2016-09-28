var _ = require('lodash');

var worker = function(collection) {
  articles = _.groupBy(collection, 'article');

  var total_quantity = function(orders){
    total = _.reduce(orders, function(sum, num){
      return sum + num.quantity;
    }, 0);
    return total;
  }

  var orders = _.map(articles, function(value, key){
    return {
      article: parseInt(key),
      total_orders: total_quantity(value)
    }
  })

  return _.sortBy(orders, 'total_orders').reverse();
}

module.exports = worker;
