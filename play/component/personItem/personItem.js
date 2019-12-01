// component/personItem/personItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    list:{
      type:Array,
      value:[]
    }
  },
  data: {

  },
  methods: {
    toDetail(e) {
      let id = e.currentTarget.dataset.item.userInfo ? e.currentTarget.dataset.item.userInfo.id : e.currentTarget.dataset.item.id
      wx.navigateTo({
        url: '/pages/userDetail/userDetail?userId='+id
      })
    }
  },
  options: {
    styleIsolation: 'apply-shared'
  },
})
