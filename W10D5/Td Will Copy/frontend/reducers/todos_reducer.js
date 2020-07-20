import { merge } from 'lodash';
import { RECEIVE_TODOS, RECEIVE_TODO } from '../actions/todo_actions';

const initialState = {
    1: {
      id: 1,
      title: "wash car",
      body: "with soap",
      done: false
    },
    2: {
      id: 2,
      title: "wash dog",
      body: "with shampoo",
      done: true
    }
  };

const todosReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodos = {};
            action.todos.forEach((todo) => {
                const { id, title, body, done} = todo;
                newTodos[id] = { 
                    id,
                    title,
                    body,
                    done
                };
            });

            // const newState = merge({}, state, newTodos);

            return newTodos;

        case RECEIVE_TODO:
            const newTodo = {
                [action.todo.id]: action.todo
            };
            
            const anotherState = merge({}, state, newTodo);
            /*
            { todo }
            */
            return anotherState;
        default:
            return state;
    }
  };
  
  export default todosReducer;