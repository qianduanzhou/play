/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-08 17:37:37
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
) ENGINE=InnoDB AUTO_INCREMENT=60075 DEFAULT CHARSET=utf8;

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
INSERT INTO `footmark` VALUES ('60035', '20030', '20002', '王者荣耀', '1559899321290');
INSERT INTO `footmark` VALUES ('60036', '20030', '20002', '王者荣耀', '1559914648468');
INSERT INTO `footmark` VALUES ('60037', '20030', '20002', '王者荣耀', '1559914668257');
INSERT INTO `footmark` VALUES ('60038', '20030', '20002', '王者荣耀', '1559962415486');
INSERT INTO `footmark` VALUES ('60039', '20030', '20002', '王者荣耀', '1559962515095');
INSERT INTO `footmark` VALUES ('60040', '20030', '20034', '王者荣耀', '1559962543145');
INSERT INTO `footmark` VALUES ('60041', '20030', '20002', '王者荣耀', '1559962636375');
INSERT INTO `footmark` VALUES ('60042', '20030', '20002', '王者荣耀', '1559962659725');
INSERT INTO `footmark` VALUES ('60043', '20030', '20002', '王者荣耀', '1559967930452');
INSERT INTO `footmark` VALUES ('60044', '20030', '20002', '王者荣耀', '1559969408504');
INSERT INTO `footmark` VALUES ('60045', '20030', '20034', '王者荣耀', '1559969437772');
INSERT INTO `footmark` VALUES ('60046', '20030', '20002', '王者荣耀', '1559970613696');
INSERT INTO `footmark` VALUES ('60047', '20030', '20002', '王者荣耀', '1559971438029');
INSERT INTO `footmark` VALUES ('60048', '20030', '20034', '王者荣耀', '1559971464389');
INSERT INTO `footmark` VALUES ('60049', '20030', '20035', '王者荣耀', '1559971473836');
INSERT INTO `footmark` VALUES ('60050', '20030', '20034', '王者荣耀', '1559971477173');
INSERT INTO `footmark` VALUES ('60051', '20035', '20002', '王者荣耀', '1559972071674');
INSERT INTO `footmark` VALUES ('60052', '20035', '20030', '王者荣耀', '1559972074277');
INSERT INTO `footmark` VALUES ('60053', '20035', '20034', '王者荣耀', '1559972077603');
INSERT INTO `footmark` VALUES ('60054', '20002', '20030', '王者荣耀', '1559974068998');
INSERT INTO `footmark` VALUES ('60055', '20030', '20002', '王者荣耀', '1559980102080');
INSERT INTO `footmark` VALUES ('60056', '20030', '20002', '和平精英', '1559980114713');
INSERT INTO `footmark` VALUES ('60057', '20040', '20002', '王者荣耀', '1559986187390');
INSERT INTO `footmark` VALUES ('60058', '20040', '20034', '王者荣耀', '1559986190344');
INSERT INTO `footmark` VALUES ('60059', '20040', '20035', '王者荣耀', '1559986192687');
INSERT INTO `footmark` VALUES ('60060', '20040', '20030', '王者荣耀', '1559986195250');
INSERT INTO `footmark` VALUES ('60061', '20040', '20037', '王者荣耀', '1559986197728');
INSERT INTO `footmark` VALUES ('60062', '20040', '20038', '王者荣耀', '1559986200649');
INSERT INTO `footmark` VALUES ('60063', '20040', '20002', 'LOL', '1559986244077');
INSERT INTO `footmark` VALUES ('60064', '20040', '20036', 'LOL', '1559986247169');
INSERT INTO `footmark` VALUES ('60065', '20040', '20037', 'PS', '1559986258997');
INSERT INTO `footmark` VALUES ('60066', '20035', '20030', '王者荣耀', '1559986416875');
INSERT INTO `footmark` VALUES ('60067', '20035', '20002', '王者荣耀', '1559986419343');
INSERT INTO `footmark` VALUES ('60068', '20035', '20034', '王者荣耀', '1559986421704');
INSERT INTO `footmark` VALUES ('60069', '20035', '20037', '王者荣耀', '1559986423800');
INSERT INTO `footmark` VALUES ('60070', '20035', '20038', '王者荣耀', '1559986427391');
INSERT INTO `footmark` VALUES ('60071', '20035', '20039', '王者荣耀', '1559986430075');
INSERT INTO `footmark` VALUES ('60072', '20035', '20002', '和平精英', '1559986444238');
INSERT INTO `footmark` VALUES ('60073', '20035', '20037', '和平精英', '1559986448067');
INSERT INTO `footmark` VALUES ('60074', '20035', '20030', '和平精英', '1559986452577');
