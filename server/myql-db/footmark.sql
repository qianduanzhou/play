/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-06 21:00:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `footmark`
-- ----------------------------
DROP TABLE IF EXISTS `footmark`;
CREATE TABLE `footmark` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `userId` int(10) NOT NULL,
  `enterpriseId` int(10) NOT NULL,
  `game` char(10) NOT NULL,
  `updateTime` char(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=60037 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of footmark
-- ----------------------------
INSERT INTO `footmark` VALUES ('60008', '20002', '20030', '王者荣耀', '1559724148295');
INSERT INTO `footmark` VALUES ('60009', '20002', '20031', '王者荣耀', '1559704165308');
INSERT INTO `footmark` VALUES ('60010', '20002', '20034', '王者荣耀', '1559023963948');
INSERT INTO `footmark` VALUES ('60011', '20002', '20035', '王者荣耀', '1550704165308');
INSERT INTO `footmark` VALUES ('60012', '20002', '20030', '王者荣耀', '1559725933287');
INSERT INTO `footmark` VALUES ('60013', '20002', '20031', '王者荣耀', '1559725936696');
INSERT INTO `footmark` VALUES ('60014', '20035', '20002', '王者荣耀', '1559734001682');
INSERT INTO `footmark` VALUES ('60015', '20035', '20030', '王者荣耀', '1559735981476');
INSERT INTO `footmark` VALUES ('60016', '20035', '20030', '王者荣耀', '1559736063693');
INSERT INTO `footmark` VALUES ('60017', '20035', '20034', '王者荣耀', '1559736102704');
INSERT INTO `footmark` VALUES ('60018', '20035', '20030', '王者荣耀', '1559736127274');
INSERT INTO `footmark` VALUES ('60019', '20035', '20030', '王者荣耀', '1559736194422');
INSERT INTO `footmark` VALUES ('60020', '20035', '20034', '王者荣耀', '1559736284726');
INSERT INTO `footmark` VALUES ('60021', '20035', '20002', '王者荣耀', '1559736392063');
INSERT INTO `footmark` VALUES ('60022', '20035', '20034', '王者荣耀', '1559736402660');
INSERT INTO `footmark` VALUES ('60023', '20035', '20030', '王者荣耀', '1559736569243');
INSERT INTO `footmark` VALUES ('60031', '20035', '20002', '王者荣耀', '1559823371067');
INSERT INTO `footmark` VALUES ('60032', '20035', '20002', '王者荣耀', '1559823393698');
INSERT INTO `footmark` VALUES ('60033', '20035', '20030', '王者荣耀', '1559824454442');
INSERT INTO `footmark` VALUES ('60034', '20035', '20030', '王者荣耀', '1559824477711');
