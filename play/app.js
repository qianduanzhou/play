const api = require('/common/api.js')
App({
  data:{
    userInfo:{}
  },
  onShow () {
    this.getStore()
  },
  getStore() {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.data.userInfo = res.data
      },
      fail:(res) => {
        this.data.userInfo = {}
      }
    })
  },
  checkLogin() {
    let data = {
      username:this.data.userInfo.username,
      password: this.data.userInfo.password
    }
    api.request(api.login,data,"post").then((res) => {
      if(res.code == 200) {
        wx.setStorage({
          key: 'userInfo',
          data: res.data[0],
        })
        this.getStore()
      }
    })
  }
})