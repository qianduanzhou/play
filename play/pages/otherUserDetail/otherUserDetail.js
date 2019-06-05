const api = require('../../common/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishInfo:{}
  },

  onLoad: function (options) {
    this.init(options)
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
  toBuy(e) {
    console.log(e)
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/buy/buy?id='+id,
    })
  }
})