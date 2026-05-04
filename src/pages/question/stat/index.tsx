import { useNavigate } from 'react-router-dom'
import { Spin, Result, Button } from 'antd'
import { useTitle } from 'ahooks'
import useLoadQuestionData from '../../../hooks/useLoadQuestionData'
import useGetPageInfo from '../../../hooks/useGetPageInfo'

const Stat = () => {
  const nav = useNavigate()
  const { loading } = useLoadQuestionData()
  const { title, isPublished } = useGetPageInfo()

  // 修改标题
  useTitle(`问卷统计 - ${title}`)

  // loading 效果
  if (loading) {
    ;<div style={{ textAlign: 'center', marginTop: '60px' }}>
      <Spin />
    </div>
  }

  if (!isPublished) {
    return (
      <div style={{ flex: '1' }}>
        <Result
          status="warning"
          title="该页面尚未发布"
          extra={
            <Button type="primary" onClick={() => nav(-1)}>
              返回
            </Button>
          }
        ></Result>
      </div>
    )
  }

  return <div>stat</div>
}

export default Stat
