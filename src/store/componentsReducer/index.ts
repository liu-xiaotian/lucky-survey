import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ComponentPropsType } from '../../components/QuestionComponents'
export type ComponentInfoType = {
  fe_id: string // TODO 后面解释
  type: string // 组件的类型，比如 "Input"、"Select"。
  title: string
  props: ComponentPropsType //组件的属性
}

export type ComponentStateType = {
  componentList: Array<ComponentInfoType> //存放所有组件的信息
}

//初始状态
const INIT_STATE: ComponentStateType = {
  componentList: [],
  //其他扩展
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件：把组件列表 重置为 action 传入的 payload
    // 注意：Redux Toolkit 使用 Immer，你可以直接修改 state，或者返回新的对象（这里返回了 action.payload）。
    resetComponents: (state: ComponentStateType, action: PayloadAction<ComponentStateType>) => {
      return action.payload
    },
  },
})

export const { resetComponents } = componentsSlice.actions
export default componentsSlice.reducer
