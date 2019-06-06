/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) NOT NULL,
  `enterpriseId` int(10) DEFAULT NULL,
  `publishId` int(10) DEFAULT NULL,
  `game` char(10) DEFAULT NULL,
  `number` int(10) DEFAULT NULL,
  `money` int(10) DEFAULT NULL,
  `remarks` char(50) DEFAULT '无',
  `time` char(10) DEFAULT NULL,
  `updateTime` char(50) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=80034 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('80026', '20002', '20030', '13', '王者荣耀', '1', '5', '无', '12:01', '1559650981192');
INSERT INTO `orders` VALUES ('80027', '20002', '20035', '17', '和平精英', '10', '5', '无', '12:01', '1559654115127');
INSERT INTO `orders` VALUES ('80028', '20002', '20035', '17', '和平精英', '100', '5', '无', '12:01', '1559654124502');
INSERT INTO `orders` VALUES ('80029', '20002', '20035', '18', '第五人格', '10', '5', '尽快上线', '12:01', '1559708591595');
INSERT INTO `orders` VALUES ('80030', '20002', '20036', '20', 'LOL', '1', '5', '无', '12:01', '1559708632395');
INSERT INTO `orders` VALUES ('80031', '20002', '20035', '16', '王者荣耀', '10', '5', '无', '12:01', '1559708740619');
INSERT INTO `orders` VALUES ('80032', '20002', '20030', '13', '王者荣耀', '1', '5', '无', '12:01', '1559727142429');
INSERT INTO `orders` VALUES ('80033', '20035', '20030', '13', '王者荣耀', '1', '5', '无', '12:01', '1559824503909');
