import React from 'react';
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';
import './SASS/App.scss';

function App() {
  return (
    <div className="App">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
