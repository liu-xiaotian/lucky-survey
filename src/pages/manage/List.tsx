import { useEffect, type FC } from 'react'
import styles from './common.module.scss'
import { useDebounceFn, useTitle } from 'ahooks'
import { Typography } from 'antd'
import ListSearch from '../../components/ListSearch'
import { useSearchParams } from 'react-router-dom'

const { Title } = Typography

const List: FC = () => {
  useTitle('幸运问卷 - 我的问卷')

  // const [page, setPage] = useState(1)
  // const [list, setList] = useState([])
  // const [total, setTotal] = useState(0)
  // const haveMoreData = total > list.length

  const [searchParams] = useSearchParams()
  // 触发加载
  const { run: tryLoadMore } = useDebounceFn(
    () => {
      console.log('tryloadmore')
    },
    {
      wait: 1000,
    }
  )

  useEffect(() => {
    tryLoadMore()
  }, [searchParams])
  useEffect(() => {
    // if (haveMoreData) {
    window.addEventListener('scroll', tryLoadMore)
    // }
    return () => {
      window.removeEventListener('scroll', tryLoadMore)
    }
  }, [searchParams])
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
      <div className={styles.content}></div>
      <div className={styles.footer}>LoadMore... 加载更多</div>
    </>
  )
}
export default List
