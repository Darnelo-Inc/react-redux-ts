import { TodoState, TodoAction, TodoActionTypes } from "../../types/todo"

const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  page: 1,
  limit: 10,
}

export const todoReducer = (
  state = initialState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case TodoActionTypes.FETCH__TODOS:
      return { ...state, loading: true }
    case TodoActionTypes.FETCH__TODOS__SUCCESS:
      return { ...state, loading: false, todos: action.payload }
    case TodoActionTypes.FETCH__TODOS__ERROR:
      return { ...state, loading: false, error: action.payload }
    case TodoActionTypes.SET__TODO__PAGE:
      return { ...state, page: action.payload }
    default:
      return state
  }
}
