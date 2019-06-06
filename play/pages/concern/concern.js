const app = getApp()
const api = require('../../common/api.js')
Page({
  data: {
    concernList:[]
  },

  onLoad: function (options) {
    this.init()
  },
  init() {
    api.request(api.concernList,{
      userId:app.data.userInfo.id,
      type:"关注"
    }).then((res) => {
      if(res.code == 200) {
        this.setData({
          concernList:res.data
        })
      }
    })
  }
})