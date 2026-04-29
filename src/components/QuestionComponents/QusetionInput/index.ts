/**
 * @description 问卷 输入框
 */

import Component from './Component'
import { QuestionInputDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput', // 非常重要 和后端统一好
  Component,
  defaultProps: QuestionInputDefaultProps,
}
