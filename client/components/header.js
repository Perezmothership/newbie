var $ = global.$ = global.jQuery = require('jquery');

import navbar from 'templates/navbar.html';

var app = {
    init: function(){
      if (!$.dropdown) {
        var test = require('bootstrap');
      }
      app.render();
    },
    render: function(){
      $('header').append(navbar); 
    }
  };

module.exports = app;
