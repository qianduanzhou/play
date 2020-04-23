const api = require('../../common/api.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '',
    password: ''
  },
  onLoad: function (options) {
    this.setData({
      username: options.username ? options.username : ''
    })
  }, 
  changeUser(e) {
    this.setData({
      username: e.detail.value
    })
  },
  changePassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  clearUser() {
    this.setData({
      username: ''
    })
  },
  clearPass() {
    this.setData({
      password: ''
    })
  },
  login() {
    if (!this.data.username && !this.data.password) {
      wx.showToast({
        title: '账号或密码为空',
        image: '../../images/error.png',
        duration: 1500
      })
      return
    }
    let data = {
      username : this.data.username,
      password: this.data.password
    }
    api.request(api.login, data,"post").then((res) => {
      let data = res.data[0]
      if(res.code == 200) {
        wx.setStorage({
          key: 'userInfo',
          data: data,
          success: () => {
            wx.switchTab({
              url: '/pages/index/index',
            })
          }
        })
        app.getStore()
      }else if(res.code == 404){
        wx.showToast({
          title: '账号或密码错误',
          image:"../../images/error.png",
          duration:1500
        })
      }
    })
  },
  wxLogin(e) {
    console.log('wxLogin',e)
    let data = e.detail
    if (data.errMsg == "getUserInfo:ok") {
      console.log('userInfo', data.rawData)
      let userInfo = JSON.parse(data.rawData)
      wx.login({
      success(res) {
        console.log('wxLogin', res)
        if(res.code) {
          wx.request({
            url: 'https://api.weixin.qq.com/sns/jscode2session',
            data: {
              appid: "wx04972a9c0769de54",
              secret:"f5c075c189de7eb0bb327d400fec2dc9",
              js_code:res.code,
              grant_type: "authorization_code"
            },
            method:"GET",
            header: {
              'content-type': 'application/json'
            },
            success(res_login) {
              console.log('res_login', res_login)
              wx.setStorage({
                key: 'wxInfo',
                data: {
                  sessionKey: res_login.data.session_key,
                  openid: res_login.data.openid
                }
              })
              let data = {
                username: res_login.data.openid,
                password: res_login.data.openid,
                nickname: userInfo.nickName,
                userPic: userInfo.avatarUrl,
                sex: userInfo.gender,
                age:22
              }
              api.request(api.wxLogin,data,"post").then((user) => {
                console.log('user', user)
                wx.setStorage({
                  key: 'userInfo',
                  data: user.data[0],
                  success() {
                    wx.switchTab({
                      url: '/pages/index/index',
                    })
                    app.getStore()
                  }
                })
              })
            }
          })
        }
      }
    })
    }
  }
})