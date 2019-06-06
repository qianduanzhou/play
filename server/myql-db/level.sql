/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:27
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `level`
-- ----------------------------
DROP TABLE IF EXISTS `level`;
CREATE TABLE `level` (
  `id` int(10) NOT NULL,
  `gameId` int(10) NOT NULL,
  `name` char(20) DEFAULT NULL,
  `gameName` char(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of level
-- ----------------------------
INSERT INTO `level` VALUES ('10000', '1001', '倔强青铜', '王者荣耀');
INSERT INTO `level` VALUES ('10001', '1001', '秩序白银', '王者荣耀');
INSERT INTO `level` VALUES ('10002', '1001', '荣耀黄金', '王者荣耀');
INSERT INTO `level` VALUES ('10003', '1001', '尊贵铂金', '王者荣耀');
INSERT INTO `level` VALUES ('10004', '1001', '永恒钻石', '王者荣耀');
INSERT INTO `level` VALUES ('10005', '1001', '至尊星耀', '王者荣耀');
INSERT INTO `level` VALUES ('10006', '1001', '最强王者', '王者荣耀');
INSERT INTO `level` VALUES ('10007', '1001', '荣耀王者', '王者荣耀');
INSERT INTO `level` VALUES ('10008', '1002', '青铜', '和平精英');
INSERT INTO `level` VALUES ('10009', '1002', '白银', '和平精英');
INSERT INTO `level` VALUES ('10010', '1002', '黄金', '和平精英');
INSERT INTO `level` VALUES ('10011', '1002', '白金', '和平精英');
INSERT INTO `level` VALUES ('10012', '1002', '不朽星钻', '和平精英');
INSERT INTO `level` VALUES ('10013', '1002', '荣耀皇冠', '和平精英');
INSERT INTO `level` VALUES ('10014', '1002', '超级王牌', '和平精英');
INSERT INTO `level` VALUES ('10015', '1002', '无敌战神', '和平精英');
INSERT INTO `level` VALUES ('10016', '1006', '铁', 'LOL');
INSERT INTO `level` VALUES ('10017', '1006', '青铜', 'LOL');
INSERT INTO `level` VALUES ('10018', '1006', '白银', 'LOL');
INSERT INTO `level` VALUES ('10019', '1006', '黄金', 'LOL');
INSERT INTO `level` VALUES ('10020', '1006', '铂金', 'LOL');
INSERT INTO `level` VALUES ('10021', '1006', '钻石', 'LOL');
INSERT INTO `level` VALUES ('10022', '1006', '超凡大师', 'LOL');
INSERT INTO `level` VALUES ('10023', '1006', '杰出大师', 'LOL');
INSERT INTO `level` VALUES ('10024', '1006', '最强王者', 'LOL');
