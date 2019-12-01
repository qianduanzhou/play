const { isPainObject } = require('./util.js')
const api = require('./api.js')
// 队列锁
let lock = false;
// 请求队列
let queue = [];

/**
 * 上报数据
 * @param data 默认数据包括(client_version,openid,channel)
 * @returns {Promise<void>}
 */
function sendkv(data) {
  if (lock) {
    //存在锁,此时直接将数据丢入队列
    _pushDataToQueue(data);
  } else {
    //不存在锁,开始上锁
    lock = true;
    if (queue.length === 0) {
      //请求队列为空,直接发送请求
      _sendReport(data);
    } else {
      //请求队列不为空，请求队列添加一个元素
      _pushDataToQueue(data);
      // 发起请求
      _sendReport(queue);
    }
  }
}

// ------ 以下是内置方法，不对外暴露 ------

async function _pushDataToQueue(data) {
  _emptyToNull(data);
  queue.push(data);
}

async function _sendReport(report) {
  let data = {
    data: []
  };
  _emptyToNull(report);
  // let data = {};
  if (isPainObject(report)) {
    //单条请求
    // data = report;
    data.data.push(report);
    await _addCommonParams(data);
  } else {
    //多条请求
    report.forEach(item => {
      data.data.push(item);
    });
    await _addCommonParams(data);
    //迅速置空队列
    queue = [];
  }
  console.log("数据上报结果", data);
  api.request(api.dataReport, data, 'post').then(
    _onCompleted,
    _onRejected
  );
}

/**
 * 添加上报的公共参数
 * @param data 外面传入的参数
 * @private
 *   data_date openid unionid platform_ app_version
 *   system_version  brand  model  wxversion  wx_language
 *    network_  timestamp_  appid server_type
 */
async function _addCommonParams(data) {
  let userInfo = wx.getStorageSync('userInfo')
  let date = new Date()
  wx.getSystemInfo({
    success: async res => {
      Object.assign(data, {
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
        appid: 'wx04972a9c0769de54',
        userId: userInfo ? userInfo.id : 'NULL',
        platform: res.platform,
        system_version: res.system,
        brand: res.brand,
        model: res.model,
        wxversion: res.version,
        wx_language: res.language
      });
    },
    fail: res => {
      console.warn('getSystemInfo Error', res);
    },
  });
  _emptyToNull(data);
}

function _onCompleted(res) {
  // console.log('sendkv上报结果 ', res);
  if (queue.length === 0) {
    //_sendReport请求过程中，外部没有调用sendkv接口 所以queue为空数组
    lock = false;
  } else {
    //_sendReport请求过程中,外部有调用sendkv接口 queue不为空数组
    _sendReport(queue);
  }
}

function _onRejected() {
  // console.log('_onRejected');
  lock = false;
}

/**
 * 遍历obj 将obj中的属性中值 空 => "NULL"
 * @param{Object} obj
 * @private
 */
function _emptyToNull(obj) {
  Object.keys(obj).forEach(key => {
    if (obj[key] === "" || obj[key] == null) {
      obj[key] = "NULL";
    }
  });
}

module.exports = sendkv;
