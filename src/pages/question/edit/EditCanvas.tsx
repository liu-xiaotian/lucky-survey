import { Spin } from 'antd'
import QuestionTitle from '../../../components/QuestionComponents/QuestionTitle/Component'
import QuestionInput from '../../../components/QuestionComponents/QusetionInput/Component'
import styles from './EditCanvas.module.scss'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'

type PropsType = {
  loading: boolean
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
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionTitle />
        </div>
      </div>
      <div className={styles['component-wrapper']}>
        <div className={styles.component}>
          <QuestionInput />
        </div>
      </div>
    </div>
  )
}

export default EditCanvas
