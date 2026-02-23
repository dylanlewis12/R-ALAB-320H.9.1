export default function todoReducer(todos, action) {
    if(action.type === 'added') {
      return [
        ...todos,
        {
          id: action.id,
          text: action.text,
          done: false,
        },
      ];
    } else if(action.type === 'changed') {
      return todos.map((t) => {
        if(t.id === action.todo.id) {
          return action.todo;
        } else {
          return t;
        }
      });
    } else if(action.type === 'deleted') {
      return todos.filter((t) => t.id !== action.id);
    } else {
      throw Error('Unknown action: ' + action.type);
    }
  }