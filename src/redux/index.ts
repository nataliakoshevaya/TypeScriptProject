import { usersReduser } from './reducer/usersReduser';
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { todoReducer } from './reducer/todoReducer';

let reducer = combineReducers({
    users: usersReduser,
    todo: todoReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

export type RootState = ReturnType<typeof reducer>