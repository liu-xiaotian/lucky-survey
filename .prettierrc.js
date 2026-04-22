// prettier.config.js
export default{
  arrowParens: 'avoid',       // 箭头函数只有一个参数时可以省略括号
  bracketSpacing: true,       // 括号内部不要出现空格
  endOfLine: 'lf',            // 行结束符使用 Unix 格式
  jsxBracketSameLine: false,  // JSX > 符号不单独换行
  printWidth: 100,            // 每行最大长度
  proseWrap: 'preserve',      // 换行方式
  semi: false,                // 不使用分号
  singleQuote: true,          // 使用单引号
  tabWidth: 2,                // 缩进空格数
  useTabs: false,             // 使用空格缩进，不使用 tab
  trailingComma: 'es5',       // 尾随逗号，es5 支持对象、数组等最后一项
  parser: 'typescript',       // 使用 TypeScript 解析器
}
