// 本地url
// let url = "http://192.168.0.105:3000/"

// 自己调试url：根据自己电脑ip设置（自行百度查ip方法）
// let url = "http://192.168.0.105:3000/"

//  阿里云url
let url = "http://47.102.220.59:3200/"

let getHotGame = 'game/hotgame'
let getAllGame = 'game/allgame'
let searchOneGameLevel = 'game/level'


let publish = 'publish/push'
let unPublish = 'publish/pull'
let published = 'publish/published'
let publishedDetail = 'publish/publishedDetail'
let publishUpdate = 'publish/update'
let publishDelete = 'publish/delete'
let searchPublish = 'publish/searchPublish'
let publishInfo = 'publish/publishInfo'


let register = 'user/register'
let login = 'user/login'
let wxGetInfo = 'user/wxGetInfo'
let wxLogin = 'user/wxLogin'
let updateUser = 'user/update'
let getDetail = 'user/getDetail'
let addMoney = 'user/addMoney'
let getAllUser = 'user/allUser'

let concern = 'concern/concern'
let unConcern = 'concern/unConcern'
let checkConcern = 'concern/checkConcern'
let concernList = 'concern/concernList'


let setMessage = 'user/setMessage'
let getMessage = 'user/getMessage'
let clearMessage = 'user/clearMessage'


let buyDetail = 'order/buyDetail'
let buy = 'order/buy'
let getOrder = 'order/getOrder'
let getCurtom = 'order/getcustom'

let setFootmark = 'footmark/setFootmark'
let getFootmark = 'footmark/getFootmark'
let clearFootmark = 'footmark/clear'

let searchAll = 'search/searchAll'
let searchOne = "search/searchOne"

let getFound = 'game/found'
let getFoundDetial = 'game/foundDetail'

function request(api, data = {}, method="get") {
  return new Promise((resolve,reject) => {
    wx.request({
      url: url + api,
      method: method,
      data: data,
      success: (result) => {
        let res = result.data
        resolve(res)
      },
      fail:(res) => {
        reject(res)
      }
    })
  })
}

function chooseImage() {
  return new Promise((resolve,reject) => {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: url+'user/uploadFile',
          filePath: tempFilePaths[0],
          name: 'file',
          success: (result) => {
            let imgData = JSON.parse(result.data)
            resolve(imgData)
          }
        })
      },
    })
  })
}

module.exports = {
  url,
  request,
  getHotGame,
  getAllGame,
  searchOneGameLevel,
  register,
  login,
  updateUser,
  getDetail,
  getAllUser,
  addMoney,
  publish,
  unPublish,
  published,
  publishedDetail,
  publishUpdate,
  publishDelete,
  wxGetInfo,
  wxLogin,
  searchPublish,
  publishInfo,
  buyDetail,
  buy,
  getOrder,
  getCurtom,
  setFootmark,
  getFootmark,
  clearFootmark,
  setMessage,
  getMessage,
  clearMessage,
  concern,
  unConcern,
  checkConcern,
  concernList,
  chooseImage,
  searchAll,
  searchOne,
  getFound,
  getFoundDetial
}