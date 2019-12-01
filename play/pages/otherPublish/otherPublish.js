const api = require('../../common/api.js')
const util = require('../../common/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked:'no',
    publishList:[],
    gameId: '',
    level: [],
    index: 0
  },

  onLoad: function (options) {
    this.levelList = []
    this.priceList = []
    this.setData({
      gameId : options.gameId
    })
    this.init(options.name)
  },
  init(name) {
    wx.showLoading({
      title: '加载中',
    })
    api.request(api.searchPublish,{
      gameId: this.data.gameId,
      userId: app.data.userInfo.id
    }).then((res) => {
      this.levelList = res.data[1].slice(0)
      this.priceList = this.levelList.slice(0)
      
      let level = util.getName(res.data[0])
      level.unshift('全部')
      this.setData({
        publishList: this.priceList,
        level: level
      })
      wx.hideLoading()
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
    let name = this.data.level[this.data.index]
    let list = this.levelList.slice(0)
    let newList = []
    if (name == "全部") {
      this.priceList = list
      this.setData({
        publishList: this.priceList
      })
      return
    }
    list.forEach((item) => {
      if(item.level == name) {
        newList.push(item)
      }
    })
    this.priceList = newList
    this.setData({
      publishList: this.priceList
    })
  },
  changeMode() {
    this.setData({
      checked: this.data.checked == 'no' ? 'up' : this.data.checked == 'up' ? 'down' : 'no'
    })
    switch (this.data.checked) {
      case 'no':
        this.setData({
          publishList: this.priceList
        })
      break;
      case 'up':
        var list = this.priceList.slice(0)
        list.sort(this._sortUp)
        this.setData({
          publishList:list
        })
      break;
      case 'down':
        var list = this.priceList.slice(0)
        list.sort(this._sortDown)
        this.setData({
          publishList: list
        })
      break;
    }
  },
  _sortUp(a,b) {
    var num1 = parseInt(a.moneyNum.substring(0, a.moneyNum.length - 1))
    var num2 = parseInt(b.moneyNum.substring(0, b.moneyNum.length - 1))
    return num1 - num2
  },
  _sortDown(a, b) {
    var num1 = parseInt(a.moneyNum.substring(0, a.moneyNum.length - 1))
    var num2 = parseInt(b.moneyNum.substring(0, b.moneyNum.length - 1))
    return num2 - num1
  }
})