const app = getApp()
const api = require('../../common/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchList:[]
  },
  onLoad: function (options) {
    this.init(options)
  },
  init(options) {
    api.request(api.searchAll, {
      keys: options.keys
    }, "post").then((res) => {
      if (res.code == 200) {
        let list = res.data.slice(0)
        list.forEach((item,index) => {
          if(item.id == app.data.userInfo.id) {
            list.splice(index,1)
          }
        })
        this.setData({
          searchList: list
        })
      }
    })
  }
})