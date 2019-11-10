//index.js
//获取应用实例
const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')

Page({
  data: {
    hotGameList:[],
    recommendList:[],
    keys:"",
    imgUrls: [
      'http://192.168.1.105:3000/public/images/swiper1.jpg',
      'http://192.168.1.105:3000/public/images/swiper2.jpg',
      'http://192.168.1.105:3000/public/images/swiper3.jpg',
      'http://192.168.1.105:3000/public/images/swiper4.jpg',
      'http://192.168.1.105:3000/public/images/swiper5.jpg',
    ]
  },
  onLoad: function () {
    this.list = []
    this.getHotGame()
    this.initRecommend()
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
  initRecommend() {
    api.request(api.getAllUser).then((res) => {
      if(res.code == 200) {
        this.list = res.data
        let arr = []
        if(this.list.length > 10) {
          arr = util.shuffle(this.list).slice(0, 10)
        }else {
          arr = res.data.slice(0)
        } 
        this.setData({
          recommendList: arr
        })
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
    this.setData({
      keys:''
    })
  },
  changeRec() {
    if (this.list.length > 10) {
      let arr = util.shuffle(this.list).slice(0, 10)
      wx.showLoading({
        title: '加载中',
        success: () => {
          this.setData({
            recommendList: arr
          })
          wx.hideLoading()
        }
      })
    }
  },
  toUserDetail(e) {
    let id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '/pages/userDetail/userDetail?userId='+id
    })
  }
})
