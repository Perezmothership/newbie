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
  	todos:[]  
  },
  todoSchema: {
  	id: 0,
  	title: "",
  	completed: false
  },
  fetch: function(){
  	var data = lscache.get('todos');
  	data = this.applySchema(data);
  	this.set('todos', data);
    // gets the data
  },
  save: function(){
  	var data = this.get('todos');
  	data = this.applySchema(data);
  	lscache.set('todos', data);
    // saves the data
  }, 
  applySchema: function(todos){
  	var data = todos;
  	var schema = this.todoSchema;
  	data = (_.isArray(todos)) ? data: [];
  	data = data.map(function(todo, index){
  		todo.id = index;
  		return _.defaults(todo, this.todoSchema);
  	});


  	return data;
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
