import { useSelector } from "react-redux"
import { rootState } from "../redux"
import { TypedUseSelectorHook } from "react-redux"

export const useTypedSelector: TypedUseSelectorHook<rootState> = useSelector
