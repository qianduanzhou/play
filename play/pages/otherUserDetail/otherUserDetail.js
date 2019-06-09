const api = require('../../common/api.js')
const app = getApp()
const common = require('../../common/common.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishInfo:{},
    checkConcern:false,
    concernId:''
  },

  onLoad: function (options) {
    this.enterpriseId = options.userId
    this.init(options)
    this.checkConcern()
  },
  init(options) {
    wx.showLoading({
      title: '加载中',
    })
    let data = {
      game : options.game,
      userId : options.userId
    }
    api.request(api.publishInfo, data).then((res) => {
      if(res.code == 200) {
        this.setData({
          publishInfo: res.data
        })
        wx.hideLoading()
      }
    })
  },
  toBuy(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/buy/buy?id='+id,
    })
  },
  checkConcern() {
    common.checkConcern(app, api, this.enterpriseId, this)
  },
  concern() {
    common.concern(app, api, this.enterpriseId, this)
  },
  unConcern() {
    common.unConcern(app, api, this.enterpriseId, this)
  },
  toUser(e) {
    let userId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/userDetail/userDetail?userId=' + userId,
    })
  }
})