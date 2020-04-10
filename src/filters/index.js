const priceAbb = (value) => {
  if (value >= 100000) {
    return Math.floor(value / 1000) + '万'
  } else if (value >= 10000000) {
    return Math.floor(value / 100000000) + '亿'
  }
  return value
}
export {
  priceAbb
}
