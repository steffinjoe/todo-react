import React, {useState, useRef, useEffect} from "react";
import TodoList from "./TodoList";
import {v4 as uuid} from "uuid";

function App() {
  const [todos, setTodos] = useState([])
  const LOCAL_STORAGE_TODOS_KEY = "TodosApp.todos"
  const todoNameRef = useRef()

  useEffect(()=>{
    const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_TODOS_KEY));
    console.log(savedTodos);
    if(savedTodos) setTodos(savedTodos)
  }, []);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_TODOS_KEY, JSON.stringify(todos))
  }, [todos]);

  function addTodoElement(e) {
    const todoName = todoNameRef.current.value;
    if(todoName === '') return
    setTodos(prevTodos => {
      return [...prevTodos, {id: uuid(), name: todoName, isComplete: false}]
    })
    todoNameRef.current.value = null

  }

  return (
    <>
      <TodoList todos={todos}/>
      <input ref={todoNameRef} type="text"/>
      <button onClick={addTodoElement}>Add Task</button>
      <button>Clear</button>
      <div>0 left to do</div>
    </>
    
  );
}

export default App;
