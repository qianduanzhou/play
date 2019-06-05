// pages/message/message.js
const app = getApp()
const api = require('../../common/api.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    messageList:[]
  },
  onLoad: function (options) {
    api.request(api.getMessage,{
      userId:app.data.userInfo.id
    }).then((res) => {
      if(res.code == 200) {
        this.setData({
          messageList:res.data
        })
      }
    })
  },

})