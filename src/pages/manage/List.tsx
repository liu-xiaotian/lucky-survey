import type { FC } from 'react'
import { useState } from 'react'
import QuestionCard from '../../components/QuestionCard'
import styles from './common.module.scss'
import { useTitle } from 'ahooks'
import { Empty, Typography } from 'antd'
import ListSearch from '../../components/ListSearch'

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
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 8,
    createdAt: '3月10日 13:25',
  },
  {
    _id: 'q5',
    title: '问卷5',
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createdAt: '3月10日 13:26',
  },
  {
    _id: 'q6',
    title: '问卷6',
    isPublished: true,
    isStar: true,
    answerCount: 7,
    createdAt: '3月10日 13:27',
  },
  {
    _id: 'q7',
    title: '问卷7',
    isPublished: false,
    isStar: false,
    answerCount: 1,
    createdAt: '3月10日 13:28',
  },
  {
    _id: 'q8',
    title: '问卷8',
    isPublished: true,
    isStar: false,
    answerCount: 4,
    createdAt: '3月10日 13:29',
  },
  {
    _id: 'q9',
    title: '问卷9',
    isPublished: false,
    isStar: true,
    answerCount: 6,
    createdAt: '3月10日 13:30',
  },
  {
    _id: 'q10',
    title: '问卷10',
    isPublished: true,
    isStar: false,
    answerCount: 9,
    createdAt: '3月10日 13:31',
  },
]

const List: FC = () => {
  useTitle('天天问卷 - 我的问卷')
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [questionsList, setQuestionsList] = useState(rowQuestionsList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {questionsList.length === 0 && <Empty description="暂无数据" />}
        {questionsList.length > 0 &&
          questionsList.map(question => <QuestionCard key={question._id} {...question} />)}
      </div>
      <div className={styles.footer}>LoadMore... 加载更多</div>
    </>
  )
}
export default List
