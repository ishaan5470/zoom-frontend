import { applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createStore } from "redux";
import reducers from "./Reducer";

  const store=createStore(reducers, {}, applyMiddleware(thunk));
  export default store;

