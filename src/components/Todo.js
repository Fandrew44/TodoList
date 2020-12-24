import React from 'react';

const Todo = ({ todo, todos, setTodos }) => {
    //NOTE: Everytime we are working with a LIST of something in React we MUST provide EACH of the elements in the List with a 
    //UNIQUE KEY. This is because when modifying the List (adding & removing), without a key React will NOT know how to render the
    //changes made to the List. :)
    
    //Events (Javascript Code):

    const deleteHandler = () => {
        setTodos(todos.filter(element => element.id !== todo.id));
    }

    return(
        <div className="todo">
            <li className="todo-item"> {todo.text} </li>
            <button className="complete-btn">
                <i className="fas fa-check"></i></button>      
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i></button>  
        </div>
    );   //Classnames are simply the Fonts from FontAwesome
}

export default Todo;    