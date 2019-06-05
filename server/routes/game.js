var express = require('express');
var router = express.Router();
const game = require('../module/game')
const util = require('../common/util')
const operate = require('../common/dbOperate')

/* GET users listing. */

//  获取热门游戏
router.get('/hotgame', function(req, res, next) {
  game.searchHot().then((result) => {
    util.RESJSON(req, res, next,200,'success',result)
  }).catch((e) => {
    util.RESJSON(req, res, next,500, e)
  })
});

//  获取所有游戏
router.get('/allgame', function(req, res, next) {
  operate.searchAll("game").then((result) => {
    util.RESJSON(req, res, next,200,'success',result)
  }).catch((e) => {
    util.RESJSON(req, res, next,500, e)
  })
});

//  获取游戏段位
router.post('/level', function (req, res, next) {
  let name = req.body.name
  operate.searchOne(name,'gameName','level').then((result) => {
    util.RESJSON(req, res, next,200,'success',result)
  }).catch((e) => {
    util.RESJSON(req, res, next,500, e)
  })
})

module.exports = router;
