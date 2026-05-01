/**
 * @description 问卷 输入框
 */

import Component from './Component'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

//导出的是一个 组件元信息对象，不是组件本身
export default {
  title: '输入框',
  type: 'questionInput', // 非常重要 和后端统一好
  Component,
  defaultProps: QuestionInputDefaultProps,
}
