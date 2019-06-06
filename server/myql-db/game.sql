/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:21
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `game`
-- ----------------------------
DROP TABLE IF EXISTS `game`;
CREATE TABLE `game` (
  `id` int(6) NOT NULL AUTO_INCREMENT,
  `name` char(10) NOT NULL,
  `picUrl` char(100) NOT NULL,
  `type` int(3) NOT NULL,
  `hot` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1022 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of game
-- ----------------------------
INSERT INTO `game` VALUES ('1001', '王者荣耀', '/images/wanze.png', '1', '1');
INSERT INTO `game` VALUES ('1002', '和平精英', '/images/heping.jpg', '1', '1');
INSERT INTO `game` VALUES ('1003', '第五人格', '/images/5.png', '1', '1');
INSERT INTO `game` VALUES ('1004', 'QQ飞车', '/images/feiche.png', '1', '0');
INSERT INTO `game` VALUES ('1005', '球球大作战', '/images/qiuqiu.png', '1', '0');
INSERT INTO `game` VALUES ('1006', 'LOL', '/images/lol.png', '2', '1');
INSERT INTO `game` VALUES ('1007', '绝地求生', '/images/pubg.png', '2', '1');
INSERT INTO `game` VALUES ('1008', 'APEX英雄', '/images/apex.png', '2', '0');
INSERT INTO `game` VALUES ('1009', '刀塔2', '/images/daota.png', '2', '0');
INSERT INTO `game` VALUES ('1010', '守望先锋', '/images/swxf.png', '2', '0');
INSERT INTO `game` VALUES ('1011', '穿越火线', '/images/cf.png', '2', '0');
INSERT INTO `game` VALUES ('1012', 'CS', '/images/cs.png', '2', '0');
INSERT INTO `game` VALUES ('1013', '堡垒之夜', '/images/baolei.png', '2', '0');
INSERT INTO `game` VALUES ('1014', '音乐', '/images/music.png', '3', '1');
INSERT INTO `game` VALUES ('1015', '叫醒', '/images/jiaoxin.png', '3', '0');
INSERT INTO `game` VALUES ('1016', '小游戏', '/images/littlegame.png', '3', '1');
INSERT INTO `game` VALUES ('1017', '声音鉴定', '/images/sound.png', '3', '0');
INSERT INTO `game` VALUES ('1018', '配音', '/images/peiyin.png', '3', '0');
INSERT INTO `game` VALUES ('1019', '心理咨询', '/images/heard.png', '4', '1');
INSERT INTO `game` VALUES ('1020', '手绘', '/images/hard.png', '5', '0');
INSERT INTO `game` VALUES ('1021', 'PS', '/images/ps.png', '5', '1');
