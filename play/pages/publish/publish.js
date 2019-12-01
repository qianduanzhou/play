const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    list1:[],
    list2:[],
    list3: [],
    list4: [],
    list5: [],
    userInfo: [],
    introduction: '', 
    multiArray: [['手游', '端游', '娱乐', '心理咨询', '文艺生活'], [], []],
    multiArray1: [['每局', '每小时'], ['5币', '10币', '15币', '20币', '30币']],
    multiIndex: [0, 0, 0],
    multiIndex1: [0, 0]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo:res.data
        })
        this.init()
      },
      fail: (res) => {
        wx.switchTab({
          url: '/pages/personal/personal',
        })
      }
    })
  },
  bindMultiPickerChange: function (e) {
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerChange1: function (e) {
    this.setData({
      multiIndex1: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    var list = []
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            this._caseThing(this.data.list1)
            break;
          case 1:
            this._caseThing(this.data.list2)
            break;
          case 2:
            this._caseThing(this.data.list3)
            break;
          case 3:
            this._caseThing(this.data.list4)
            break;
          case 4:
            this._caseThing(this.data.list5)
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        let name = this.data.multiArray[1][e.detail.value]
        /* 测试 */
        this._getLevel(name)
        data.multiIndex[2] = 0;
    }
    this.setData(data);
  },
  bindMultiPickerColumnChange1: function (e) {
    var data = {
      multiArray1: this.data.multiArray1,
      multiIndex1: this.data.multiIndex1
    };
    data.multiIndex1[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex1[0]) {
          case 0:
            data.multiArray1[1] = ['5币', '10币', '15币', '20币', '30币']
            break;
          case 1:
            data.multiArray1[1] = ['10币', '20币', '30币', '40币', '50币']
            break;
        }
        data.multiIndex1[1] = 0;
        break;
    }
    this.setData(data);
  },
  init() {
    api.request(api.getAllGame).then((res) => {
      let list = util.formatList(res.data)
      console.log('list.list1', list.list1)
      list.list1.forEach((item) => {
        this.data.multiArray[1].push(item.name)
        
      })
      this._getLevel(list.list1[0].name)
      this.setData({
        list1: list.list1,
        list2: list.list2,
        list3: list.list3,
        list4: list.list4,
        list5: list.list5,
        multiArray: this.data.multiArray
      })
    })
  },
  publish() {
    let gameType = this.data.multiArray[0][this.data.multiIndex[0]],
      gameName = this.data.multiArray[1][this.data.multiIndex[1]],
      level = this.data.multiArray[2][this.data.multiIndex[2]] || '无段位',
      moneyType = this.data.multiArray1[0][this.data.multiIndex1[0]],
      moneyNum = this.data.multiArray1[1][this.data.multiIndex1[1]],
      introduction = this.data.introduction,
      updateTime = new Date().getTime()
  let data = {
    userId:this.data.userInfo.id,
    game: gameName,
    gameType: gameType,
    level: level,
    moneyType: moneyType,
    moneyNum: moneyNum,
    introduction: introduction,
    updateTime: updateTime
  }
  console.log(data)
  api.request(api.publish,data,"post").then((res) => {
    if(res.code == 200) {
      wx.showToast({
        title: '发布成功',
        duration:500,
        success:()=> {
          wx.navigateTo({
            url: '/pages/published/published',
          })
        }
      })
    }else {
      wx.showModal({
        title: '提示',
        content: '该类型已发布，请前往个人发布取消该发布类型',
        success(res) {
          if (res.confirm) {
            console.log(res.confirm)
            wx.navigateTo({
              url: '/pages/published/published',
            })
          }
        }
      })
    }
  })
  },
  input(e) {
    this.setData({
      introduction:e.detail.value 
    })
  },
  clear() {
      this.setData({
        introduction: ''
      })
  },
  _getLevel(name) {
    api.request(api.searchOneGameLevel,{
      name:name
    },"post").then((res) => {
      this.data.multiArray[2] = util.getName(res.data)
      this.setData({
        multiArray: this.data.multiArray
      })
    })
  },
  _caseThing(data) {
    let list = util.getName(data)
    this.data.multiArray[1] = list
    this.setData({
      multiArray: this.data.multiArray
    })
    let name = list[0]
    /* 测试 */
    this._getLevel(name)
  }
})