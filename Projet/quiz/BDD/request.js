//npm run server    OU      node request.js     pour lancer
//pendant le dev, utiliser npm server-dev

// Importation des modules CORS, de variables d'environnement, framework Express et du fichier functions.js
const cors = require('cors'); 
const dotenv = require('dotenv'); 
const express = require('express'); 
const fonction = require('./functions'); 
const app = express(); // Initialisation de l'application Express

// Appel du fichier .env
dotenv.config();

// Utilisation des middlewares
app.use(cors()); // Activation de CORS pour les requêtes HTTP
app.use(express.json()); // Middleware pour gérer les requêtes avec les données JSON
app.use(express.urlencoded({ extended: false })); // Middleware pour gérer les requêtes avec des données de formulaire URL-encodées

// Requête avec app.get
app.get('/test-url/:dynamic', async (req, res) => {
    console.log("dynamic slug", req.params.dynamic); // Affiche le paramètre dynamique reçu dans l'URL
    res.json("maison"); // Renvoie une réponse JSON "maison"
});

// Écoute du serveur sur le port 3000
app.listen(3000, () => {
    console.log("App is runing..."); // Affiche un message indiquant que l'application est en cours d'exécution
});
