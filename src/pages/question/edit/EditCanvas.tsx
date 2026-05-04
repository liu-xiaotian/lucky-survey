import { Spin } from 'antd'
import classNames from 'classnames'
// import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
// import QuestionInput from '../../../components/QuestionComponents/QusetionInput/Component'
import styles from './EditCanvas.module.scss'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import {
  changeSelectedId,
  moveComponent,
  type ComponentInfoType,
} from '../../../store/componentsReducer'
import { getComponentConfByType } from '../../../components/QuestionComponents'
import { useDispatch } from 'react-redux'
import useBindCanvasKeyPress from '../../../hooks/useBindCanvasKeyPress'
import SortableContainer from '../../../components/DragSortable/SortableContainer'
import SortableItem from '../../../components/DragSortable/SortableItem'

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
  const { componentList, selectedId } = useGetComponentInfo()
  const dispatch = useDispatch()
  const handleClick = (event: React.MouseEvent<HTMLDivElement>, id: string) => {
    event.stopPropagation() // 阻止事件冒泡,点击画布的时候，不会触发父元素的点击事件，main 就不会自动清空
    dispatch(changeSelectedId(id))
  }

  useBindCanvasKeyPress()

  if (loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '60px ' }}>
        <Spin />
      </div>
    )
  }

  // SortableContainer 组件的 items 属性，需要每个 item 都有 id
  const componentListWithId = componentList.map(c => {
    return { ...c, id: c.fe_id }
  })

  // 拖拽排序结束
  function handleDragEnd(oldIndex: number, newIndex: number) {
    dispatch(moveComponent({ oldIndex, newIndex }))
  }
  return (
    <SortableContainer items={componentListWithId} onDragEnd={handleDragEnd}>
      <div className={styles.canvas}>
        {componentList
          .filter(c => !c.isHidden)
          .map(c => {
            const { fe_id } = c

            // 拼接 class name
            const wrapperDefaultClassName = styles['component-wrapper']
            const selectedClassName = styles.selected
            const wrapperClassName = classNames({
              [wrapperDefaultClassName]: true,
              [selectedClassName]: fe_id === selectedId,
            })
            return (
              <SortableItem key={fe_id} id={fe_id}>
                <div className={wrapperClassName} onClick={e => handleClick(e, fe_id)}>
                  <div className={styles.component}>{genComponent(c)}</div>
                </div>
              </SortableItem>
            )
          })}
      </div>
    </SortableContainer>
  )
}

export default EditCanvas
