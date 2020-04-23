// pages/message/message.js
const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[]
  },
  onShow: function (options) {
    console.log(123123)
    api.request(api.getMessage,{
      userId:app.data.userInfo.id
    }).then((res) => {
      console.log(res)
      if(res.code == 200) {
        this.setData({
          messageList: res.data.sort(util.sortUp)
        })
      }
    })
  },
  clearMessage() {
    api.request(api.clearMessage,{
      userId:app.data.userInfo.id
    },"post").then((res) => {
      wx.showModal({
        title: '清空',
        content: '清空消息',
        success:(res) => {
          if(res.confirm) {
            this.setData({
              messageList: []
            })
          }
        }
      })
    })
  }
})