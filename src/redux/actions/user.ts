import { Dispatch } from "redux"
import { UserAction, UserActionTypes, IUser } from "../../types/user"
import axios from "axios"

export const fetchUsers = (limit = 5, page = 1): any => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH__USERS })
      const res = await axios.get<IUser[]>(
        "https://jsonplaceholder.typicode.com/users",
        {
          params: { _limit: limit, _page: page },
        }
      )
      dispatch({
        type: UserActionTypes.FETCH__USERS__SUCCESS,
        payload: res.data,
      })
    } catch (e) {
      dispatch({
        type: UserActionTypes.FETCH__USERS__ERROR,
        payload: String(e),
      })
    }
  }
}
