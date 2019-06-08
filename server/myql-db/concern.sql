/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-08 17:37:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `concern`
-- ----------------------------
DROP TABLE IF EXISTS `concern`;
CREATE TABLE `concern` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) DEFAULT NULL,
  `enterpriseId` int(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3062 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of concern
-- ----------------------------
INSERT INTO `concern` VALUES ('3049', '20035', '20002');
INSERT INTO `concern` VALUES ('3050', '20035', '20030');
INSERT INTO `concern` VALUES ('3051', '20035', '20034');
INSERT INTO `concern` VALUES ('3052', '20002', '20030');
INSERT INTO `concern` VALUES ('3053', '20040', '20002');
INSERT INTO `concern` VALUES ('3054', '20040', '20034');
INSERT INTO `concern` VALUES ('3055', '20040', '20035');
INSERT INTO `concern` VALUES ('3056', '20040', '20030');
INSERT INTO `concern` VALUES ('3057', '20040', '20037');
INSERT INTO `concern` VALUES ('3058', '20040', '20036');
INSERT INTO `concern` VALUES ('3059', '20035', '20037');
INSERT INTO `concern` VALUES ('3060', '20035', '20038');
INSERT INTO `concern` VALUES ('3061', '20035', '20039');
