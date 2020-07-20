function thunk(store) { // when we call `createStore` we can pass `store` here
  debugger
  return function (next) { // the fn that receives it after this thunk middleware is done
    debugger
    return function (action) { // the action hits the middleware and then gets checked based on middleware code
      debugger
      if (typeof action === "function") { 
        debugger
        return action(store.dispatch, store.getState); // this is looking to be invoked with `dispatch` & `state` and fire off an async request
      }
      debugger
      return next(action); 
      // action is not a fn (will be POJO as long as action creators are correct), so go to next middleware or reducer
    };
  };
}

export default thunk;