import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { produce } from 'immer'
import type { ComponentPropsType } from '../../components/QuestionComponents'
export type ComponentInfoType = {
  fe_id: string // TODO 后面解释
  type: string // 组件的类型，比如 "Input"、"Select"。
  title: string
  props: ComponentPropsType //组件的属性
}

export type ComponentStateType = {
  selectedId: string // 当前选中的组件 id
  componentList: Array<ComponentInfoType> //存放所有组件的信息
}

//初始状态
const INIT_STATE: ComponentStateType = {
  selectedId: '',
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

    // 修改 selectId
    changeSelectedId: produce((draft: ComponentStateType, action: PayloadAction<string>) => {
      // react redux 不允许直接修改 state，所以使用 immer 库来修改 state （不可变数据）
      draft.selectedId = action.payload
    }),

    // 添加新组件
    addComponent: produce((draft: ComponentStateType, action: PayloadAction<ComponentInfoType>) => {
      const newComponent = action.payload
      const { selectedId, componentList } = draft
      const index = componentList.findIndex(c => c.fe_id === selectedId)

      if (index < 0) {
        // 未选中任何组件
        draft.componentList.push(newComponent)
      } else {
        // 选中组件了， 插入到 index 后面
        draft.componentList.splice(index + 1, 0, newComponent)
      }
      draft.selectedId = newComponent.fe_id
    }),

    // 修改组件属性
    changeComponentProps: produce(
      (
        draft: ComponentStateType,
        action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>
      ) => {
        const { fe_id, newProps } = action.payload

        // 当前要修改属性的这个组件
        const curComp = draft.componentList.find(c => c.fe_id === fe_id)
        if (curComp) {
          curComp.props = {
            ...curComp.props,
            ...newProps,
          }
        }
      }
    ),
  },
})

export const { resetComponents, changeSelectedId, addComponent, changeComponentProps } =
  componentsSlice.actions
export default componentsSlice.reducer
