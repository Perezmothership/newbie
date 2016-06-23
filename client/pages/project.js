
var $ = require('jquery');

 // legacy loading for bootstrap
window.jQuery = window.$ = $;
require('bootstrap');

var app = {
  init: function(){
    app.render();
  },
  render: function(){
  }
};

module.exports = app;
