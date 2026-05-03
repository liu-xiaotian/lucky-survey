import type { FC } from 'react' //FC 是 React 的 函数组件类型（Function Component）
// 输入框和标题组件的 props 类型
import { type QuestionInputPropsType } from './QusetionInput'
import { type QuestionTitlePropsType } from './QuestionTitle'
import { type QuestionParagraphPropsType } from './QuestionParagraph'
// 引入组件的 元信息对象
import QuestionTitleConf from './QuestionTitle'
import QuestionInputConf from './QusetionInput'
import QuestionParagraphConf from './QuestionParagraph'

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType

// 统一，组件的配置 type
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType> //这个组件是一个 React 函数组件，接收统一的 ComponentPropsType 类型的 props
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

// 全部的组件配置的列表 把所有组件的元信息 放到一个数组里，统一管理
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
]

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf],
  },
  { groupId: 'inputGroup', groupName: '用户输入', components: [QuestionInputConf] },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type == type)
}
