const api = require('/common/api.js')
App({
  data:{
    userInfo:{}
  },
  async onLaunch () {
    await this.getStore()
  },
  getStore() {
    return new Promise((resolve,reject) => {
      wx.getStorage({
        key: 'userInfo',
        success: (res) => {
          console.log('success', res.data)
          this.data.userInfo = res.data
          resolve(true)
        },
        fail: (res) => {
          console.log('failer')
          this.data.userInfo = {}
          resolve(false)
        }
      })
    })
   
  },
  checkLogin() {
    return new Promise((resolve,reject) => {
      let data = {
        username: this.data.userInfo.username,
        password: this.data.userInfo.password
      }
      api.request(api.login, data, "post").then((res) => {
        if (res.code == 200) {
          wx.setStorage({
            key: 'userInfo',
            data: res.data[0],
          })
          this.getStore()
        }
      })
    })
  }
})