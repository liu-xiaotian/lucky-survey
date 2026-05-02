import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  getComponentConfByType,
  type ComponentPropsType,
} from '../../../components/QuestionComponents'

const NoProp = () => {
  return <div style={{ textAlign: 'center' }}>未选中组件</div>
}

const ComponentProp = () => {
  const { selectedComponent } = useGetComponentInfo()
  if (selectedComponent == null) return <NoProp />

  const { type, props } = selectedComponent
  const componentConf = getComponentConfByType(type)
  if (componentConf == null) return <NoProp />

  function changeProps(newProps: ComponentPropsType) {
    console.log('newProps', newProps)
  }

  const { PropComponent } = componentConf
  return <PropComponent {...props} onChange={changeProps} />
}

export default ComponentProp
