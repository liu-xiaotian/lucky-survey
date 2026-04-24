import React from 'react'
import { Typography, Empty, Table, Tag } from 'antd'
import styles from './common.module.scss'

const { Title } = Typography
const rowQuestionsList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createdAt: '3月10日 13:24',
  },
]
const tableColumns = [
  {
    title: '问卷标题',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: '是否发布',
    dataIndex: 'isPublished',
    key: 'isPublished',
    rander: (isPublished: boolean) => {
      return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
    },
  },
  { title: '答卷', dataIndex: 'answerCount', key: 'answerCount' },
  { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
]

const Trash = () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [questionsList, setQuestionsList] = React.useState(rowQuestionsList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionsList.length === 0 && <Empty description="暂无数据" />}
        {questionsList.length > 0 && (
          <Table dataSource={questionsList} columns={tableColumns} pagination={false} />
        )}
      </div>
    </>
  )
}

export default Trash
