const api = require('../../common/api.js')
const util = require('../../common/util.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    level: [],
    multiArray: [['每局', '每小时'], ['5币', '10币', '15币', '20币', '30币']],
    index: 0,
    multiIndex: [0, 0],
    introduction:'',
    publishedDetail:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.init(options.game)
  },
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['5币', '10币', '15币', '20币', '30币']
            break;
          case 1:
            data.multiArray[1] = ['10币', '20币', '30币', '40币', '50币']
            break;
        }
        data.multiIndex[1] = 0;
        break;
    }
    this.setData(data);
  },
  input(e) {
    this.setData({
      introduction: e.detail.value
    })
  },
  clear() {
    this.setData({
      introduction: ''
    })
  },
  init(name) {
    let data = {
      name: name,
      userId: app.data.userInfo.id
    }
    api.request(api.publishedDetail, data).then((res) => {
      console.log(res.data)
      if(res.code == 200) {
        let index1 = this.data.multiArray[0].findIndex((item)=>{
          return item == res.data.moneyType
        })
        let index2 = this.data.multiArray[1].findIndex((item) => {
          return item == res.data.moneyNum
        })
        this.setData({
          publishedDetail:res.data,
          level: util.getName(res.data.gameLevel),
          multiIndex: [parseInt(index1), parseInt(index2)],
          introduction: res.data.introduction,
        })
        let index = this.data.level.findIndex((item) => {
          return item == res.data.level
        })
        this.setData({
          index: index
        })
      }
    })
  },
  change() {
    wx.showModal({
      title: '修改',
      content: '修改发布信息',
      success:(res) => {
        if (res.confirm) {
          let id = this.data.publishedDetail.id,
            level = this.data.level[this.data.index],
            moneyType = this.data.multiArray[0][this.data.multiIndex[0]],
            moneyNum = this.data.multiArray[1][this.data.multiIndex[1]],
            introduction = this.data.introduction,
            publishTime = new Date().getTime()
          let data = {
            id: id,
            level: level,
            moneyType: moneyType,
            moneyNum: moneyNum,
            introduction: introduction,
            publishTime: publishTime
          }
          api.request(api.publishUpdate, data, "post").then((res) => {
            if (res.code == 200) {
              util.fleshPre()
              wx.navigateBack({
                url: '/pages/published/published',
              })
            }
          })
        }
      }
    })
  },
  del() {
    let data = {
      id : this.data.publishedDetail.id
    }
    wx.showModal({
      title: '删除',
      content: '删除该发布',
      success(res) {
        if (res.confirm) {
          api.request(api.publishDelete, data, "post").then((res) => {
            util.fleshPre()
            wx.navigateBack({
              url:'/pages/published/published'
            })
          })
        }
      }
    })
  }
})