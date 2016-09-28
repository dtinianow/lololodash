var _ = require('lodash');

var worker = function(data){

  var template = _.template('Hello <%= name %> (logins: <%= login.length %>)')(data)

  return template;
}

module.exports = worker;
