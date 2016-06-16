
import $ from 'jquery';
import 'styles/main.scss';
import TodoControllerView from 'pages/todo/todoController';
import project from 'pages/project';
import photoSearch from 'pages/photoSearch';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';

$(function(){

  header.init();

  // what page are we on?
  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
    var todoControllerView = new TodoControllerView();
    break;
    case '/pages/photoSearch.html':
    photoSearch.init();
    break;
    case '/':
      // init the project javascript
      // home.init();
    break;
    case '/pages/funnySquares.html':
      funnySquares.init();
    break;
    default: break;
  }

  // Fancy Console Message for Developers
  console.log('============');
  console.log('===hello====');
  console.log('============');
});
