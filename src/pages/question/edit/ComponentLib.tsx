import { Typography } from 'antd'
import { componentConfGroup, type ComponentConfType } from '../../../components/QuestionComponents'
import styles from './ComponentLib.module.scss'

const { Title } = Typography
const Lib = () => {
  function getComponent(c: ComponentConfType) {
    const { Component } = c
    return (
      <div className={styles.wrapper}>
        <div className={styles.component}>
          <Component />
        </div>
      </div>
    )
  }
  return (
    <>
      {componentConfGroup.map((group, index) => {
        const { groupId, groupName, components } = group
        return (
          <div key={groupId}>
            <Title level={3} style={{ fontSize: '16px', marginTop: index > 0 ? '20px' : '0' }}>
              {groupName}
            </Title>
            <div>{components.map(c => getComponent(c))}</div>
          </div>
        )
      })}
    </>
  )
}

export default Lib
