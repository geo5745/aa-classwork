import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

//const TodoList = ({ todos, receiveTodo }) => (

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        //debugger

    }

    componentDidMount() {
        debugger
        this.props.fetchTodos();
    }

    render() {
        let {todos, receiveTodo, createTodo} = this.props;
        return(
        <>
            <ul>
                { todos.map((todo, idx) => (<TodoListItem key={idx} todo={todo} />))}
            </ul>
            <TodoForm receiveTodo={receiveTodo} createTodo = {createTodo}/>
        </>
        )}
}

export default TodoList;