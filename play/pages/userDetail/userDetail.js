const app = getApp()
const api = require('../../common/api.js')
const common = require('../../common/common.js')
const util = require('../../common/util.js')
Page({
  data: {
    userInfo:{},
    checkConcern: false,
    concernId: ''
  },


  onLoad: function (options) {
    this.enterpriseId = options.userId
    this.init(options.userId)
    this.checkConcern()
  },
  init(userId) {
    api.request(api.getDetail,{
      userId:userId
    }).then((res) => {
      if(res.code == 200) {
        this.setData({
          userInfo:res.data
        })
      }
    })
  },
  checkConcern() {
    common.checkConcern(app, api, this.enterpriseId, this)
    setTimeout(() => {
      util.fleshPre()
    },100)
  },
  concern() {
    common.concern(app, api, this.enterpriseId,this)
    setTimeout(() => {
      util.fleshPre()
    }, 100)
  },
  unConcern() {
    common.unConcern(app, api, this.enterpriseId, this)
    setTimeout(() => {
      util.fleshPre()
    }, 100)
  }
})