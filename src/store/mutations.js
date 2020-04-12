/**
 * @Author niansnana
 * @Begin 2020年4月10日18:13:02
 * @Info mutations
 * @Tip mutation-types：存在意义是为了Eslint常量检测，判断是否正确
 */
import * as types from './mutation-types'
const mutations = {
  [types.SET_SINGER] (state, singer) { // state（获取state里的值）， singer（提交的payload参数）
    state.singer = singer
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullScreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_CURRENT_INDEX] (state, index) {
    state.currentIndex = index
  }
}
export default mutations
