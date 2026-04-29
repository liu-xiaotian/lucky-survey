import QuestionTitle from '../../../components/QuestionComponents/QuestionInput/Component'
import QuestionInput from '../../../components/QuestionComponents/QusetionTitle/Component'
import styles from './EditCanvas.module.scss'
const EditCanvas = () => {
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
