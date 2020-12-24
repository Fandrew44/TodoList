import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos }) => {
    //Can write JavaScript code (Functions, variables, etc.)
    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();               //Prevents the DEFAULT BEHAVIOUR of the Submit Button
        setTodos([
            ...todos,  //...todos returns the current value of todos (so that when adding a new todo we DO NOT erase)
                       //all of the pre-existing todos 
            {text: inputText, completed: false, id: Math.random() * 1000 } //Then we can just append the NEW todo to the end of the Array
                                        
        ])
        setInputText("");                              
    }
 
    return(
        <form>
            <input value={ inputText } onChange={ inputTextHandler } type="text" className="todo-input" />
            <button onClick={ submitTodoHandler } className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;
