export interface ITodo {
  id: number
  title: string
  completed: boolean
}

export interface TodoState {
  todos: ITodo[]
  loading: boolean
  error: null | string
  page: number
  limit: number
}

export enum TodoActionTypes {
  FETCH__TODOS = "FETCH__TODOS",
  FETCH__TODOS__SUCCESS = "FETCH__TODOS__SUCCESS",
  FETCH__TODOS__ERROR = "FETCH__TODOS__ERROR",
  SET__TODO__PAGE = "SET__TODO__PAGE",
}

interface FetchTodoAction {
  type: TodoActionTypes.FETCH__TODOS
}

interface FetchTodoSuccessAction {
  type: TodoActionTypes.FETCH__TODOS__SUCCESS
  payload: ITodo[]
}

interface FetchTodoErrorAction {
  type: TodoActionTypes.FETCH__TODOS__ERROR
  payload: string
}

interface SetTodoPage {
  type: TodoActionTypes.SET__TODO__PAGE
  payload: number
}

export type TodoAction =
  | FetchTodoAction
  | FetchTodoSuccessAction
  | FetchTodoErrorAction
  | SetTodoPage
