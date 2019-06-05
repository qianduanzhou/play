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
        image: '/images/error.png',
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
          image:"/images/error.png",
          duration:1500
        })
      }
    })
  },
  wxLogin(e) {
    wx.login({
      success(res) {
        if(res.code) {
          wx.getUserInfo({
            withCredentials:true,
            success(res_user) {
              wx.request({
                url: 'https://api.weixin.qq.com/sns/jscode2session',
                data: {
                  appid: "wx04972a9c0769de54",
                  secret:"82f30f6bdf2159a73fd9193302b12301",
                  js_code:res.code,
                  grant_type: "authorization_code"
                },
                method:"GET",
                header: {
                  'content-type': 'application/json'
                },
                success(res_login) {
                  wx.setStorage({
                    key: 'wxInfo',
                    data: {
                      sessionKey: res_login.data.session_key,
                      openid: res_login.data.openid
                    }
                  })
                  let data = {
                    appId: "wx04972a9c0769de54",
                    sessionKey: res_login.data.session_key,
                    encryptedData: res_user.encryptedData,
                    iv: res_user.iv
                  }
                  api.request(api.wxGetInfo,data,"post").then((result) => {
                    if(result.code == 200) {
                      let data = {
                        username: result.data.watermark.appid,
                        password:result.data.watermark.appid,
                        nickname: result.data.nickName,
                        userPic: result.data.avatarUrl,
                        sex: result.data.gender,
                        age:22
                      }
                      api.request(api.wxLogin,data,"post").then((user) => {
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
              })
            }
          })
        }
      }
    })
  }
})