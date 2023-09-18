export interface IUser {
  id: number
  name: string
  email: string
}

export interface UserState {
  users: IUser[]
  loading: boolean
  error: null | string
}

export enum UserActionTypes {
  FETCH__USERS = "FETCH__USERS",
  FETCH__USERS__SUCCESS = "FETCH__USERS__SUCCESS",
  FETCH__USERS__ERROR = "FETCH__USERS__ERROR",
}

interface FetchUserAction {
  type: UserActionTypes.FETCH__USERS
}

interface FetchUserSuccessAction {
  type: UserActionTypes.FETCH__USERS__SUCCESS
  payload: IUser[]
}

interface FetchUserErrorAction {
  type: UserActionTypes.FETCH__USERS__ERROR
  payload: string
}

export type UserAction =
  | FetchUserAction
  | FetchUserSuccessAction
  | FetchUserErrorAction
