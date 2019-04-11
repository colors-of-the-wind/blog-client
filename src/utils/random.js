/**
 * 随机生成颜色
 */
export const randomColor = () =>
  '#' + ('000' + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)

/**
 * 生成指定范围随机整数
 * @param {Number} max
 * @param {Number} min
 * @param {String} 'both'(default)、'left'、'right'、'no'
 */
export const rangeRandom = (min, max, border) => {
  if (min === max) return 0

  const range = max - min

  let random = Math.random()

  switch (border) {
    case 'left':
      return min + Math.floor(random * range)
    case 'right':
      if (random === 0) random = 1

      return min + Math.ceil(random * range)
    case 'no':
      if (max - min < 1 || max - min === 1) return 'rdNum() 边界值不合理'
      if (random === 0) random = 1
      return min + Math.ceil(random * (range - 1))
    default:
      return min + Math.round(random * range)
  }
}
