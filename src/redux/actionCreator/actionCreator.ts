import { TodoActionTypes } from './../../types/todo';
import axios from 'axios';
import { Dispatch } from 'redux';
import { TodoAction } from '../../types/todo';
import { UserAction, UserActionTypes } from '../../types/users';

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS});
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data});
        }
        catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'something went wrong'});
        }
    }
}

export const fetchTodo = (page = 1, limit = 10) => {
    return async (dispatch: Dispatch<TodoAction>) => {
        try {
            dispatch({type: TodoActionTypes.FETCH_TODO});
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`, {
                params: {_page: page, _limit: limit}
            });
            dispatch({type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: response.data});
        }
        catch (e) {
            dispatch({type: TodoActionTypes.FETCH_TODO_ERROR, payload: 'something went wrong'})
        }
    }
}

export function setTodoPage(page: number): TodoAction {
    return {type: TodoActionTypes.SET_TODO_PAGE, payload: page}
}