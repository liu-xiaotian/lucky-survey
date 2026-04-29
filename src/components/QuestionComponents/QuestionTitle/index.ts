/**
 * @description 问卷 标题
 */

import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

// 组件的配置
export default {
  title: '输入框',
  type: 'questionTitle', // 非常重要 和后端统一好
  Component,
  defaultProps: QuestionTitleDefaultProps,
}
