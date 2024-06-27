import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import getTimeObj from '@/utils/getTimeObj'
import http from '@/modules/http'
import { map, find } from 'lodash'
const IMAGE = 1;
const TEXT = 2;
const GOODS = 3;
const MAP = 4;
const PHONE = 5;
let renderMessage = (type, value) => {
  
  if (type == TEXT) {
    return value;
  } else if (type == IMAGE) {
    return '[图片]'
  } else if (type == MAP) {
    return '[地图]'
  } else if (type == GOODS) {
    return '[商品]'
  } else if (type == PHONE) {
    return value;
  }
}
export default new Vuex.Store({
  state: {
    chatList: [],
    currentChat: -1,
    currentMessage: {},
    socketTask: null,
    userIsLogin: 0,
    userIsAuthMessage:0,
    userIsFirstLogin: false,
    userIsFirstLoginGuide: false
  },
  mutations: {
    SET_CHAT_LIST(state, payload) {
      state.chatList = payload
    },
    UPDATE_CHAT_LIST(state, payload) {},
    SET_CURRENT_CHAT(state, payload) {
      state.currentChat = payload;
    },
    SET_CURRENT_MESSAGE(state, payload) {
      state.currentMessage = payload
    },
    SET_SOCKET_TASK(state, payload) {
      state.socketTask = payload
    },
    USER_IS_LOGIN (state, payload) {
      state.userIsLogin = payload
    },
    USER_IS_AUTH_MESSAGE(state, payload) {
      state.userIsAuthMessage = payload;
    },
    USER_IS_FIRST_LOGIN(state, payload) {
      state.userIsFirstLogin = payload;
    },
    USER_IS_FIRST_LOGIN_GUIDE(state, payload) {
      state.userIsFirstLoginGuide = payload;
    }
  },
  actions: {
    async fetchChatList({ state, commit }) {

      try {

      let res = await http.post('/chat/contactList', {
        pageNum: 1,
        pageSize: 100
      })
      res.data.data.dataList.forEach(m => {
        m.lastedMsg = renderMessage(m.lastedMsgType, m.lastedMsg)
      })
      
      commit('SET_CHAT_LIST', res.data.data.dataList)

      } catch (err) {
        
      }

    },
    /* 用来更新 chatList */
   async updateChatList({ state, commit, dispatch }, message) {
    try {

      dispatch('fetchChatList')
      
      /* 如果停留在当前聊天界面的话, 那么就要同时更新一下当前聊天 */
      if (state.currentChat == message.fromId) {
        
        commit('SET_CURRENT_MESSAGE', message)
      }


    } catch (err) {

      
    }
    },
    async readChat({ state, commit, dispatch}, value) {
      try {
        let res = await http.post('/chat/markUnread', {
          value: parseInt(value)
        })
        dispatch('fetchChatList')
      } catch (err) {
        
      }
    },
  }
});
