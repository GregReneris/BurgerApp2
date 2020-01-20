### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE kitchen
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
