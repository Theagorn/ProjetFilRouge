// Importation des modules des variables d'environnement et MySQL
const dotenv = require('dotenv');
const sql = require('mysql');

// Chargement des variables d'environnement à partir du fichier .env
dotenv.config();

// Configuration de la connexion à la base de données
const connection = sql.createConnection({
    host : process.env.host, 
    user : process.env.user,
    password : process.env.password, 
    database : process.env.database,
    port : process.env.port, 
});

// Tentative de connexion à la base de données
connection.connect((err) =>{
    console.log("test");
    if(err){
        console.log(err.message); // Affiche l'erreur si la connexion échoue
    }
    console.log("DB " + connection.state + "."); // Affiche un message de succès avec l'état de la connexion
});

