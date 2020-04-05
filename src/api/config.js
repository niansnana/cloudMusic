/**
 * @Author niansnana
 * @Begin 2020年4月2日17:52:13
 * @Update log: 编写请求接口地址
 */
// const api = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:3000/' : 'http://47.102.197.151:3000/'
const api = process.env.NODE_ENV === 'development' ? 'http://47.102.197.151:3000/' : 'http://47.102.197.151:3000/'
/**
 * Tip
 * 解释下上面注释的原因：因为懒，接口我直接放到服务器上，统一一个地址，故本地并没有开启，因而注释。
 * 好了，继续写bug了。
 */

// 发现页
export const bannerCarousel = api + 'banner?type=1' // 轮播图
export const playList = api + 'top/playlist' // 歌单广场
export const newSong = api + 'top/song' // 最新歌曲，type=0，代表分类全部
export const newAlbum = api + 'top/album' // 最新碟片
export const playCatList = api + 'top/playlist' // 获取歌单分类
export const playhigHqualityList = api + 'top/playlist/highquality' // 获取精品歌单
export const playlistDetail = api + 'playlist/detail' // 跳转歌单详情页
