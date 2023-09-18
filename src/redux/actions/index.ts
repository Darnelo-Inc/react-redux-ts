import * as userActions from "./user"
import * as todoActions from "./todo"

export const actions = { ...userActions, ...todoActions }
