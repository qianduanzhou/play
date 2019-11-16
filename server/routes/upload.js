const path = require('path')
const express = require('express');
const router = express.Router();
const util = require(path.resolve('common/util'))

const multer = require('multer');  
//上传文件配置  
const storage = multer.diskStorage({  
  //文件存储位置  
  destination: (req, file, cb) => {  
    // cb(null, path.resolve(__dirname, '../../play/images/'));  
    cb(null, path.resolve(__dirname, '../public/images'));  
  },  
  //文件名  
  filename: (req, file, cb) => {  
    cb(null, `${Date.now()}_${Math.ceil(Math.random() * 1000)}_multer.${file.originalname.split('.').pop()}`);  
  }  
});  
const uploadCfg = {  
  storage: storage,  
  limits: {  
    //上传文件的大小限制,单位bytes  
    fileSize: 1024 * 1024 * 20  
  }  
};

//  上传图片
router.post('/uploadImg',function (req,res,next) {
    let upload = multer(uploadCfg).any();  
  upload(req, res, async (err) => {  
    if (err) {  
        util.RESJSON(req, res, next, 500, 'error')
        return;  
    };   
    let uploadFile = req.files[0];  
    util.RESJSON(req, res, next, 200, 'success',uploadFile.filename)
  });
})

module.exports = router;