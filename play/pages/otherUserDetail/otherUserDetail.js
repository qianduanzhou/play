const api = require('../../common/api.js')
const app = getApp()

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
    let data = {
      game : options.game,
      userId : options.userId
    }
    api.request(api.publishInfo, data).then((res) => {
      if(res.code == 200) {
        this.setData({
          publishInfo: res.data
        })
      }
    })
  },
  checkConcern() {
    let data = {
      userId: app.data.userInfo.id,
      enterpriseId: this.enterpriseId
    }
    api.request(api.checkConcern,data).then((res) => {
      if(res.code == 200) {
        this.setData({
          checkConcern:true,
          concernId:res.data.id
        })
      }
    })
  },
  toBuy(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/buy/buy?id='+id,
    })
  },
  concern() {
    let data = {
      userId: app.data.userInfo.id,
      enterpriseId: this.enterpriseId
    }
    let message = {
      userId: app.data.userInfo.id,
      enterpriseId: this.enterpriseId,
      type: '关注',
      updateTime: new Date().getTime()
    }
    api.request(api.concern,data,"post").then((res) => {
      if(res.code == 200) {
        this.setData({
          checkConcern: true,
          concernId:res.data
        })
        api.request(api.setMessage, message, "post").then((res) => {})
        app.checkLogin()
        app.getStore()
        wx.showToast({
          title: '关注成功',
          duration: 1500
        })
      }
    })
  },
  unConcern() {
    let data = {
      userId: app.data.userInfo.id,
      enterpriseId: this.enterpriseId,
      concernId: this.data.concernId
    }
    let message = {
      userId: app.data.userInfo.id,
      enterpriseId: this.enterpriseId,
      type: '取消关注',
      updateTime: new Date().getTime()
    }
    api.request(api.unConcern,data).then((res) => {
      if(res.code == 200) {
        this.setData({
          checkConcern: false
        })
        api.request(api.setMessage, message, "post").then((res) => {})
        app.checkLogin()
        app.getStore()
        wx.showToast({
          title: '取消关注成功',
          duration: 1500
        })
      }
    })
  }
})