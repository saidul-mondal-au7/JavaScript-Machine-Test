import React, { useState, useRef, useEffect } from 'react';
import Todolist from './Todolist';
import { v4 } from 'uuid';
import "./App.css"

import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Button
} from "reactstrap";

const LOCAL_STORAGE_KEY = 'todoApp.todos';
function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  },[todos]);

  function handleAddTodo(e) {
      const name = todoNameRef.current.value;
      if (name === '') return;
      setTodos(prevTodo => {
        return [ ...prevTodo, {id:v4(), name:name, complete:false }]
      })
      todoNameRef.current.value = null
  }

  return (
    <div className="App">
       <Todolist todos={todos} />
       <input ref={todoNameRef} type='text' />
       <Button onClick={handleAddTodo} type="button" className="btn btn-success" >Add Todo</Button>
       <div><h4>{todos.filter(todo => !todo.complete).length} Left to do</h4></div>
    </div>
  );
}
export default App; 

