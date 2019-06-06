const app = getApp()
const api = require('../../common/api.js')
Page({
  data: {
    fansList:[]
  },
  onLoad: function (options) {
    this.init()
  },
  init() {
    api.request(api.concernList, {
      userId: app.data.userInfo.id,
      type: "粉丝"
    }).then((res) => {
      if (res.code == 200) {
        this.setData({
          fansList: res.data
        })
      }
    })
  }
})