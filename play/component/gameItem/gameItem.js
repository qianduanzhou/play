// component/gameItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    width: {
      type: Number,
      value: 20
    },
    margin: {
      type: Number,
      value: 10
    },
    list: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 生命周期
   */
  // lifetimes: {
  //   attached: function () {
  //     // 在组件实例进入页面节点树时执行
  //     console.log(this.properties.list)
  //   },
  //   ready: function () {
  //     // 在组件实例被从页面节点树移除时执行
  //     console.log(this.properties.list)
  //   },
  // },

  // 样式
  options: {
    styleIsolation: 'shared'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    toOtherPublish(e) {
      wx.navigateTo({
        url: `/pages/otherPublish/otherPublish?name=${e.currentTarget.dataset.name}`,
      })
    }
  }
})
