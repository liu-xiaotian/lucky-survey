import type { FC } from 'react' //FC 是 React 的 函数组件类型（Function Component）
// 输入框和标题组件的 props 类型
import { type QuestionInputPropsType } from './QusetionInput'
import { type QuestionTitlePropsType } from './QuestionTitle'
import { type QuestionParagraphPropsType } from './QuestionParagraph'
import { type QuestionInfoPropsType } from './QuestionInfo'
import { type QuestionTextareaPropsType } from './QuestionTextarea'
import { type QuestionRadioPropsType, type QuestionRadioStatPropsType } from './QuestionRadio'
import { type QuestionCheckboxPropsType } from './QuestionCheckbox'
// 引入组件的 元信息对象
import QuestionTitleConf from './QuestionTitle'
import QuestionInputConf from './QusetionInput'
import QuestionParagraphConf from './QuestionParagraph'
import QuestionInfoConf from './QuestionInfo'
import QuestionTextareaConf from './QuestionTextarea'
import QuestionRadioConf from './QuestionRadio'
import QuestionCheckbxConf from './QuestionCheckbox'
import { type QuestionCheckboxStatPropsType } from './QuestionCheckbox'

// 各个组件的 prop type
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionParagraphPropsType &
  QuestionInfoPropsType &
  QuestionTextareaPropsType &
  QuestionRadioPropsType &
  QuestionCheckboxPropsType

// 统一，各个组件的统计属性类型
type ComponentStatPropsType = QuestionRadioStatPropsType & QuestionCheckboxStatPropsType

// 统一，组件的配置 type
export type ComponentConfType = {
  title: string
  type: string
  Component: FC<ComponentPropsType> //这个组件是一个 React 函数组件，接收统一的 ComponentPropsType 类型的 props
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  StatComponent?: FC<ComponentStatPropsType>
}

// 全部的组件配置的列表 把所有组件的元信息 放到一个数组里，统一管理
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionParagraphConf,
  QuestionInfoConf,
  QuestionTextareaConf,
  QuestionRadioConf,
  QuestionCheckbxConf,
]

// 组件分组
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf, QuestionParagraphConf, QuestionInfoConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionTextareaConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    components: [QuestionRadioConf, QuestionCheckbxConf],
  },
]

export function getComponentConfByType(type: string) {
  return componentConfList.find(c => c.type == type)
}
