import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ComponentPropsType } from '../../components/QuestionComponents'
export type ComponentInfoType = {
  fe_id: string // TODO 后面解释
  type: string
  title: string
  props: ComponentPropsType
}

export type ComponentStateType = {
  componentList: Array<ComponentInfoType>
}

const INIT_STATE: ComponentStateType = {
  componentList: [],
  //其他扩展
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload
    },
  },
})

export const { resetComponents } = componentsSlice.actions
export default componentsSlice.reducer
