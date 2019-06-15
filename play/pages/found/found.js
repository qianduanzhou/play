const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({
  data: {
    foundList:[],
    showTop:false
  },
  onLoad: function (options) {
    this.init()
  },
  init() {
    api.request(api.getFound).then((res) => {
      wx.showLoading({
        title: '加载中',
        duration:1500
      })
      let list = [],
        bigTypes = [],
        types = []
      if (res.code == 200) {
        res.data.forEach((item) => {
          if(!bigTypes.includes(item.bigType)) {
            bigTypes.push(item.bigType)
          }
          if (!types.includes(item.type)) {
            types.push(item.type)
          }
        })
        bigTypes.forEach((item1) => {
          list.push({
            bigType:item1,
            data:[]
          })
          types.forEach((item2) => {
            if(item1.includes(item2[0])) {
              list.forEach((item3) => {
                if(item3.bigType == item1) {
                  item3.data.push({
                    type:item2,
                    data:[]
                  })
                }
              })
            }
          })
        })
        list.forEach((item1) => {
          item1.data.forEach((item2) => {
            res.data.forEach((item3) => {
              if(item3.type == item2.type) {
                item2.data.push(item3)
              }
            })
          })
        })
        this.setData({
          foundList:list
        })

      }
    })
  },
  onPageScroll: util.debounce(function (e) {
    let height = wx.getSystemInfoSync().windowHeight 
    console.log(height)
    if(e.scrollTop > height) {
      this.setData({
        showTop:true
      })
    }else {
      this.setData({
        showTop: false
      })
    }
  },200),
  toTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  toDetail(e) {
    wx.navigateTo({
      url: '/pages/foundDetail/foundDetail?id=' + e.currentTarget.dataset.id,
    })
  }
})