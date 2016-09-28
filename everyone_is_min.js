var _ = require('lodash');

var worker = function(cities){

  var results = {hot: [], warm: []}

  var checkTemp = function(temp) {
    return temp > 19;
  };

  _.forEach(cities, function(temps, city){
    if(_.every(temps, checkTemp)) {
      results.hot.push(city)
    } else if (_.some(temps, checkTemp)) {
      results.warm.push(city)
    }
  })
  return results;
}

module.exports = worker;
