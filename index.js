var utils = require('loader-utils');
var cssWrap = require('css-wrap')

module.exports = function (source) {
  this.cacheable();

  var query = utils.parseQuery(this.query);
  return cssWrap(source, query);
};