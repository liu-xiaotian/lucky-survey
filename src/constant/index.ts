/**
 * @description 常量
 * @author tian
 */

export const LIST_PAGE_SIZE = 10 // 默认的 pageSize

export const LIST_SEARCH_PARAM_KEY = 'keyword'

export const LIST_PAGE_PARAM_KEY = 'page'
export const LIST_PAGE_SIZE_PARAM_KEY = 'pageSize'

export const STAT_PAGE_SIZE = 10 // 统计列表，默认的 pageSize

export const STAT_COLORS = ['#FF2D2D', '#BE77FF', '#2894FF', '#00EC00', '#EAC100', '#FF9D6F']

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
