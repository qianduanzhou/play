// pages/personal/personal.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo : {}
  },
  onShow: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo: res.data
        })
      },
      fail:() => {
        this.setData({
          userInfo: {}
        })
      }
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
  }
})