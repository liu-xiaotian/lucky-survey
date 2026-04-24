import { useState } from 'react'
import type { ChangeEvent } from 'react'
import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '../constant'

const { Search } = Input

const ListSearch = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  // 获取 url 参数，并设置到 input value
  // const [searchParams] = useSearchParams()
  // useEffect(() => {
  //   const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
  //   setValue(curVal)
  // }, [searchParams])

  // 方案二：在渲染期间对比，如果 URL 变了，直接改 State
  const [searchParams] = useSearchParams()
  const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
  const [prevSearch, setPrevSearch] = useState(curVal)
  if (curVal !== prevSearch) {
    setPrevSearch(curVal)
    setValue(curVal)
  }

  function handleSearch(value: string) {
    // 跳转页面，增加 url 参数
    nav({
      pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`, // 去掉了 page pageSize
    })
  }

  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '260px' }}
    />
  )
}

export default ListSearch
