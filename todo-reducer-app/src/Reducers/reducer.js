export const initialTodos = [
  {
    item: 'Learn about reducers',
    completed: false,
    id: 38929875894
  },
  {
    item: 'Laundry',
    completed: false,
    id: 38929875896
  },
  {
    item: 'Dishes',
    completed: false,
    id: 38929875891765
  },
  {
    item: 'Garbage',
    completed: false,
    id: 3892987589
  },
  {
    item: 'C++',
    completed: false,
    id: 3892987589567567
  },
  {
    item: 'Adopt Local Fox',
    completed: false,
    id: 3892987
  }
]

export const reducer = (state, action) => {
  switch (action.type) {

    // return the list of todos plus the newTodo state
    case "ADD_TODO":
      return [
        ...state,
        action.payload
      ];

    // changed completed property to the opposite of what it was
    case "SET_COMPLETED":
      action.payload.completed = !action.payload.completed;
      return [...state];

    // filter out todos with completed property === true
    case "CLEAR_COMPLETED":
      return state.filter(todo => todo.completed === false)

    default:
      return state;
  }
};