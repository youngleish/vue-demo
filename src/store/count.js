export default {
  namespaced: true,
  state: {
    count: 0
  },
  getters: {
    score(state) {
      return 'score:' + state.count
    }
  },
  mutations: {
    add(state, num = 1) {
      state.count += num
    },
    increment(state, payload) { // payload载荷传递方式
      state.count += payload.num
    }
  },
  actions: {
    // 复杂的业务逻辑或者异步请求
    asyncAdd({commit}, payload) {
      return new Promise (resolve => {
        setTimeout(() => {
          commit('increment', payload)
          resolve({'ok': 1})
        }, 2000)
      })
    }
  }
}