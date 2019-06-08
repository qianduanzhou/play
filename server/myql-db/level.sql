/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50610
Source Host           : localhost:3306
Source Database       : play

Target Server Type    : MYSQL
Target Server Version : 50610
File Encoding         : 65001

Date: 2019-06-08 17:37:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `level`
-- ----------------------------
DROP TABLE IF EXISTS `level`;
CREATE TABLE `level` (
  `id` int(10) NOT NULL,
  `gameId` int(10) DEFAULT NULL,
  `name` char(20) DEFAULT NULL,
  `gameName` char(20) DEFAULT NULL,
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
INSERT INTO `level` VALUES ('10025', '1003', '求生者一阶', '第五人格');
INSERT INTO `level` VALUES ('10026', '1003', '求生者二阶', '第五人格');
INSERT INTO `level` VALUES ('10027', '1003', '求生者三阶', '第五人格');
INSERT INTO `level` VALUES ('10028', '1003', '求生者四阶', '第五人格');
INSERT INTO `level` VALUES ('10029', '1003', '求生者五阶', '第五人格');
INSERT INTO `level` VALUES ('10030', '1003', '求生者六阶', '第五人格');
INSERT INTO `level` VALUES ('10031', '1003', '监管者一阶', '第五人格');
INSERT INTO `level` VALUES ('10032', '1003', '监管者二阶', '第五人格');
INSERT INTO `level` VALUES ('10033', '1003', '监管者三阶', '第五人格');
INSERT INTO `level` VALUES ('10034', '1003', '监管者四阶', '第五人格');
INSERT INTO `level` VALUES ('10035', '1003', '监管者五阶', '第五人格');
INSERT INTO `level` VALUES ('10036', '1003', '监管者六阶', '第五人格');
INSERT INTO `level` VALUES ('10037', '1004', '热门青铜', 'QQ飞车');
INSERT INTO `level` VALUES ('10038', '1004', '迅捷白银', 'QQ飞车');
INSERT INTO `level` VALUES ('10039', '1004', '疾风黄金', 'QQ飞车');
INSERT INTO `level` VALUES ('10040', '1004', '幻影铂金', 'QQ飞车');
INSERT INTO `level` VALUES ('10041', '1004', '流星钻石', 'QQ飞车');
INSERT INTO `level` VALUES ('10042', '1004', '绝影星耀', 'QQ飞车');
INSERT INTO `level` VALUES ('10043', '1004', '最强车神', 'QQ飞车');
INSERT INTO `level` VALUES ('10044', '1004', '传奇车神', 'QQ飞车');
INSERT INTO `level` VALUES ('10045', '1005', '青铜', '球球大作战');
INSERT INTO `level` VALUES ('10046', '1005', '白银', '球球大作战');
INSERT INTO `level` VALUES ('10047', '1005', '黄金', '球球大作战');
INSERT INTO `level` VALUES ('10048', '1005', '铂金', '球球大作战');
INSERT INTO `level` VALUES ('10049', '1005', '钻石', '球球大作战');
INSERT INTO `level` VALUES ('10050', '1005', '大师', '球球大作战');
INSERT INTO `level` VALUES ('10051', '1005', '王者', '球球大作战');
INSERT INTO `level` VALUES ('10052', '1005', '超神', '球球大作战');
INSERT INTO `level` VALUES ('10053', '1007', '青铜', '绝地求生');
INSERT INTO `level` VALUES ('10054', '1007', '白银', '绝地求生');
INSERT INTO `level` VALUES ('10055', '1007', '黄金', '绝地求生');
INSERT INTO `level` VALUES ('10056', '1007', '铂金', '绝地求生');
INSERT INTO `level` VALUES ('10057', '1007', '钻石', '绝地求生');
INSERT INTO `level` VALUES ('10058', '1007', '精英', '绝地求生');
INSERT INTO `level` VALUES ('10059', '1007', '大师', '绝地求生');
INSERT INTO `level` VALUES ('10060', '1007', '宗师', '绝地求生');
INSERT INTO `level` VALUES ('10061', '1009', '先锋', '刀塔2');
INSERT INTO `level` VALUES ('10062', '1009', '卫士', '刀塔2');
INSERT INTO `level` VALUES ('10063', '1009', '十字军', '刀塔2');
INSERT INTO `level` VALUES ('10064', '1009', '执政官', '刀塔2');
INSERT INTO `level` VALUES ('10065', '1009', '一代传奇', '刀塔2');
INSERT INTO `level` VALUES ('10066', '1009', '万古流芳', '刀塔2');
INSERT INTO `level` VALUES ('10067', '1009', '超凡入圣', '刀塔2');
INSERT INTO `level` VALUES ('10068', '1010', '青铜', '守望先锋');
INSERT INTO `level` VALUES ('10069', '1010', '白银', '守望先锋');
INSERT INTO `level` VALUES ('10070', '1010', '黄金', '守望先锋');
INSERT INTO `level` VALUES ('10071', '1010', '铂金', '守望先锋');
INSERT INTO `level` VALUES ('10072', '1010', '钻石', '守望先锋');
INSERT INTO `level` VALUES ('10073', '1010', '大师', '守望先锋');
INSERT INTO `level` VALUES ('10074', '1010', '宗师', '守望先锋');
INSERT INTO `level` VALUES ('10075', '1011', '新锐', '穿越火线');
INSERT INTO `level` VALUES ('10076', '1011', '精英', '穿越火线');
INSERT INTO `level` VALUES ('10077', '1011', '专家', '穿越火线');
INSERT INTO `level` VALUES ('10078', '1011', '大师', '穿越火线');
INSERT INTO `level` VALUES ('10079', '1011', '枪王', '穿越火线');
