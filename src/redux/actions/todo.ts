import axios from "axios"
import { TodoAction, TodoActionTypes, ITodo } from "../../types/todo"
import { Dispatch } from "react"

export function fetchTodos(limit = 10, page = 1) {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH__TODOS })
      const res = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos",
        { params: { _limit: limit, _page: page } }
      )
      dispatch({
        type: TodoActionTypes.FETCH__TODOS__SUCCESS,
        payload: res.data,
      })
    } catch (e) {
      dispatch({
        type: TodoActionTypes.FETCH__TODOS__ERROR,
        payload: String(e),
      })
    }
  }
}

export function setTodoPage(page: number) {
  return { type: TodoActionTypes.SET__TODO__PAGE, payload: page }
}
