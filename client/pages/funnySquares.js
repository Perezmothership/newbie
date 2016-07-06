  
var $ = require('jquery');
import _ from 'underscore';
import rawTemplate from 'templates/funnySquare.html';
import Handlebars from 'Handlebars';

var template;
var app = {
  init: function(){
    template = Handlebars.compile(rawTemplate);
    app.render();
  },
    render: function(){
      // display 5 squares
      var numberOfSquares = 5;
      var renderedHtml = '';
      _.times(numberOfSquares, function(index){
        renderedHtml += template({ id: index + 1 });
      });
      $('body').after(renderedHtml);
    }
  };

module.exports = app;
