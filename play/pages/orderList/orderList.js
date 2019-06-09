const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({
  data: {
    orderList:[],
    checked: 'up',
  },
  onLoad: function (options) {
    this.list = []
    this.init()
  },
  init() {
    wx.showLoading({
      title: '加载中',
    })
    api.request(api.getOrder,{
      userId:app.data.userInfo.id
    }).then((res) => {
      this.list = res.data.slice(0)
      this.setData({
        orderList: res.data.sort(util.sortUp)
      })
      wx.hideLoading()
    })
  },
  changeMode() {
    this.setData({
      checked: this.data.checked == 'up' ? 'down' : 'up'
    })
    switch (this.data.checked) {
      case 'up':
        var list = this.list.slice(0)
        list.sort(util.sortUp)
        this.setData({
          orderList: list
        })
        break;
      case 'down':
        var list = this.list.slice(0)
        list.sort(util.sortDown)
        this.setData({
          orderList: list
        })
        break;
    }
  },

})