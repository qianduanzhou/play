const api = require('../../common/api.js')
const app = getApp()
Page({
  data: {
    username:'',
    password:''
  },

  onLoad: function (options) {

  },
  changeUser(e) {
    this.setData({
      username:e.detail.value
    })
  },
  changePassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  clearUser() {
    this.setData({
      username:''
    })
  },
  clearPass() {
    this.setData({
      password: ''
    })
  },
  register() {
    if(!this.data.username && !this.data.password) {
      wx.showToast({
        title: '账号或密码为空',
        image: '/images/error.png',
        duration: 1500
      })
      return
    }
    let data = {
      username: this.data.username,
      password: this.data.password,
      nickname: this.data.username
    }
    api.request(api.register,data,"post").then((res) => {
      if(res.code === 200) {
        wx.showLoading({
          title: '跳转中',
          mask:true,
          success:() => {
            wx.navigateTo({
              url: `/pages/login/login?username=${this.data.username}`,
              success:() => {
                wx.hideLoading()
              }
            })
          }
        })
      }else {
        wx.showToast({
          title: '该账号已被注册',
          image:'/images/error.png',
          duration:2000,
          success:() => {
            this.setData({
              username:'',
              password:''
            })
          }
        })
      }
    })
  }
})