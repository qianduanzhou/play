let url = "http://192.168.0.105:3000/"

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

let setMessage = 'user/setMessage'
let getMessage = 'user/getMessage'

let buyDetail = 'order/buyDetail'
let buy = 'order/buy'
let getOrder = 'order/getOrder'
let getCurtom = 'order/getcustom'

let setFootmark = 'footmark/setFootmark'
let getFootmark = 'footmark/getFootmark'
let clearFootmark = 'footmark/clear'

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

module.exports = {
  request,
  getHotGame,
  getAllGame,
  searchOneGameLevel,
  register,
  login,
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
  getMessage
}