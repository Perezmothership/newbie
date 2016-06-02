
import $ from 'jQuery';
import 'styles/main.scss';
import todos from 'pages/todo';
import project from 'pages/project';
import funnySquares from 'pages/funnySquares';
import header from 'components/header';

$(function(){
  header.init();

  var url = window.location.pathname;

  // our first javascript router
  switch (url) {
    case '/pages/todo.html':
      todos.init();
    break;
    case '/pages/project.html':
      // init the project javascript
    break;
    case '/pages/funnysquares.html':
      funnySquares.init();
    break;
  }

  // Fancy Console Message for Developers
  console.log('============');
  console.log('===hello====');
  console.log('============');
});
