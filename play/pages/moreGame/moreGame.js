const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({
  data: {
    list1: [],
    list2: [],
    list3: [],
    list4: [],
    list5: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getLists()
  },
  getLists() {
    wx.showLoading({
      title: '加载中'
    })
    api.request(api.getAllGame).then((res) => {
      let list = util.formatList(res.data)
      this.setData({
        list1: list.list1,
        list2: list.list2,
        list3: list.list3,
        list4: list.list4,
        list5: list.list5
      })
      wx.hideLoading()
    })
  }
})