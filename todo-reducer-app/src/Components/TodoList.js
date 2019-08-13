import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, dispatch }) => {
  

  console.log(todoList);

  if(todoList.length <= 6) {
    return (
      <div className="todo-list">
        {todoList.map((todo, index) => {
          return <Todo todo={todo} key={index} dispatch={dispatch}/>
        })}
      </div>
    );
  } else if (todoList.length > 6) {
    return (
      <div className="todo-lists-container">
        <div className="sub-todo-list-1">
          {todoList.slice(0, 6).map((todo,index) => 
            <Todo todo={todo} key={index} dispatch={dispatch}/>)}
        </div>
        <div className="sub-todo-list-2">
          {todoList.slice(6, todoList.length).map((todo,index) => 
           <Todo todo={todo} key={index} dispatch={dispatch}/>)}
        </div>
      </div>
    );
  }
}

export default TodoList;