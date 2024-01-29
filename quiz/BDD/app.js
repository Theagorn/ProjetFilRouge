//pour démarrer le serveur MySQL, chercher MySQL dans Services windows
//pour le modifier, utiliser un terminal et 'mysql -u root -p'

//pour node, faire cd D:\Codes\ProjetFilRouge\quiz\BDD
//node app.js

//sur mysql workbench : 
//USE lotrquiz;
//select * from utilisateurs;

const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public')); // Dossier contenant les fichiers statiques comme le HTML

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'LOTRquiz',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/choix.html');
});

// Affichage du formulaire de connexion lorsque l'utilisateur accède à /connexion en utilisant la méthode GET
app.get('/connexion', (req, res) => {
    res.sendFile('login.html');
});

// Traitement du formulaire de connexion soumis par l'utilisateur en utilisant la méthode POST
app.post('/connexion', (req, res) => {
    // Extraction des données du formulaire depuis le corps de la requête
    const { email, mot_de_passe } = req.body;

    // Obtention d'une connexion à la base de données depuis le pool
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // Exécution d'une requête SQL pour vérifier les informations de connexion dans la base de données
        connection.query('SELECT * FROM utilisateur WHERE email_utilisateur = ? AND mdp_utilisateur = ?',
        [email, mot_de_passe], (err, results) => {
            if (err) throw err;

            // Vérification des résultats de la requête
            if (results.length > 0) {
                console.log('Connexion réussie');
                res.send('Connexion réussie');
            } else {
                console.log('Échec de la connexion');
                res.send('Échec de la connexion');
            }

            // Libération de la connexion pour la rendre à nouveau disponible dans le pool
            connection.release();
        });
    });
});


// Affichage du formulaire d'inscription lorsque l'utilisateur accède à /inscription en utilisant la méthode GET
app.get('/inscription', (req, res) => {
    res.sendFile('inscription.html');
});

// Traitement du formulaire d'inscription soumis par l'utilisateur en utilisant la méthode POST
app.post('/inscription', (req, res) => {
    // Extraction des données du formulaire depuis le corps de la requête
    const { nom, email, mot_de_passe } = req.body;

    // Obtention d'une connexion à la base de données depuis le pool
    pool.getConnection((err, connection) => {
        if (err) throw err;

        // Exécution d'une requête SQL pour insérer les informations d'inscription dans la base de données
        connection.query('INSERT INTO utilisateur (pseudo_utilisateur, email_utilisateur, mdp_utilisateur) VALUES (?, ?, ?)', 
        [nom, email, mot_de_passe], (err, results) => {
            if (err) throw err;

            // Si l'insertion réussit, afficher un message de succès
            console.log('Inscription réussie');
            res.send('Inscription réussie');

            // Libération de la connexion pour la rendre à nouveau disponible dans le pool
            connection.release();
        });
    });
});


app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});

