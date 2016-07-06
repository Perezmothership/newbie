
import todoModel from 'pages/todoReact/todoModel';

var dispatcher = {
  init: function(){},
  clickComplete: function(id){
    todoModel.itemCompleted(id);
  },
  addTodo: function(title){
    if (
      title !== ''
      && typeof title === 'string'
    ) {
      todoModel.addItem(title);
    }
  },
  removeTodo: function(id){
    todoModel.removeItem(id);
  },
  editTodoTitle: function(id, title, event){
    if (
      event.which === 13 
      && typeof title === 'string'
      && title.length > 0
      )
    {
      todoModel.editTitle(id, title);
    } else if (
      event.which === 27
    ) 
    {
      todoModel.doneEditing(id);
    }
  },
  startEditMode: function(id){
    todoModel.startEditing(id);
  }

};

module.exports = dispatcher;
