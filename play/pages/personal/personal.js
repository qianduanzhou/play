// pages/personal/personal.js
const app = getApp()
const api = require('../../common/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {},
    money:10,
    model:false
  },
  onShow: function (options) {
    this.setData({
      userInfo:app.data.userInfo
    })
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },
  register() {
    wx.navigateTo({
      url: '/pages/register/register'
    })
  },
  toSetting() {
    wx.navigateTo({
      url: '/pages/setting/setting'
    })
  },
  toPublished() {
    wx.navigateTo({
      url: '/pages/published/published'
    })
  },
  toOrderList() {
    wx.navigateTo({
      url: '/pages/orderList/orderList'
    })
  },
  tofootDetail() {
    wx.navigateTo({
      url: '/pages/footDetail/footDetail'
    })
  },
  tocustomList() {
    wx.navigateTo({
      url: '/pages/customList/customList'
    })
  },
  toConcern() {
    wx.navigateTo({
      url: '/pages/concern/concern'
    })
  },
  toFans() {
    wx.navigateTo({
      url: '/pages/fans/fans'
    })
  },
  showMoney() {
    this.setData({
      model:true
    })
  },
  addMoney() {
    wx.showModal({
      title: '充值',
      content: `确认充值${this.data.money}元`,
      success:(res) => {
        if(res.confirm) {
          let data = {
            userId: this.data.userInfo.id,
            money: this.data.money
          }
          api.request(api.addMoney, data,"post").then((res) => {
            if(res.code == 200) {
              app.checkLogin()
              wx.showToast({
                title: '充值成功',
                duration:1000,
                success:() => {
                  setTimeout(() => {
                    this.setData({
                      money: 10,
                      userInfo: app.data.userInfo,
                      model: false
                    })
                  },100)
                }
              })
            }
          })
        }
      }
    })
  },
  cancel() {
    this.setData({
      model:false
    })
  },
  inputMoney(e) {
    this.setData({
      money:e.detail.value
    })
  }
})