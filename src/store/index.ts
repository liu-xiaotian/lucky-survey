import { configureStore } from '@reduxjs/toolkit'
import undoable, { excludeAction, type StateWithHistory } from 'redux-undo'
import userReducer, { type UserStateType } from './userReducer'
import type { ComponentStateType } from './componentsReducer'
import componentsReducer from './componentsReducer'
import pageInfoReducer, { type PageInfoType } from './pageInfoReducer'

export type StateType = {
  user: UserStateType
  // components: ComponentStateType
  components: StateWithHistory<ComponentStateType> // 增加了 undo
  pageInfo: PageInfoType
}
export default configureStore({
  reducer: {
    user: userReducer,
    // 组件列表
    // // 没有 undo
    // components: componentsReducer,

    // 增加了 undo
    components: undoable(componentsReducer, {
      limit: 20, // 限制 undo 20 步
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]),
    }),

    //
    pageInfo: pageInfoReducer,
  },
})
