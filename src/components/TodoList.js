import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filteredTodos }) => {
    //NOTE: Including CURLY BRACKETS means that the code inside is JAVASCRIPT (NOT JSX)
    //NOTE: We DO NOT need CURLY BRACKETS to write JavaScript OUTSIDE OF THE RETURN STATEMENT because this area is for Javascript Code
    //by default. ALL CODE within the RETURN STATEMENT is JSX by default and so if we intend to write Javascript we need to wrap it
    //around CURLY BRACKETS :)
    console.log(todos);
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (                   //Renders a TODO COMPONENT for EACH Todo item
                    <Todo todo={ todo } todos={ todos } key={ todo.id } setTodos={ setTodos }/>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;