// pages/setting/setting.js
Page({

  data: {
    userInfo:{},
    sex: [
      { name: '1', value: '男', checked: true},
      { name: '2', value: '女', checked: false}
    ]
  },

  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res) => {
        this.setData({
          userInfo:res.data
        })
        if(res.data.sex == 2) {
          this.data.sex[0].checked = false
          this.data.sex[1].checked = true
          this.setData({
            sex:this.data.sex
          })
        }else {
          this.data.sex[0].checked = true
          this.data.sex[1].checked = false
          this.setData({
            sex: this.data.sex
          })
        }
      },
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
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
      password:'',
      nickname:'',
      userPic:''
    }
    wx.showToast({
      title: '清空成功',
      success:() => {
        this.setData({
          userInfo: userInfo
        })
        console.log(this.data.userInfo)
      }
    })
  }
})