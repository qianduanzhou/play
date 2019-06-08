/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-08 17:38:14
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
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of publishlist
-- ----------------------------
INSERT INTO `publishlist` VALUES ('10', '20002', 'LOL', '端游', '杰出大师', '每局', '5币', '不错不错', '1559478553690');
INSERT INTO `publishlist` VALUES ('11', '20002', '王者荣耀', '手游', '尊贵铂金', '每局', '20币', '铂金大佬带你们躺', '1559566697956');
INSERT INTO `publishlist` VALUES ('12', '20002', '和平精英', '手游', '白金', '每局', '5币', '最强枪神', '1559566735374');
INSERT INTO `publishlist` VALUES ('15', '20034', '王者荣耀', '手游', '倔强青铜', '每局', '15币', '', '1559560932267');
INSERT INTO `publishlist` VALUES ('16', '20035', '王者荣耀', '手游', '倔强青铜', '每局', '5币', '最强青铜在线掉分', '1559560887331');
INSERT INTO `publishlist` VALUES ('17', '20035', '和平精英', '手游', '青铜', '每局', '5币', '', '1559561511713');
INSERT INTO `publishlist` VALUES ('18', '20035', '第五人格', '手游', '无段位', '每局', '5币', '', '1559561596004');
INSERT INTO `publishlist` VALUES ('20', '20036', 'LOL', '端游', '铁', '每局', '5币', 'wert', '1559567492963');
INSERT INTO `publishlist` VALUES ('21', '20036', '和平精英', '手游', '青铜', '每局', '5币', '', '1559567683400');
INSERT INTO `publishlist` VALUES ('22', '20002', 'QQ飞车', '手游', '无段位', '每局', '5币', '', '1559725898700');
INSERT INTO `publishlist` VALUES ('29', '20030', '王者荣耀', '手游', '荣耀王者', '每局', '20币', '荣耀70星在线带躺', '1559985224383');
INSERT INTO `publishlist` VALUES ('30', '20030', '和平精英', '手游', '超级王牌', '每局', '15币', '无敌98k在线秒人', '1559985243325');
INSERT INTO `publishlist` VALUES ('31', '20030', 'LOL', '端游', '最强王者', '每小时', '40币', '最强王者带你飞', '1559985286938');
INSERT INTO `publishlist` VALUES ('32', '20030', '球球大作战', '手游', '超神', '每局', '20币', '超神带你飞', '1559985364778');
INSERT INTO `publishlist` VALUES ('33', '20037', '王者荣耀', '手游', '永恒钻石', '每局', '5币', '永恒钻石，永恒的钻石0.0', '1559985481466');
INSERT INTO `publishlist` VALUES ('34', '20037', '和平精英', '手游', '白金', '每局', '10币', '无敌小白金', '1559985512801');
INSERT INTO `publishlist` VALUES ('35', '20037', 'APEX英雄', '端游', '无段位', '每局', '10币', '哈哈哈', '1559985536608');
INSERT INTO `publishlist` VALUES ('36', '20037', '音乐', '娱乐', '无段位', '每小时', '30币', '歌神和你一起唱', '1559985559912');
INSERT INTO `publishlist` VALUES ('37', '20037', '小游戏', '娱乐', '无段位', '每小时', '30币', '一起来玩小游戏', '1559985574370');
INSERT INTO `publishlist` VALUES ('38', '20037', '心理咨询', '心理咨询', '无段位', '每小时', '20币', '说出你的烦恼', '1559985607089');
INSERT INTO `publishlist` VALUES ('39', '20037', 'PS', '文艺生活', '无段位', '每小时', '30币', 'p图大神，成就你的梦想', '1559985637146');
INSERT INTO `publishlist` VALUES ('40', '20037', '刀塔2', '端游', '万古流芳', '每局', '20币', '无敌', '1559985661825');
INSERT INTO `publishlist` VALUES ('41', '20038', '王者荣耀', '手游', '最强王者', '每局', '20币', '元气满满', '1559985892994');
INSERT INTO `publishlist` VALUES ('42', '20038', '和平精英', '手游', '超级王牌', '每局', '20币', '元气满满', '1559985901940');
INSERT INTO `publishlist` VALUES ('43', '20038', 'LOL', '端游', '钻石', '每局', '20币', '元气满满', '1559985909009');
INSERT INTO `publishlist` VALUES ('44', '20038', '音乐', '娱乐', '无段位', '每局', '20币', '元气满满', '1559985915275');
INSERT INTO `publishlist` VALUES ('45', '20038', '心理咨询', '心理咨询', '无段位', '每小时', '20币', '元气满满', '1559985926377');
INSERT INTO `publishlist` VALUES ('46', '20038', '手绘', '文艺生活', '无段位', '每小时', '20币', '元气满满', '1559985932600');
INSERT INTO `publishlist` VALUES ('47', '20039', '王者荣耀', '手游', '最强王者', '每局', '15币', '最强王者带飞咯', '1559985978646');
INSERT INTO `publishlist` VALUES ('48', '20039', '和平精英', '手游', '无敌战神', '每局', '15币', '无敌战神带飞咯', '1559985992359');
INSERT INTO `publishlist` VALUES ('49', '20039', '第五人格', '手游', '监管者四阶', '每局', '15币', '带飞~~~', '1559986008128');
INSERT INTO `publishlist` VALUES ('50', '20039', 'QQ飞车', '手游', '绝影星耀', '每局', '15币', '带飞~~~', '1559986023689');
INSERT INTO `publishlist` VALUES ('51', '20039', '球球大作战', '手游', '超神', '每局', '15币', '带飞~~~', '1559986030904');
INSERT INTO `publishlist` VALUES ('52', '20039', '绝地求生', '端游', '大师', '每局', '15币', '带飞~~~', '1559986039480');
INSERT INTO `publishlist` VALUES ('53', '20039', '刀塔2', '端游', '万古流芳', '每局', '15币', '带飞~~~', '1559986048511');
