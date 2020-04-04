/**
 * @Author niansnana
 * @Begin 2020年4月2日17:52:13
 * @Update log: 编写请求接口地址
 */
const api = process.env.NODE_ENV === 'development' ? 'http://47.102.197.151:3000/' : 'http://127.0.0.1:3000/'
// const api = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : 'http://47.102.197.151:3000/'
/**
 * Tip
 * 解释下上面注释的原因：因为懒，接口我直接放到服务器上，统一一个地址，故本地并没有开启，因而注释，为了美观第一条后面为空了
 * 好了，继续写bug了。
 * 补充，还真与bug不期而遇，我的天。。。
 */

// 发现页
export const bannerCarousel = api + 'banner?type=1' // 轮播图
export const playList = api + 'top/playlist?limit=5' // 歌单
export const newSong = api + 'top/song?type=0&limit=3' // 最新歌曲，type=0，代表分类全部
export const newAlbum = api + 'top/album?limit=3' // 最新碟片
