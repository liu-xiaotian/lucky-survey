import type { FC } from 'react'
import { useState } from 'react'
import QuestionCard from '../components/QuestionCard'
import styles from './List.module.scss'

const rowQuestionsList = [
  {
    _id: 'q1',
    title: '问卷1',
    isPublished: false,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q2',
    title: '问卷2',
    isPublished: true,
    isStar: false,
    answerCount: 5,
    createAt: '3月10日 13:23',
  },
  {
    _id: 'q3',
    title: '问卷3',
    isPublished: false,
    isStar: true,
    answerCount: 2,
    createAt: '3月10日 13:24',
  },
  {
    _id: 'q4',
    title: '问卷4',
    isPublished: true,
    isStar: false,
    answerCount: 8,
    createAt: '3月10日 13:25',
  },
  {
    _id: 'q5',
    title: '问卷5',
    isPublished: false,
    isStar: false,
    answerCount: 3,
    createAt: '3月10日 13:26',
  },
  {
    _id: 'q6',
    title: '问卷6',
    isPublished: true,
    isStar: true,
    answerCount: 7,
    createAt: '3月10日 13:27',
  },
  {
    _id: 'q7',
    title: '问卷7',
    isPublished: false,
    isStar: false,
    answerCount: 1,
    createAt: '3月10日 13:28',
  },
  {
    _id: 'q8',
    title: '问卷8',
    isPublished: true,
    isStar: false,
    answerCount: 4,
    createAt: '3月10日 13:29',
  },
  {
    _id: 'q9',
    title: '问卷9',
    isPublished: false,
    isStar: true,
    answerCount: 6,
    createAt: '3月10日 13:30',
  },
  {
    _id: 'q10',
    title: '问卷10',
    isPublished: true,
    isStar: false,
    answerCount: 9,
    createAt: '3月10日 13:31',
  },
]

const List: FC = () => {
  /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
  const [questionsList, setQuestionsList] = useState(rowQuestionsList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>我的问卷</div>
        <div className={styles.right}>（搜索）</div>
      </div>
      <div className={styles.content}>
        {questionsList.map(question => (
          <QuestionCard key={question._id} {...question} />
        ))}
      </div>
      <div className={styles.footer}>footer</div>
    </>
  )
}
export default List
