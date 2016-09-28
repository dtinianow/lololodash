var _ = require('lodash');

var worker = function(collection){

  var average,
      underperform,
      overperform;

  collection = _.sortBy(collection, 'income');

  var calculate_average = function(collection){
    count = _.size(collection);
    total = _.reduce(collection, function(sum, num){
      return sum + num.income;
    }, 0)
    return total / count;
  };

  average = calculate_average(collection)

  var underperform = _.filter(collection, function(item){
    return item.income <= average;
  });

  var overperform = _.filter(collection, function(item){
    return item.income > average;
  });

  return {
    average: average,
    underperform: underperform,
    overperform: overperform
  };
};

module.exports = worker;
