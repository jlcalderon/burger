/* Create the database */
DROP DATABASE IF EXISTS `burgers_db`;
CREATE DATABASE `burgers_db`;
USE `burgers_db`;
/* Create the table */
CREATE TABLE `burgers` (
    `id` Int(11) AUTO_INCREMENT NOT NULL,
    `name` VARCHAR(245) NOT NULL,
    `devoured` BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(`id`)
);
