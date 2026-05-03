import { Checkbox, Form, Input, Select } from 'antd'
import type { QuestionRadioPropsType } from './interface'
import { useEffect } from 'react'

const PropComponent = (props: QuestionRadioPropsType) => {
  const { title, isVertical, value, options, onChange, disabled } = props
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({ title, isVertical, value, options })
  }, [title, isVertical, value, options])

  function handleValuesChange() {
    if (onChange == null) return
    // 触发
  }
  return (
    <Form
      layout="vertical"
      initialValues={{ title, isVertical, value, options }}
      onValuesChange={handleValuesChange}
      disabled={disabled}
      form={form}
    >
      <Form.Item label="标题" name="title" rules={[{ required: true, message: '请输入标题' }]}>
        <Input />
      </Form.Item>
      <Form.Item label="默认选中" name={value}>
        <Select
          value={value}
          options={options.map((text, value) => ({ value, lavel: text || '' }))}
        ></Select>
      </Form.Item>
      <Form.Item name="isVertical" valuePropName="checked">
        <Checkbox>居中显示</Checkbox>
      </Form.Item>
    </Form>
  )
}

export default PropComponent
