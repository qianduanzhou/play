//index.js
//获取应用实例
const app = getApp()
const api = require('../../common/api.js')

console.log(api)
Page({
  data: {
    hotGameList:[],
    keys:""
  },
  onLoad: function () {
    this.getHotGame()
  },
  getHotGame() {
    wx.showLoading({
      title: '加载中'
    })
    api.request(api.getHotGame).then((res) => {
      if(res.code == 200) {
        this.setData({
          hotGameList: res.data
        })
        wx.hideLoading()
      }
    })
  },
  toMoreGame() {
    wx.navigateTo({
      url: '../moreGame/moreGame',
    })
  },
  publish() {
    wx.navigateTo({
      url: '../publish/publish',
    })
  },
  input(e) {
    this.setData({
      keys:e.detail.value
    })
  },
  toSearch() {
    wx.navigateTo({
      url: '/pages/searchResult/searchResult?keys='+this.data.keys
    })
  }
})
