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

module.exports = {
  formatList: formatList,
  getName: getName,
  fleshPre: fleshPre,
  sortUp: sortUp,
  sortDown: sortDown
}