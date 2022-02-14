import reducer from "./reducer/reducer";
import { applyMiddleware, createStore,Middleware } from "redux";
import thunk from "redux-thunk";
const store = createStore(reducer,applyMiddleware(thunk));
export default store;