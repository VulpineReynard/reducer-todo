import React from 'react';
import Todo from './Todo';

const TodoList = ({ todoList }) => {
  

  console.log(todoList);

  return (
    <div className="todo-list">
      {todoList.map((todo, index) => {
        return <Todo todo={todo} key={index}/>
      })}
    </div>
  );
}

export default TodoList;