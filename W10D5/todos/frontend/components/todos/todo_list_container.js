import { connect } from 'react-redux';
import {receiveTodo, receiveTodos, fetchTodos, createTodo} from '../../actions/todo_actions';
import TodoList from './todo_list'


const mapStateToProps = state => ({
    todos: allTodos(state)
  });
  
  const mapDispatchToProps = dispatch => ({
    receiveTodo: todo => dispatch(receiveTodo(todo)),
    fetchTodos: () => dispatch(fetchTodos()),
    createTodo: todo => dispatch(createTodo(todo))
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(TodoList);