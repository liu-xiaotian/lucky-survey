import { useState } from 'react'
import { Input } from 'antd'

const { Search } = Input

const ListSearch: React.FC = () => {
  const [value, setValue] = useState('')
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  function handleSearch(value: string) {
    console.log('value', value)
  }

  return (
    <Search
      size="large"
      allowClear
      placeholder="输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      style={{ width: '200px' }}
    />
  )
}

export default ListSearch
