import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.scss'
import { Link } from 'react-router-dom'
import useGetUserInfo from '../hooks/useGetUserInfo'
import { HOME_PATHNAME, MANAGE_INDEX_PATHNAME } from '../router/index'

const { Title } = Typography
const Logo = () => {
  const { username } = useGetUserInfo()
  // 直接根据逻辑计算出路径，而不是存在 state 里
  const pathname = username ? MANAGE_INDEX_PATHNAME : HOME_PATHNAME
  // const [pathname, setPathname] = useState(HOME_PATHNAME)
  // useEffect(() => {
  //   if (username) {
  //     setPathname(MANAGE_INDEX_PATHNAME)
  //   }
  // }, [username])
  return (
    <div className={styles.container}>
      <Link to={pathname}>
        <Space>
          <Title>
            <FormOutlined />
          </Title>
          <Title>幸运问卷</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
