import { configureStore } from '@reduxjs/toolkit'
import userReducer, { type UserStateType } from './userReducer'
import type { ComponentStateType } from './componentsReducer'

export type StateType = { user: UserStateType; components: ComponentStateType }
export default configureStore({
  reducer: {
    user: userReducer,
  },
})
