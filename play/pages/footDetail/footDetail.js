const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({

  data: {
    footList:[]
  },

  onLoad: function (options) {
    this.init()
  },
  init() {
    api.request(api.getFootmark,{
      userId:app.data.userInfo.id
    }).then((res) => {
      if(res.code == 200) {
        this.setData({
          footList: res.data.sort(util.sortUp)
        })
      }
    })
  },
  clearFootmark() {
    wx.showModal({
      title: '清空',
      content: '清空所有足迹',
      success:(res) => {
        if(res.confirm) {
          api.request(api.clearFootmark,{
            userId:app.data.userInfo.id
          },"post").then((res) => {
            this.init()
            app.checkLogin()
            app.getStore()
          })
        }
      }
    })
  },
  _sortUp(a, b) {
    var num1 = parseInt(a.updateTime)
    var num2 = parseInt(b.updateTime)
    return num1 - num2
  },
})