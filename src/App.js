import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //NOTE: If we need to use these States in CHILDREN COMPONENTS, we can just pass them down hierarchically through props
  //IMPORTANT NOTE: It is good practice to declare the States at the HIGHEST LEVEL COMPONENT possible
  // - As we can always pass States DOWN to children through props
  // - However we CANNOT pass States UPWARDS to parents
  // - (I THINK????)

  //States
  const [inputText, setInputText] = useState("");         //The Argument passed into the useState method can be thought of as the 
  const [todos, setTodos] = useState([]);                 //DEFAULT VALUE
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

    //Run ONCE when the App first loads
    // - As there are NO specified States to watch for changes
    useEffect(() => {
      getLocalTodos();
    }, []);
    //USE EFFECT
    useEffect(() => {             //1st Argument is the Callback function
      filterHandler();         //2nd Argument is an Array of the STATES that the useEffect Method is essentially watching for changes
      saveLocalTodos();
    }, [todos, status]);                  // -Everytime ANY of the States specified in the Array changes, the Callback function is invoked

  //Functions

  const filterHandler = () => {
    switch(status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default: 
        setFilteredTodos(todos);
        break;
    }
  }

  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') == null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      let todoFromLocal = JSON.parse(localStorage.getItem('todos'));
      setTodos(todoFromLocal);
    }
  }

  return (
    <div className="App">
      <header>{ inputText }</header>
      <Form inputText={ inputText }
            setInputText={ setInputText }
            todos={ todos }
            setTodos={ setTodos }
            setStatus={ setStatus }/>
      <TodoList todos={ todos }
                setTodos={ setTodos }
                filteredTodos={ filteredTodos }/>
    </div>
  );
}

export default App;
