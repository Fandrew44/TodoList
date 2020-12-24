import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //NOTE: If we need to use these States in CHILDREN COMPONENTS, we can just pass them down hierarchically through props
  //IMPORTANT NOTE: It is good practice to declare the States at the HIGHEST LEVEL COMPONENT possible
  // - As we can always pass States DOWN to children through props
  // - However we CANNOT pass States UPWARDS to parents
  // - (I THINK????)
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header>{ inputText }</header>
      <Form inputText={ inputText }
            setInputText={ setInputText }
            todos={ todos }
            setTodos= { setTodos }/>
      <TodoList todos={ todos }
                setTodos= { setTodos }/>
    </div>
  );
}

export default App;
