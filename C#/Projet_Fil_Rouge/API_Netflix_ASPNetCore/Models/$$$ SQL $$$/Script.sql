﻿DROP TABLE CATEGORIE;
DROP TABLE REALISATEUR;
DROP TABLE ACTEUR;
DROP TABLE FILM;
DROP TABLE SERIE;

CREATE TABLE  CATEGORIE 
(   
-------------- Création table CATEGORIE   --------------
ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
NOMCATEGORIE VARCHAR(50) NOT NULL
 );

 CREATE TABLE REALISATEUR
 (
 -------------- Création table REALISATEUR --------------
 ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
 NOMREAL VARCHAR (50) NOT NULL,
 PRENOMREAL VARCHAR (50) NOT NULL,
);


CREATE TABLE ACTEUR
(
 -------------- Création table ACTEUR --------------
 ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
 NOMACTEUR VARCHAR (50) NOT NULL,
 PRENOMACTEUR VARCHAR (50) NOT NULL,
);

CREATE TABLE FILM
(
 -------------- Création table FILM --------------
 ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
 TITRE VARCHAR(50) NOT NULL,
 DUREE INT NOT NULL,
 DATESORTIE DATETIME NOT NULL,
 SYNOPSYS VARCHAR(250) NOT NULL,
 CATEGORIE_ID INT NOT NULL,
 ACTEUR_ID INT NOT NULL,
 REALISATEUR_ID INT NOT NULL,
);

CREATE TABLE SERIE
(
 -------------- Création table SERIE --------------
 ID INT IDENTITY(1,1) NOT NULL PRIMARY KEY,
 TITRE VARCHAR(50) NOT NULL,
 NBEPISODES INT NOT NULL,
 DATESORTIE DATETIME NOT NULL,
 SYNOPSYS VARCHAR(250) NOT NULL,
 CATEGORIE_ID INT NOT NULL,
 ACTEUR_ID INT NOT NULL,
 REALISATEUR_ID INT NOT NULL,
 RECOMMANDATION INT NOT NULL,
);