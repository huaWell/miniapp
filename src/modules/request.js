import http from './http'
import { getLocation } from './getLocation'
export default {
  async fetchBaseConfig() {
    return http.post('/base/config', { value: ['searchRange'] })
  },
  // 获取附近好物/
  async fetchNearGoods(distance, searchAfter = []) {
    let { latitude, longitude } = await getLocation();
    return http.post('/product/search', { distance: distance, lat: latitude, lng: longitude, sortModel: 'closest', size: 99, searchAfter: searchAfter, isFree: false })
  },
  // 免费送
  async fetchFreeGoods(distance, searchAfter = []) {
    let { latitude, longitude } = await getLocation();
    return http.post('/product/search', { distance: distance, lat: latitude, lng: longitude, sortModel: 'closest', size: 12, searchAfter: searchAfter, isFree: true })
  },
  // 获取默认经纬度
  async fetchDefaultLocation() {
    return http.post('/base/getDefaultLocation')
  },
  // 获取地理位置
  async fetchLocationName(data, update = false) {
    try {
      if (update) {
        this.fetchLocationName.address = ''
      }
      if (this.fetchLocationName.address) {
        return this.fetchLocationName.address
      }
      let res = await http.post('/base/getLocationName', data)
      this.fetchLocationName.address = res.data.data
      return res.data.data
    } catch (err) {
      
    }
  },
  // 发布页--编辑信息
  async fetchGetProductInfo(id) {
    return http.post('/product/info', { id: id })
  },
  // 发布页--宝贝成色
  async fetchBaby() {
    return http.post('/base/config', { value: ['condition'] })
  },
  // 发布页--宝贝类型
  async fetchBabyType() {
    return http.post('/category/listAll')
  },
  // 发布页--立即发布
  async fetchPublish(data) {
    return http.post('/product/publish', data)
  },
  // 登录
  async fetchLogin(data) {
    return http.post('/user/weChatLogin', data)
  },
  // 获取手机号
  async fetchGetPhone(code) {
    return http.post('/user/weChatGetPhone', { value: code })
  },
  // 编辑保存用户信息
  async fetchUserUpdate(data) {
    return http.post('/user/update', data)
  },
  // 上传图片
  async fetchUploadImage(data) {
    return http.post('/image/upload', data, 1);
  },
  // 获取用户信息
  async fetchGetUserInfo() {
    return http.post('/user/getUserInfo', {});
  },
  // 查询页面--联想
  async fetchSearchSuggestion(value) {
    return http.post('/search/suggestion', { size: 10, keyword: value }, 1)
  },
  // 商品列表 排序规则
  async fetchSortModel() {
    return http.post('/base/config', { value: ['sortModel'] });
  },
  // 商品列表
  async fetchProductList(data) {
    return http.post('/product/search', data)
  },
  // 商品分类
  async fetchProductCategory() {
    return http.post('/category/listAll')
  },
  // 商品详情
  async fetchProductDetail(id) {
    let { latitude, longitude } = await getLocation();
    return http.post('/product/detail', { id: id, lat: latitude, lng: longitude })
  },
  // 商品简介
  async fetchShopBrief(userId) {
    return http.post('/shop/brief', { userId: userId }, 1)
  },
  // 问答简介
  async fetchproductaskBrief(id) {
    return http.post('/productask/brief', { productId: id }, 1)
  },
  // 商品详情 -- 收藏喜欢
  async fetchProductLike(productId, status) {
    return http.post('/product/like', { productId: productId, status: status });
  },
  // 商品详情 -- 下架
  async fetchProductTakeDown(id) {
    return http.post('/product/takeDown', { value: id });
  },
  // 商品详情 -- 上架
  async fetchProductOnShelf(id) {
    return http.post('/product/onShelf', { value: id });
  },
  // 商品详情 -- 已卖出
  async fetchProductMarkSelled(id) {
    return http.post('/product/markSelled', { value: id })
  },
  // 问大家列表
  async fetchProductAskList(id) {
    return http.post('/productask/list', { productId: id }, 1)
  },
  // 问大家--提问
  async fetchProductAskPublish(id, content) {
    return http.post('/productask/publish', { productId: id, type: 1, content: content }, 1)
  },
  // 问大家 -- 回答问题
  async fetchProductAnswer(id, toId, content, ) {
    return http.post('/productask/publish', { productId: id, type: 2, content: content, toId: toId }, 1)
  },
  // 个人中心
  async fetchShopProduct(data) {
    return http.post('/shop/product', data, 1);
  },
  // 首页 -- banner
  async fetchBanner() {
    return http.post('/banner/list', {}, 1)
  },
  // 我的收藏--列表
  async fetchProductLikeList(page) {
    return http.post('/product/likeList', { pageSize: 20, pageNum: page });
  },
  // 我的发布--列表
  async fetchMyPublishList(page, status) {
    return http.post('/product/publishedList', { pageSize: 20, pageNum: page, status: status });
  },
  // 发布江湖救急
  async fetchMissionPublish(data) {
    return http.post('/mission/publish', data);
  },
  // 编辑发布江湖救急
  async fetchMissionUpdate(data) {
    return http.post('/mission/update', data)
  },
  // 编辑发布江湖救急
  async fetchMissionDetail(id) {
    return http.post('/mission/detail', { id: id, lat: 0, lng: 0 })
  },
  // 首页-江湖救急
  async fetchMissionSearch(data) {
    return http.post('/mission/search', data)
  },
  // 江湖救急 -- 详情页
  async fetchMissionDetail(id) {
    let { latitude, longitude } = await getLocation();
    return http.post('/mission/detail', { id: id, lat: latitude, lng: longitude })
  },
  // 江湖救急 -- 详情页 -关闭
  async fetchMissionClose(id) {
    return http.post('/mission/close', { value: id })
  },
  // 江湖救急 -- 联想
  async fetchMissionSuggestion(value) {
    return http.post('/mission/suggestion', { size: 10, keyword: value }, 1)
  },
  // 我的求购 -- 列表
  async fetchMissionList(page, isDelete) {
    return http.post('/mission/userList', { pageNum: page, pageSize: 20, isDelete: isDelete })
  },
  // 聊天tip
  async fetchMotionChat(){
    return http.post('/motion/wechat', {}, 1)
  },
  async fetchSystemMessages (query={}) {
    return http.post('/notifycation/list', query, 1)
  },

  // 获取圈子列表
  async fetchGroupList(data) {
    return http.post('/group/listByTab', data)
  },

  // 获取我的新鲜事
  async fetchMyFresh(data) {
    return http.post("/user/groupChatList", data)
  },

  // 获取上传图片签名
  async fetchImageSignature(data) {
    return http.get("/image/signature", data, 1)
  }

}
























