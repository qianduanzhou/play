/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-08 17:38:20
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `username` char(20) NOT NULL,
  `password` char(20) NOT NULL,
  `nickname` char(20) DEFAULT NULL,
  `userPic` char(200) DEFAULT '/images/personal.png',
  `sex` char(10) DEFAULT '1',
  `age` char(3) DEFAULT '0',
  `receivedOrders` int(5) DEFAULT '0',
  `fans` int(5) DEFAULT '0',
  `concern` int(5) DEFAULT '0',
  `footmark` int(5) DEFAULT '0',
  `city` char(10) DEFAULT '中国',
  `money` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20049 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('20001', '123456', '123456', 'mike', 'http://192.168.0.105:3000/public/images/15.jpg', '2', '30', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20002', 'root', 'root', 'root', 'http://192.168.0.105:3000/public/images/16.jpg', '2', '22', '0', '2', '1', '23', '中国', '320');
INSERT INTO `user` VALUES ('20030', 'wx04972a9c0769de54', 'wx04972a9c0769de54', '泓滨', 'https://wx.qlogo.cn/mmopen/vi_32/3aTsNa0ytrWAGIiaUoJrarMTtfQKlXJXGUcf4mFRYMw4VHp1CZIUNpyjczau5JlPicNUQBkXmyEjjN9apr5KPw7w/132', '1', '23', '1', '3', '0', '21', '汕头', '2980');
INSERT INTO `user` VALUES ('20034', '1234', '1234', '1234', 'http://192.168.0.105:3000/public/images/25.jpg', '2', '0', '0', '2', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20035', 'test', '123', '测试', 'http://192.168.0.105:3000/public/images/1559887656770_914_multer.jpg', '2', '0', '0', '1', '6', '28', '中国', '495');
INSERT INTO `user` VALUES ('20036', 'aaaa', 'aaaa', 'aaaa', 'http://192.168.0.105:3000/public/images/10.jpg', '0', '0', '0', '1', '0', '0', '中国', '5');
INSERT INTO `user` VALUES ('20037', 'a', 'a', 'Donna', 'http://192.168.0.105:3000/public/images/1.jpg', '2', '0', '0', '2', '0', '0', '深圳', '0');
INSERT INTO `user` VALUES ('20038', 'b', 'b', '球球', 'http://192.168.0.105:3000/public/images/2.jpg', '2', '20', '0', '1', '0', '0', '广州', '0');
INSERT INTO `user` VALUES ('20039', 'c', 'c', '飞人', 'http://192.168.0.105:3000/public/images/3.jpg', '1', '0', '0', '1', '0', '0', '汕头', '0');
INSERT INTO `user` VALUES ('20040', 'd', 'd', '嘎嘎', 'http://192.168.0.105:3000/public/images/4.jpg', '1', '0', '0', '0', '6', '9', '济南', '0');
INSERT INTO `user` VALUES ('20041', 'e', 'e', 'e', 'http://192.168.0.105:3000/public/images/5.jpg', '1', '0', '0', '0', '0', '0', '厦门', '0');
INSERT INTO `user` VALUES ('20042', 'f', 'f', 'f', 'http://192.168.0.105:3000/public/images/6.jpg', '1', '0', '0', '0', '0', '0', '海南', '0');
INSERT INTO `user` VALUES ('20043', 'g', 'g', 'g', 'http://192.168.0.105:3000/public/images/14.jpg', '1', '0', '0', '0', '0', '0', '青岛', '0');
INSERT INTO `user` VALUES ('20044', 'h', 'h', 'h', 'http://192.168.0.105:3000/public/images/20.jpg', '1', '0', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20045', 'I', 'I', 'I', 'http://192.168.0.105:3000/public/images/21.jpg', '1', '0', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20046', 'j', 'j', 'j', 'http://192.168.0.105:3000/public/images/22.jpg', '1', '0', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20047', 'k', 'k', 'k', 'http://192.168.0.105:3000/public/images/24.jpg', '1', '0', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20048', 'z', 'z', 'z', 'http://192.168.0.105:3000/public/images/25.jpg', '1', '0', '0', '0', '0', '0', '中国', '0');
