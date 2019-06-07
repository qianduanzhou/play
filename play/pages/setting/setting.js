const app = getApp()
const api = require('../../common/api.js')
const util = require('../../common/util.js')
Page({

  data: {
    userInfo:{},
    password: '',
    nickname: '',
    userPic: '',
    gender:1,
    sex: [
      { name: '1', value: '男', checked: true},
      { name: '2', value: '女', checked: false}
    ],
    age:0
  },

  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo:res.data,
          userPic: res.data.userPic,
          password:res.data.password,
          nickname:res.data.nickname,
          age:res.data.age
        })
        if(res.data.sex == 2) {
          this.data.sex[0].checked = false
          this.data.sex[1].checked = true
          this.setData({
            sex:this.data.sex,
            gender:2
          })
        }else {
          this.data.sex[0].checked = true
          this.data.sex[1].checked = false
          this.setData({
            sex: this.data.sex,
            gender: 1
          })
        }
      },
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      gender: e.detail.value
    })
  },
  logout() {
    wx.removeStorage({
      key: 'userInfo',
      success: function(res) {
        wx.switchTab({
          url: '/pages/index/index',
        })
      },
    })
  },
  clearAll() {
    let userInfo = {
      id:this.data.userInfo.id,
      username:this.data.userInfo.username,
    }
    wx.showToast({
      title: '清空成功',
      success:() => {
        this.setData({
          userInfo: userInfo,
          password: '',
          nickname: '',
          age: 0
        })
      }
    })
  },
  changName(e) {
    this.setData({
      nickname:e.detail.value
    })
  },
  changePassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  changeAge(e) {
    this.setData({
      age: e.detail.value
    })
  },
  chooseImage() {
    api.chooseImage().then((res) => {
      if (res.code == 200) {
        this.setData({
          userPic: api.url + "public/images/" + res.data
        })
      }
    })
  },
  saveChange() {
    let data = {
      userId: this.data.userInfo.id,
      nickname: this.data.nickname,
      password: this.data.password,
      sex: this.data.gender,
      age: this.data.age,
      userPic: this.data.userPic
    }
    wx.showModal({
      title: '修改',
      content: '修改个人资料',
      success:(res)=> {
        if(res.confirm) {
          api.request(api.updateUser, data, "post").then((res) => {
            if (res.code == 200) {
              app.checkLogin()
              wx.showToast({
                title: '成功',
                duration: 1000,
                success: (res) => {
                  util.fleshPre()
                  wx.switchTab({
                    url: '/pages/personal/personal',
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