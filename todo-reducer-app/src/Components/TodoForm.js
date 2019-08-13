import React, { useState } from 'react';

const TodoForm = ({ dispatch }) => {
  const [newTodo, setNewTodo] = useState({item: ''});

  const handleChanges = (event) => {
    setNewTodo({
      item: event.target.value,
      completed: false,
      id: Date.now()
    })
  }
  return (
    <form 
    className="todo-form"
    onSubmit={(event) => {
      event.preventDefault();
      dispatch({ type:"ADD_TODO", payload: newTodo });
      setNewTodo({item: ''})
    }}
    >
      <div className="btn-container">
        <button className="add-todo-btn" >Add Todo</button>

        <button 
        className="clear-completed-btn"
        onClick={(event) => {
          event.preventDefault()}
          } 
        >
        Clear Completed
        </button>
      </div>

      <input 
        placeholder="Oh what todo, oh what todo..." 
        onChange={(e) => handleChanges(e)} 
        value={newTodo.item} 
        name="item" 
        className="add-todo-input"
        required
      />

    </form>
  );
}

export default TodoForm;