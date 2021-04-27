import { TodoAction, TodoState, TodoActionTypes } from './../../types/todo';

const initialState: TodoState = {
    todos: [],
    loading: false,
    error: null,
    limit: 10,
    page: 1    
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
    switch(action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {
                ...state,
                loading: true
            }
        case TodoActionTypes.FETCH_TODO_SUCCESS: 
            return {
                ...state,
                todos: action.payload,
                loading: false
            }
        case TodoActionTypes.FETCH_TODO_ERROR: 
            return {
                ...state,
                loading: false,
                error: action.payload,
            }   
        case TodoActionTypes.SET_TODO_PAGE: 
            return {
                ...state,
                page: action.payload
            }
        default: 
         return state
    }
}