import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { receiveTodos, receiveTodo } from './actions/todo_actions';
import { allTodos } from './reducers/selectors';
import Root from './components/root';

//import { fetchTodos, createTodo } from './util/todo_api_util';


console.log("hello");


const Test = () => (<h1>React setup complete.</h1>);

document.addEventListener("DOMContentLoaded", ()=>{
    const store = configureStore();
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.allTodos = allTodos;
    //window.fetchTodos = fetchTodos;

    let root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});