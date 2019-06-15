function concern(app, api, enterpriseId, that) {
  let data = {
    userId: app.data.userInfo.id,
    enterpriseId: enterpriseId
  }
  let message = {
    userId: app.data.userInfo.id,
    enterpriseId: enterpriseId,
    type: '关注',
    updateTime: new Date().getTime()
  }
  api.request(api.concern, data, "post").then((res) => {
    if (res.code == 200) {
      that.setData({
        checkConcern: true,
        concernId: res.data
      })
      api.request(api.setMessage, message, "post").then((res) => { })
      app.checkLogin()
      wx.showToast({
        title: '关注成功',
        duration: 1500
      })
    }
  })
}

function unConcern(app, api, enterpriseId, that) {
  let data = {
    userId: app.data.userInfo.id,
    enterpriseId: enterpriseId,
    concernId: that.data.concernId
  }
  let message = {
    userId: app.data.userInfo.id,
    enterpriseId: that.enterpriseId,
    type: '取消关注',
    updateTime: new Date().getTime()
  }
  api.request(api.unConcern, data).then((res) => {
    if (res.code == 200) {
      that.setData({
        checkConcern: false
      })
      api.request(api.setMessage, message, "post").then((res) => { })
      app.checkLogin()
      wx.showToast({
        title: '取消关注成功',
        duration: 1500
      })
    }
  })
}

function checkConcern(app, api,enterpriseId,that) {
  let data = {
    userId: app.data.userInfo.id,
    enterpriseId: enterpriseId
  }
  api.request(api.checkConcern, data).then((res) => {
    if (res.code == 200) {
      that.setData({
        checkConcern: true,
        concernId: res.data.id
      })
    }
  })
}

module.exports = {
  concern: concern,
  unConcern: unConcern,
  checkConcern: checkConcern
}