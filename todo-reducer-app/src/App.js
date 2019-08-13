import React, { useState, useReducer } from 'react';
import { reducer } from './Reducers/reducer';
import { initialTodos } from './Reducers/reducer';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './SASS/App.scss';

function App() {
  const [todoList, dispatch] = useReducer(reducer, initialTodos);

  return (
    <div className="App">
      <TodoForm dispatch={dispatch}/>
      <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
