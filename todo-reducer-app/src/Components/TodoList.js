import React, { useState, useReducer } from 'react';
import { reducer } from '../Reducers/reducer';
import { initialTodos } from '../Reducers/reducer';
import Todo from './Todo';

const TodoList = () => {
  const [todoList, dispatch] = useReducer(reducer, initialTodos);
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