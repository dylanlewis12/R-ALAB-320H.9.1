import { useState } from 'react'
import TodoList from './components/TodoList.jsx';
import AddTodo from './components/AddTodo.jsx';
import data from './data/Data.jsx';
import todosReducer from './components/todoReducer.jsx';
import { useReducer } from 'react';
import './App.css'

function App() {
  const [todos, dispatch] = useReducer(todosReducer, data);

  function handleAddTodo(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    })
  }

  function handleChangeTodo(todo) {
    dispatch({
      type: 'changed',
      todo: todo,
    });
  }

  function handleDeleteToDo(todoId) {
    dispatch({
      type: 'deleted',
      id: todoId,
    });
  }

  return (
    <>
      <h1>Create Todo List</h1>
      <AddTodo onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteToDo}
      />
    </>
  )
}

let nextId = data.length;

export default App;
