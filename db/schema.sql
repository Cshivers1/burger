DROP database IF EXISTS burger_db;
CREATE database burger_db;
USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	burgers BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
