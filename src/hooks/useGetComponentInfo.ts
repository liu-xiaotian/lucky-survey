import { useSelector } from 'react-redux'
import type { StateType } from '../store'
import { type ComponentStateType } from '../store/componentsReducer'

function useGetComponentInfo() {
  const components = useSelector<StateType>(state => state.components) as ComponentStateType

  const { componentList = [] } = components
  return {
    componentList,
  }
}

export default useGetComponentInfo
