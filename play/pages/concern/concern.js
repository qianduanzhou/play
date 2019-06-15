const app = getApp()
const api = require('../../common/api.js')
Page({
  data: {
    concernList:[],
    keys:""
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
        console.log(res.data)
        this.setData({
          concernList:res.data
        })
      }
    })
  },
  input(e) {
    this.setData({
      keys:e.detail.value
    })
  },
  search() {
    api.request(api.searchOne,{
      userId: app.data.userInfo.id,
      keys: this.data.keys,
      type:"关注"
    },"post").then((res) => {
      if(res.code == 200) {
        this.setData({
          concernList: res.data
        })
      }
    })
  }
})