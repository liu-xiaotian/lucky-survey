import { configureStore } from '@reduxjs/toolkit'
import userReducer, { type UserStateType } from './userReducer'
import type { ComponentStateType } from './componentsReducer'
import componentsReducer from './componentsReducer'
import pageInfoReducer, { type PageInfoType } from './pageInfoReducer'

export type StateType = {
  user: UserStateType
  components: ComponentStateType
  pageInfo: PageInfoType
}
export default configureStore({
  reducer: {
    user: userReducer,
    // 组件列表
    components: componentsReducer,
    //
    pageInfo: pageInfoReducer,
  },
})
