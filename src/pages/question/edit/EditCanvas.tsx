import { Spin } from 'antd'
// import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
// import QuestionInput from '../../../components/QuestionComponents/QusetionInput/Component'
import styles from './EditCanvas.module.scss'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import type { ComponentInfoType } from '../../../store/componentsReducer'
import { getComponentConfByType } from '../../../components/QuestionComponents'

type PropsType = {
  loading: boolean
}

/**
 * 根据组件信息生成React组件
 * @param componentInfo - 组件信息对象，包含组件类型和属性
 * @returns 返回生成的React组件，如果找不到对应配置则返回null
 */
function genComponent(componentInfo: ComponentInfoType) {
  // 从组件信息中解构出组件类型和属性
  const { type, props } = componentInfo

  // 根据组件类型获取组件配置
  const componentConf = getComponentConfByType(type)
  // 如果没有找到组件配置，则返回null
  if (componentConf == null) return null
  // 从组件配置中解构出组件
  const { Component } = componentConf
  // 返回渲染后的组件，并将属性传递给组件
  return <Component {...props} />
}
const EditCanvas = ({ loading }: PropsType) => {
  const { componentList } = useGetComponentInfo()
  console.log('componentList', componentList)

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px ' }}>
        <Spin />
      </div>
    )
  }
  return (
    <div className={styles.canvas}>
      {componentList.map(c => {
        const { fe_id } = c
        return (
          <div key={fe_id} className={styles['component-wrapper']}>
            <div className={styles.component}>{genComponent(c)}</div>
          </div>
        )
      })}
    </div>
  )
}

export default EditCanvas
