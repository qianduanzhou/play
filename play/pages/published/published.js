const api = require('../../common/api.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publishedList:[]
  },

  onLoad: function (options) {
    this.init()
  },
  init() {
    let data = {
      userId : app.data.userInfo.id
    }
    api.request(api.published, data).then((res) => {
      if(res.code == 200) {
        this.setData({
          publishedList:res.data
        })
      }
    })
  }
})