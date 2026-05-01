import { useSelector } from 'react-redux'
import type { StateType } from '../store'
import { type ComponentStateType } from '../store/componentsReducer'

// useSelector<StateType>(state => state.components)
// 取整个 Redux store 的 components slice。
// as ComponentStateType 强制类型转换，方便 TypeScript 检查。

function useGetComponentInfo() {
  const components = useSelector<StateType>(state => state.components) as ComponentStateType

  const { componentList = [] } = components // 解构出组件列表，如果 components 为空，也默认 componentList 是空数组。
  return {
    componentList, // 返回一个对象 { componentList }，方便调用：
  }
}

export default useGetComponentInfo
