function formatList(list) {
  let list1 = [], list2 = [], list3 = [], list4 = [], list5 = []
  list.forEach((item) => {
    switch (item.type) {
      case 1:
        list1.push(item)
        break;
      case 2:
        list2.push(item)
        break;
      case 3:
        list3.push(item)
        break;
      case 4:
        list4.push(item)
        break;
      case 5:
        list5.push(item)
        break;
      default:
        break;
    }
  })
  return {
    list1: list1,
    list2: list2,
    list3: list3,
    list4: list4,
    list5: list5
  }
}


function getName(data) {
  let list = []
  data.forEach((item) => {
    list.push(item.name)
  })
  return list
}

//  刷新上一个页面的数据
function fleshPre() {
  var pages = getCurrentPages();//获取页面栈
  
  if (pages.length > 1) {
    //上一个页面实例对象
    var prePage = pages[pages.length - 2];
    //调用上一个页面的onLoad,onShow方法
    console.log(prePage)
    prePage.onLoad()
    prePage.onShow()
  } 
}

//  时间升降序
function sortDown(a, b) {
  var num1 = parseInt(a.updateTime)
  var num2 = parseInt(b.updateTime)
  return num1 - num2
}
function sortUp(a, b) {
  var num1 = parseInt(a.updateTime)
  var num2 = parseInt(b.updateTime)
  return num2 - num1
}

//  乱序
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function shuffle(arr) {
  let _arr = arr.slice()
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i)
    let t = _arr[i]
    _arr[i] = _arr[j]
    _arr[j] = t
  }
  return _arr
}


//  仿抖
function debounce(method, delay) {
  let timer = null;
  return function () {
    let self = this,
        args = arguments;
    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      method.apply(self, args);
    }, delay);
  }
}

function isPainObject(obj) {
  // 区分数组和对象的情况
  return Object.prototype.toString.call(obj) === '[object Object]';
}

/**
 * string => array[]
 * @param str
 * @returns {Array}
 */
function stringToBytes(str) {
  let ch;
  let st;
  let re = [];
  for (let i = 0; i < str.length; i++) {
    ch = str.charCodeAt(i); // get char
    st = []; // set up "stack"
    do {
      st.push(ch & 0xFF); // push byte to stack
      ch = ch >> 8; // shift value down by 1 byte
    }
    while (ch);
    re = re.concat(st.reverse());
  }
  return re;
}

module.exports = {
  formatList,
  getName,
  fleshPre,
  sortUp,
  sortDown,
  shuffle,
  debounce,
  isPainObject,
  stringToBytes
}