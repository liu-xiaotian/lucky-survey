import { useDispatch } from 'react-redux'
import useLoadingQuestionData from '../../../hooks/useLoadQuestionData'
import EditCanvas from './EditCanvas'
import styles from './index.module.scss'
import { changeSelectedId } from '../../../store/componentsReducer'

const Edit = () => {
  const { loading } = useLoadingQuestionData()
  const dispatch = useDispatch()

  function clearSelectedId() {
    dispatch(changeSelectedId(''))
  }
  return (
    <div className={styles.container}>
      <div style={{ backgroundColor: '#fff', height: '40px' }}>Header</div>
      <div className={styles['container-wrapper']}>
        <div className={styles.content}>
          <div className={styles.left}>left</div>
          <div className={styles.main} onClick={() => clearSelectedId()}>
            <div className={styles['canvas-wrapper']}>
              <EditCanvas loading={loading} />
            </div>
          </div>
          <div className={styles.right}>right</div>
        </div>
      </div>
    </div>
  )
}

export default Edit
