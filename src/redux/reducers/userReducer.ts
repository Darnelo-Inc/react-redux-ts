import { UserState, UserAction, UserActionTypes } from "../../types/user"

const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
}

export const userReducer = (
  state = initialState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH__USERS:
      return { ...state, loading: true }
    case UserActionTypes.FETCH__USERS__SUCCESS:
      return { ...state, loading: false, users: action.payload }
    case UserActionTypes.FETCH__USERS__ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
