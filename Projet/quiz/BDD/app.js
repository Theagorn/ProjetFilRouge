//pour démarrer le serveur MySQL, chercher MySQL dans Services windows
//pour le modifier, utiliser un terminal et 'mysql -u root -p'

//pour node, faire cd D:\Codes\ProjetFilRouge\Projet\quiz\BDD
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

app.get('/connexion', (req, res) => {
    res.sendFile('login.html');
});

//Formulaire de connexion
app.post('/connexion', (req, res) => {
    const { email, mot_de_passe } = req.body;

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query('SELECT * FROM utilisateurs WHERE email = ? AND mot_de_passe = ?', [email, mot_de_passe], (err, results) => {
            if (err) throw err;

            if (results.length > 0) {
                console.log('Connexion réussie');
                res.send('Connexion réussie');
            } else {
                console.log('Échec de la connexion');
                res.send('Échec de la connexion');
            }
            connection.release();
        });
    });

});

app.get('/inscription', (req, res) => {
    res.sendFile('inscription.html');
});

// Formulaire d'inscription
app.post('/inscription', (req, res) => {
    const { nom, email, mot_de_passe } = req.body;

    pool.getConnection((err, connection) => {

        connection.query('INSERT INTO utilisateurs (nom, email, mot_de_passe) VALUES (?, ?, ?)', [nom, email, mot_de_passe], (err, results) => {
            if (err) throw err;

            console.log('Inscription réussie');
            res.send('Inscription réussie');
        });

        connection.release();
    });
});

app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
