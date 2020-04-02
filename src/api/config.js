/**
 * @Author niansnana
 * @Begin 2020年4月2日17:52:13
 * @Update log: 编写请求接口地址
 */
const api = process.env.NODE_ENV === 'development' ? 'http://47.102.197.151:3000/' : ''

// 首页
export const bannerSwiper = api + 'banner?type=1'
