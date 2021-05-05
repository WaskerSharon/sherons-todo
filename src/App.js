import React, { useState, useEffect } from 'react';
import './App.css';

//* import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {

  // State Stuff

  const [inputText, setInpuText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // Run Once when the app starts

  useEffect(() => {
    getLocalTodos();
  }, [] );

  // Use Effect

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status] );

  //Functions

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false ));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // Save to Local

  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoLocal);
    }
  };


  return (
    <div className="App">
      <header>
        <h1>Sheron's TODO List</h1>
      </header>
      <Form 
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInpuText}
        setStatus={setStatus}
      />
      <TodoList 
        filteredTodos={filteredTodos}  
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
