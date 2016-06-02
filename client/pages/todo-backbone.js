var $ = require('jquery');

 // legacy loading for bootstrap
 window.jQuery = window.$ = $;
 require('bootstrap');

import _ from 'underscore';
import Backbone from 'backbone';
import Handlebars from 'handlebars';
import lscache from 'lscache';
import rawTemplate from 'templates/todoItem.html';

// backbone Todo App

var TodoModel;
var TodoControllerView;
var TodoView;

var todoModel;
var todoControllerView;

// model

TodoModel = Backbone.Model.extend({
  defaults: {
  },
  fetch: function(){
    // gets the data
  },
  save: function(){
    // saves the data
  }
});

todoModel = new TodoModel();

// view

TodoControllerView = Backbone.View.extend({
  el: '.body',
  model: todoModel,
  events: {
  },
  initialize: function(){},
  render: function(){
  	alert('backbone!');
  }
});

todoControllerView = new TodoControllerView();  // when we do this it calls ViewClass.initialize

module.exports = todoControllerView;
