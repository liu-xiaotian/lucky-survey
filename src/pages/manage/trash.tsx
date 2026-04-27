import { Typography, Empty, Table, Tag, Spin } from 'antd'
import styles from './common.module.scss'
import ListSearch from '../../components/ListSearch'
import UseLoadQuestionListData from '../../hooks/UseLoadQuestionListData'
import ListPage from '../../components/ListPage'

const { Title } = Typography

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
    render: (isPublished: boolean) => {
      return isPublished ? <Tag color="processing">已发布</Tag> : <Tag>未发布</Tag>
    },
  },
  { title: '答卷', dataIndex: 'answerCount', key: 'answerCount' },
  { title: '创建时间', dataIndex: 'createdAt', key: 'createdAt' },
]

const Trash = () => {
  const { data = {}, loading } = UseLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>
          <ListSearch />
        </div>
      </div>
      <div className={styles.content}>
        {loading && (
          <div style={{ textAlign: 'center' }}>
            <Spin />
          </div>
        )}
        {!loading && list.length === 0 && <Empty description="暂无数据" />}
        {list.length > 0 && <Table dataSource={list} columns={tableColumns} pagination={false} />}
      </div>
      <div className={styles.footer}>
        <ListPage total={total} />
      </div>
    </>
  )
}

export default Trash
