/**
 * @description 问卷 标题
 */

import Component from './Component'
import { QuestionTitleDefaultProps } from './interface'

export * from './interface'

export default {
  title: '输入框',
  type: 'questionInput', // 非常重要 和后端统一好
  Component,
  defaultProps: QuestionTitleDefaultProps,
}
