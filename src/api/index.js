/**
 * @Author niansnana
 * @Begin 2020年4月2日17:52:13
 * @Update log: 编写接口回调
 */
import axios from 'axios'
import {
  bannerSwiper
} from './config'
// 请求超时时间
axios.defaults.timeout = 30000

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

export default {
  /**
 * 请求发现页面首页轮播图
 */
  bannerSwiperFn () {
    return axios.get(bannerSwiper)
  }
}
