import { LeftOutlined } from '@ant-design/icons'
import { Button, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './EditHeader.module.scss'
import EditToolbar from './EditToolbar'
const { Title } = Typography
const EditHeader = () => {
  const nav = useNavigate()
  return (
    <div className={styles['header-wrapper']}>
      <div className={styles.header}>
        <div className={styles.left}>
          <Space>
            <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
              返回
            </Button>
            <Title>问卷标题</Title>
          </Space>
        </div>
        <div className={styles.main}>
          <EditToolbar />
        </div>
        <div className={styles.right}>
          <Button>保存</Button>
          <Button type="primary">发布</Button>
        </div>
      </div>
    </div>
  )
}

export default EditHeader
