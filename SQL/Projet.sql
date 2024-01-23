DROP DATABASE IF EXISTS lotrquizz;
CREATE DATABASE IF NOT EXISTS lotrquizz;
USE lotrquizz;

-- Table des Utilisateurs
CREATE TABLE utilisateurs(
    id_utilisateur INT PRIMARY KEY AUTO_INCREMENT,
    pseudo_utilisateur VARCHAR(50) NOT NULL,
    email_utilisateur VARCHAR(50) NOT NULL,
    mot_de_passe_utilisateur VARCHAR(50) NOT NULL,
    photo_profil_utilisateur VARCHAR(255),
    jeton_dessin_utilisateur INT
) Engine=InnoDB ;

-- Table des Quizz
CREATE TABLE quizz (
    id_quizz INT PRIMARY KEY AUTO_INCREMENT,
    difficulte_quizz INT NOT NULL,
    id_admin INT,
    FOREIGN KEY (id_admin) REFERENCES utilisateurs(id_utilisateur)
) Engine=InnoDB ;

-- Table des Questions
CREATE TABLE questions (
    id_question INT PRIMARY KEY AUTO_INCREMENT,
    texte_question TEXT NOT NULL,
    reponse_question TEXT NOT NULL,
    difficulte_quizz INT,
	id_quizz INT,
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
) Engine=InnoDB ;

-- Table de l'historique des Quizz pour les Utilisateurs
CREATE TABLE historique (
    id_historique INT,
    score_historique INT,
    date_parties_historique DATE,
    id_utilisateur INT,
    id_quizz INT,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur),
    FOREIGN KEY (id_quizz) REFERENCES quizz(id_quizz)
)  Engine=InnoDB ;

-- Table des Pixels sur le dessin commun
CREATE TABLE pixels (
    id_pixel INT PRIMARY KEY AUTO_INCREMENT,
    coordonnee_x_pixel INT,
    coordonnee_y_pixel INT,
    couleur_pixel INT,
    id_utilisateur INT,
    FOREIGN KEY (id_utilisateur) REFERENCES utilisateurs(id_utilisateur)
) Engine=InnoDB ;





