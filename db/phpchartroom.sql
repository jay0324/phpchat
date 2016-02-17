-- phpMyAdmin SQL Dump
-- version 2.10.3
-- http://www.phpmyadmin.net
-- 
-- 主機: localhost
-- 建立日期: Feb 17, 2016, 09:37 AM
-- 伺服器版本: 5.0.51
-- PHP 版本: 5.2.6

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";

-- 
-- 資料庫: `phpchartroom`
-- 

-- --------------------------------------------------------

-- 
-- 資料表格式： `chartlist`
-- 

CREATE TABLE `chartlist` (
  `chart_id` varchar(200) NOT NULL,
  `chart_content` longtext NOT NULL,
  PRIMARY KEY  (`chart_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- 列出以下資料庫的數據： `chartlist`
-- 


-- --------------------------------------------------------

-- 
-- 資料表格式： `friendlist`
-- 

CREATE TABLE `friendlist` (
  `username` varchar(200) NOT NULL,
  `list` longtext NOT NULL,
  PRIMARY KEY  (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- 列出以下資料庫的數據： `friendlist`
-- 


-- --------------------------------------------------------

-- 
-- 資料表格式： `user`
-- 

CREATE TABLE `user` (
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(200) NOT NULL,
  `state` int(11) NOT NULL default '1',
  PRIMARY KEY  (`username`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- 
-- 列出以下資料庫的數據： `user`
-- 

INSERT INTO `user` VALUES ('test', '098f6bcd4621d373cade4e832627b4f6', '測試人', 1);
INSERT INTO `user` VALUES ('test2', '098f6bcd4621d373cade4e832627b4f6', '測試人2', 1);
INSERT INTO `user` VALUES ('test3', '098f6bcd4621d373cade4e832627b4f6', '測試人三', 1);
INSERT INTO `user` VALUES ('test4', '098f6bcd4621d373cade4e832627b4f6', '測試人四', 1);
