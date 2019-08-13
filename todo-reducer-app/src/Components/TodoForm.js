import React from 'react';

const TodoForm = () => {
  return (
    <form onSubmit={() => {}} className="todo-form">
        
        <div className="btn-container">
          <button 
            className="add-todo-btn">Add Todo
          </button>
          <button 
            onClick={() => {}} className="clear-completed-btn">Clear Completed
          </button>
        </div>

        <input 
          placeholder="Oh what todo, oh what todo..." 
          onChange={() => {}} 
          value={""} 
          name="todo" 
          className="add-todo-input"
          required
        />

      </form>
  );
}

export default TodoForm;