import { Tabs } from 'antd'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import ComponentProp from './ComponentProp'
import PageSetting from './PageSetting'
import useGetComponentInfo from '../../../hooks/useGetComponentInfo'
import { TAB_KEYS } from '../../../constant'

const RightPanel = () => {
  // const [activeKey, setActiveKey] = useState<TAB_KEYS>(TAB_KEYS.PROP_KEY)
  const { selectedId } = useGetComponentInfo()
  const activeKey = selectedId ? TAB_KEYS.PROP_KEY : TAB_KEYS.SETTING_KEY
  // useEffect(() => {
  //   if (selectedId) setActiveKey(TAB_KEYS.PROP_KEY)
  //   else setActiveKey(TAB_KEYS.SETTING_KEY)
  // }, [selectedId])

  const tabsItems = [
    {
      key: 'prop',
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: <ComponentProp />,
    },
    {
      key: 'setting',
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <PageSetting />,
    },
  ]

  return <Tabs activeKey={activeKey} items={tabsItems}></Tabs>
}

export default RightPanel
