/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `message`
-- ----------------------------
DROP TABLE IF EXISTS `message`;
CREATE TABLE `message` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) DEFAULT NULL,
  `enterpriseId` int(20) DEFAULT NULL,
  `type` char(30) DEFAULT NULL,
  `updateTime` char(30) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6036 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of message
-- ----------------------------
INSERT INTO `message` VALUES ('6007', '20035', '20034', '访问', '1559736284726');
INSERT INTO `message` VALUES ('6008', '20035', '20002', '访问', '1559736392063');
INSERT INTO `message` VALUES ('6009', '20035', '20034', '访问', '1559736402660');
INSERT INTO `message` VALUES ('6011', '20030', '20002', '访问', '1559796823870');
INSERT INTO `message` VALUES ('6012', '20030', '20034', '访问', '1559811130195');
INSERT INTO `message` VALUES ('6013', '20030', '20035', '访问', '1559811135982');
INSERT INTO `message` VALUES ('6014', '20030', '20034', '访问', '1559811140021');
INSERT INTO `message` VALUES ('6015', '20030', '20036', '访问', '1559811148866');
INSERT INTO `message` VALUES ('6016', '20030', '20034', '访问', '1559811155985');
INSERT INTO `message` VALUES ('6017', '20030', '20002', '访问', '1559820644787');
INSERT INTO `message` VALUES ('6018', '20030', '20035', '关注', '1559822909843');
INSERT INTO `message` VALUES ('6019', '20030', '20035', '关注', '1559822952846');
INSERT INTO `message` VALUES ('6020', '20030', '20035', '取消关注', '1559823041056');
INSERT INTO `message` VALUES ('6021', '20035', '20002', '访问', '1559823371067');
INSERT INTO `message` VALUES ('6022', '20035', '20002', '关注', '1559823372237');
INSERT INTO `message` VALUES ('6023', '20035', '20002', '访问', '1559823393698');
INSERT INTO `message` VALUES ('6024', '20035', '20002', '取消关注', '1559823394852');
INSERT INTO `message` VALUES ('6034', '20030', '20002', '访问', '1559825703521');
INSERT INTO `message` VALUES ('6035', '20030', '20035', '访问', '1559825713451');
