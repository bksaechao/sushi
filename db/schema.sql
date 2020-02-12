DROP DATABASE IF EXISTS sushi_db;

CREATE DATABASE sushi_db;

USE sushi_db;

CREATE TABLE sushi (
    id INTEGER NOT NULL AUTO_INCREMENT,
    sushi_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);