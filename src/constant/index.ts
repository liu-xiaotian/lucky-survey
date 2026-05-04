/**
 * @description 常量
 * @author tian
 */

export const LIST_PAGE_SIZE = 10 // 默认的 pageSize

export const LIST_SEARCH_PARAM_KEY = 'keyword'

export const LIST_PAGE_PARAM_KEY = 'page'
export const LIST_PAGE_SIZE_PARAM_KEY = 'pageSize'

// TS 枚举
// enum TAB_KEYS {
//   PROP_KEY = 'prop',
//   SETTING_KEY = 'setting',
// }

export const TAB_KEYS = {
  PROP_KEY: 'prop',
  SETTING_KEY: 'setting',
} as const

export type TAB_KEYS = (typeof TAB_KEYS)[keyof typeof TAB_KEYS]
