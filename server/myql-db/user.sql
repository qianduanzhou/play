/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:50
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
) ENGINE=InnoDB AUTO_INCREMENT=20037 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('20001', '123456', '123456', 'mike', '3.png', '2', '30', '0', '0', '0', '0', '中国', '0');
INSERT INTO `user` VALUES ('20002', 'root', 'root', 'root', '/images/error.png', '1', '22', '50', '1', '0', '22', '中国', '320');
INSERT INTO `user` VALUES ('20030', 'wx04972a9c0769de54', 'wx04972a9c0769de54', '泓滨', 'https://wx.qlogo.cn/mmopen/vi_32/3aTsNa0ytrWAGIiaUoJrarMTtfQKlXJXGUcf4mFRYMw4VHp1CZIUNpyjczau5JlPicNUQBkXmyEjjN9apr5KPw7w/132', '1', '22', '2', '1', '3', '0', '中国', '30');
INSERT INTO `user` VALUES ('20034', '1234', '1234', '1234', '/images/personal.png', '1', '0', '100', '1', '50', '0', '中国', '0');
INSERT INTO `user` VALUES ('20035', 'test', '123', 'test11111111', '/images/personal.png', '1', '0', '1000', '0', '1', '16', '中国', '645');
INSERT INTO `user` VALUES ('20036', 'aaaa', 'aaaa', 'aaaa', '/images/personal.png', '0', '0', '0', '1', '0', '0', '中国', '5');
