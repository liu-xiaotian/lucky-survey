import { EditOutlined, LeftOutlined } from '@ant-design/icons'
import { Button, Input, Space, Typography } from 'antd'
import { useNavigate } from 'react-router-dom'
import styles from './EditHeader.module.scss'
import EditToolbar from './EditToolbar'
import useGetPageInfo from '../../../hooks/useGetPageInfo'
import { useDispatch } from 'react-redux'
import { useState, type ChangeEvent } from 'react'
import { changePageTitle } from '../../../store/pageInfoReducer'
const { Title } = Typography

// 显示和修改标题
const TitleElem = () => {
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()

  const [editState, SetEditState] = useState(false)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
    dispatch(changePageTitle(newTitle))
  }

  if (editState) {
    return (
      <Input
        value={title}
        onChange={handleChange}
        onPressEnter={() => SetEditState(false)}
        onBlur={() => SetEditState(false)}
      />
    )
  }

  return (
    <Space>
      <Title>{title}</Title>
      <Button icon={<EditOutlined />} type="text" onClick={() => SetEditState(true)} />
    </Space>
  )
}

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
            <TitleElem />
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
