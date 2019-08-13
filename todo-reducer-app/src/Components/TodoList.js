import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList, dispatch }) => {
  

  console.log(todoList);

  return (
    <div className="todo-list">
      {todoList.map((todo, index) => {
        return <Todo todo={todo} key={index} dispatch={dispatch}/>
      })}
    </div>
  );
}

export default TodoList;