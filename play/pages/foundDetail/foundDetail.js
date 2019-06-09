// pages/foundDetail/foundDetail.js
const api = require('../../common/api.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{}
  },
  onLoad: function (options) {
    this.init(options.id)
  },
  init(id) {
    api.request(api.getFoundDetial,{
      id:id
    }).then((res) => {
      if(res.code == 200) {
        let data = res.data
        data.introduction = data.introduction.split('/n')
        this.setData({
          detail: data
        })
      }
    })
  }
})