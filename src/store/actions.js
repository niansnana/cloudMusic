/**
 * @Author niansnana
 * @Begin 2020年4月10日18:13:02
 * @Info actions 异步操作集
 */
import * as types from './mutation-types'

export const selectSong = function ({ commit }, { list, index }) {
  commit(types.SET_PLAYLIST, list) // 获取歌单数据
  commit(types.SET_CURRENT_INDEX, index)
  commit(types.SET_FULL_SCREEN, true) // 歌单详情展开
  commit(types.SET_PLAYING_STATE, true) // 歌曲开始播放
}
