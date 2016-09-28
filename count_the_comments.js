var _ = require('lodash');

var worker = function(collection) {
  var results = [];

  comments_by_user = _.groupBy(collection, 'username')

  _.forEach(comments_by_user, function(comments, username){
    results.push({
      username: username,
      comment_count: _.size(comments)
    })
  })

  return _.sortBy(results, 'comment_count').reverse()
}

module.exports = worker;
