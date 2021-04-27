interface IToDos {
    id: number,
    title: string
}


export interface TodoState {
    todos: IToDos[];
    loading: boolean,
    error: null | string,
    limit: number,
    page: number
};

export enum TodoActionTypes {
    FETCH_TODO = 'FETCH_TODO',
    FETCH_TODO_SUCCESS = 'FETCH_TODO_SUCCESS',
    FETCH_TODO_ERROR = 'FETCH_TODO_ERROR',
    SET_TODO_PAGE = 'SET_TODO_PAGE'
};

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO
};

interface FetchTodoSuccessAction {
    type: TodoActionTypes.FETCH_TODO_SUCCESS,
    payload: any[]
};

interface FetchTodoErrorAction {
    type: TodoActionTypes.FETCH_TODO_ERROR,
    payload: string
};

interface SetTodoPage {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: number
}

export type TodoAction = FetchTodoAction | FetchTodoSuccessAction | FetchTodoErrorAction | SetTodoPage;