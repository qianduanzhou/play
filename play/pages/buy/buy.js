const app = getApp()
const api = require('../../common/api.js')
const sendkv = require('../../common/sendkv.js')
Page({
  data: {
    time: '12:01',
    number: 1,
    money:0,
    remarks:'',
    detail: {}
  },

 
  onLoad: function (options) {
    this.init(options.id)
  },
  bindTimeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  init(id) {
    wx.showLoading({
      title: '加载中',
    })
    api.request(api.buyDetail,{
      id:id
    }).then((res) => {
      if(res.code == 200) {
        let money = res.data.publishDetail.moneyNum.slice(0, res.data.publishDetail.moneyNum.length - 1)
        this.setData({
          detail:res.data,
          money: money
        })
        wx.hideLoading()
      }
    })
  },
  numberInput(e) {
    this.setData({
      number:e.detail.value
    })
  },
  textInput(e) {
    this.setData({
      remarks:e.detail.value
    })
  },
  buy() {
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.switchTab({
        url: '/pages/personal/personal',
      })
      return
    }
    let userId = app.data.userInfo.id,
      enterpriseId = this.data.detail.publishDetail.userId,
      publishId = this.data.detail.publishDetail.id,
      game = this.data.detail.publishDetail.game,
      gameId = this.data.detail.publishDetail.gameId,
      number = this.data.number,
      money = this.data.money,
      remarks = this.data.remarks,
      time = this.data.time,
      buyTime = new Date().getTime()
    let data = {
      userId,
      enterpriseId,
      publishId,
      gameId,
      game,
      number,
      money,
      remarks: remarks ? remarks : "无",
      time,
      buyTime
    }
    console.log(buyTime)
    wx.showModal({
      title: '购买',
      content: `当前购买金额为${this.data.money*this.data.number}.00币,请确认订单后购买`,
      success:(res) => {
        if (res.confirm) {
          api.request(api.buy,data,"post").then((res) => {
            if(res.code == 200) {
              sendkv({
                reportKey: 90074,
                page: 'buy',
                gameId: data.gameId,
                opType: 1
              })
              app.checkLogin()
              app.getStore()
              wx.redirectTo({
                url: '/pages/orderList/orderList',
              })
            }else if(res.code == 404) {
              wx.showToast({
                title: '余额不足',
                image:'../../images/error.png',
                duration:1500
              })
            }
          })
        }
      }
    })
  }
})