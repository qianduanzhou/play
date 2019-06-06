/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:45
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `publishlist`
-- ----------------------------
DROP TABLE IF EXISTS `publishlist`;
CREATE TABLE `publishlist` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) NOT NULL,
  `game` char(20) NOT NULL,
  `gameType` char(20) NOT NULL,
  `level` char(20) DEFAULT NULL,
  `moneyType` char(10) DEFAULT NULL,
  `moneyNum` char(10) DEFAULT NULL,
  `introduction` char(30) DEFAULT NULL,
  `updateTime` char(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of publishlist
-- ----------------------------
INSERT INTO `publishlist` VALUES ('10', '20002', 'LOL', '端游', '杰出大师', '每局', '5币', '不错不错', '1559478553690');
INSERT INTO `publishlist` VALUES ('11', '20002', '王者荣耀', '手游', '尊贵铂金', '每局', '20币', '铂金大佬带你们躺', '1559566697956');
INSERT INTO `publishlist` VALUES ('12', '20002', '和平精英', '手游', '白金', '每局', '5币', '最强枪神', '1559566735374');
INSERT INTO `publishlist` VALUES ('13', '20030', '王者荣耀', '手游', '倔强青铜', '每局', '5币', '', '1559486398112');
INSERT INTO `publishlist` VALUES ('14', '20031', '王者荣耀', '手游', '永恒钻石', '每局', '30币', '', '1559541214224');
INSERT INTO `publishlist` VALUES ('15', '20034', '王者荣耀', '手游', '倔强青铜', '每局', '15币', '', '1559560932267');
INSERT INTO `publishlist` VALUES ('16', '20035', '王者荣耀', '手游', '倔强青铜', '每局', '5币', '最强青铜在线掉分', '1559560887331');
INSERT INTO `publishlist` VALUES ('17', '20035', '和平精英', '手游', '青铜', '每局', '5币', '', '1559561511713');
INSERT INTO `publishlist` VALUES ('18', '20035', '第五人格', '手游', '无段位', '每局', '5币', '', '1559561596004');
INSERT INTO `publishlist` VALUES ('20', '20036', 'LOL', '端游', '铁', '每局', '5币', 'wert', '1559567492963');
INSERT INTO `publishlist` VALUES ('21', '20036', '和平精英', '手游', '青铜', '每局', '5币', '', '1559567683400');
INSERT INTO `publishlist` VALUES ('22', '20002', 'QQ飞车', '手游', '无段位', '每局', '5币', '', '1559725898700');
