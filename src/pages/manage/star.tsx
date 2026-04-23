import { useState } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'
import styles from './common.module.scss'
import QuestionCard from '../../components/QuestionCard'

const { Title } = Typography
const rowQuestionsList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: true,
    answerCount: 5,
    createdAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: true,
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
const Star = () => {
  useTitle('天天问卷 - 星标问卷')
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [questionsList, setQuestionsList] = useState(rowQuestionsList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>（搜索）</div>
      </div>
      <div className={styles.content}>
        {questionsList.length === 0 && <Empty description="暂无数据" />}
        {questionsList.length > 0 &&
          questionsList.map(q => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className={styles.footer}>分页</div>
    </>
  )
}

export default Star
