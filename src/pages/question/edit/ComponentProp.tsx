import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  getComponentConfByType,
  type ComponentPropsType,
} from '../../../components/QuestionComponents'
import { useDispatch } from 'react-redux'
import { changeComponentProps } from '../../../store/componentsReducer'

/**
 * 渲染“空状态”的子组件
 * 当用户没有选中任何组件，或者组件类型不合法时显示
 */
const NoProp = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

/**
 * 主组件：属性设置面板
 * 负责根据当前选中的组件，加载并显示对应的属性配置界面（如：修改标题、修改占位符等）
 */
const ComponentProp = () => {
  const dispatch = useDispatch()
  // 1. 从自定义 Hook 中获取当前选中的组件信息
  const { selectedComponent } = useGetComponentInfo()

  // 2. 如果没有选中任何组件，直接返回“未选中”提示
  if (selectedComponent == null) return <NoProp />

  // 3. 从选中的组件中提取出 type（组件类型，如 'Input'）和 props（当前已有的属性值）
  const { type, props } = selectedComponent

  // 4. 根据类型（type）去组件库配置表里查找对应的“元数据”
  // 例如：输入框组件会有对应的属性设置组件（PropComponent）
  const componentConf = getComponentConfByType(type)

  // 5. 如果查不到该类型的配置，说明组件类型不支持，返回提示
  if (componentConf == null) return <NoProp />

  /**
   * 当属性配置表单发生变化时（比如用户在输入框输入了新标题）
   * 会触发这个函数
   * @param newProps 最新的属性对象
   */
  function changeProps(newProps: ComponentPropsType) {
    // 这里目前只是打印，实际开发中通常会在这里调用 dispatch 发送到 Redux/Vuex
    // 来更新画布中对应组件的状态
    if (selectedComponent == null) return
    const { fe_id } = selectedComponent
    dispatch(changeComponentProps({ fe_id, newProps }))
  }

  // 6. 从配置中取出 PropComponent（这是一个 React 组件）
  // 例如：如果选中了 Input 组件，PropComponent 可能就是一个包含“标题”、“占位符”输入框的表单组件
  const { PropComponent } = componentConf

  // 7. 渲染属性编辑组件
  // {...props}：把当前的属性值传进去，让表单显示出当前的内容
  // onChange：把修改函数传进去，让表单修改后能通知到父组件
  return <PropComponent {...props} onChange={changeProps} />
}

export default ComponentProp
