import * as APIUtil from '../util/todo_api_util';


export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";

export const receiveTodos = (todos = []) => {
    return {
        type: RECEIVE_TODOS, 
        todos
    }
};

export const receiveTodo = (todo) => {
    return {
        type: RECEIVE_TODO, 
        todo
    }
};

export const fetchTodos = () => {
    debugger
    return (dispatch) => { // dispatch comes from middleware
      debugger
      return APIUtil.fetchTodos().then((todos)=> {
        debugger
        return dispatch(receiveTodos(todos));
      })
    }
  }
  
export const createTodo = (todo) => {
    return (dispatch) => {
      return APIUtil.createTodo(todo).then((todo)=> {
        return dispatch(receiveTodo(todo));
      })
    }
}

window.fetchTodos = fetchTodos;