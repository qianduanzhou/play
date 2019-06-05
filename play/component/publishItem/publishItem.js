const app = getApp()
const api = require('../../common/api.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list: {
      type:Array,
      value:[]
    },
    imageType: {
      type:String,
      value:'game'
    }
  },
  data: {

  },
  options: {
    styleIsolation: 'shared'
  },
  methods: {
    toDetail(e) {
      if (this.properties.imageType == "game") {
        let game = e.currentTarget.dataset.name
        wx.navigateTo({
          url: `/pages/publishedDetail/publishedDetail?game=${game}`
        })
      } else if(this.properties.imageType == "user") {
        let game = e.currentTarget.dataset.name
        let userId = e.currentTarget.dataset.userid
        let data = {
          userId : app.data.userInfo.id,
          enterpriseId: e.currentTarget.dataset.userid,
          game: e.currentTarget.dataset.name,
          readTime: new Date().getTime()
        }
        let message = {
          userId: app.data.userInfo.id,
          otherId: e.currentTarget.dataset.userid,
          type: '访问',
          updateTime:new Date().getTime()
        }
        api.request(api.setFootmark, data, "post").then((res) => {
          if(res.code == 200) {
            app.checkLogin()
            app.getStore()
          }
        })
        api.request(api.setMessage,message,"post").then((res) => {
          if(res.code == 200) {
            console.log(res)
          }
        })
        wx.navigateTo({
          url: `/pages/otherUserDetail/otherUserDetail?game=${game}&userId=${userId}`
        })
      }
    }
  }
})
