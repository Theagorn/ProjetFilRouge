// Récupération d'éléments et stockage dans des variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const answerText = document.getElementById("answer-text");
const titreQuiz = document.getElementById("quiz-title");


// Initialisation de variables
let currentQuestionIndex = 0; // Indice de la question actuelle
let score = 0; // Score actuel de l'utilisateur
let totalQuestions = 0; // Nombre total de questions à faire selon la difficulté
let questionsActives = []; // Déclaration d'un tableau vide pour les questions qui seront utilisées par l'utilisateur
let selectedDifficulty = Number(localStorage.getItem("selectedDifficulty")); // Récupération de la difficulté sélectionnée depuis le stockage local

// Fonction pour démarrer le quiz
function startQuiz(){
    // Réinitialisation des variables
    questionsActives = [];
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Suivant";

    // Détermination du nombre total de questions et de l'affichage du gros titre du quiz en fonction de la difficulté sélectionnée 
    if(selectedDifficulty == 2){
        totalQuestions = 20;
        titreQuiz.textContent = "Normal - Univers étendu";
    } else if(selectedDifficulty == 3){
        totalQuestions = 30;
        titreQuiz.textContent = "Difficile - Univers étendu (avec chronomètre)";
    } else{
        totalQuestions = 10;
        if(selectedDifficulty == 1.1){
            titreQuiz.textContent = "Facile - La Communauté de l'Anneau";
        }else if(selectedDifficulty == 1.2){
            titreQuiz.textContent = "Facile - Les Deux Tours";
        }else if(selectedDifficulty == 1.3){
            titreQuiz.textContent = "Facile - Le Retour du Roi";
        }
    }

    // Filtrage des questions en fonction de la difficulté sélectionnée
    questions.forEach(question => {
        if (question.difficulty === selectedDifficulty) {
            questionsActives.push(question);
        } else if (selectedDifficulty === 3 && question.difficulty === 2) {
            questionsActives.push(question)
        }
    });

    // Mélange aléatoire des questions actives
    questionsActives = shuffleArray(questionsActives);

    // Affichage de la première question
    showQuestion();
}

// Fonction pour afficher une question
function showQuestion(){
    // Réinitialisation de l'état
    resetState();

    // Récupération de la question actuelle
    let currentQuestion = questionsActives[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = `${questionNo}/${totalQuestions}. ${currentQuestion.question}`;

    // Affichage des réponses possibles sous forme de boutons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

// Fonction pour réinitialiser l'état de l'interface
function resetState(){
    // Masquage du bouton "Next" et du texte de réponse
    nextButton.style.display = "none";
    answerText.style.display = "none";

    // Suppression de tous les boutons de réponse précédents
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

// Fonction pour gérer la sélection d'une réponse
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct == "true";

    // Ajout de classes CSS en fonction de la réponse sélectionnée
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }

    // Désactivation de tous les boutons de réponse
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    // Affichage du bouton "Next" et du texte de la réponse en prenant en compte le saut de ligne
    nextButton.style.display = "block";
    let currentAnswer = questionsActives[currentQuestionIndex];

    answerText.textContent = "";
    let sautDeLigne = currentAnswer.trueAnswer.split('\n');
    sautDeLigne.forEach(function (ligne, index) {
        let textNode = document.createTextNode(ligne);
        answerText.appendChild(textNode);
        if (index < sautDeLigne.length - 1) {
            answerText.appendChild(document.createElement("br"));
        }
    })
    answerText.style.display = "block";
}

// Fonction pour afficher le score final
function showScore(){
    // Réinitialisation de l'état
    resetState();

    // Affichage du score final
    questionElement.textContent = `Votre score est de ${score} bonnes réponses sur ${totalQuestions}!`;

    // Création d'un bouton pour changer de difficulté
    const changeDifficultyButton = document.createElement("button");
    changeDifficultyButton.textContent = "Changer de difficulté";
    changeDifficultyButton.id = "change-difficulty-btn"; // Ajout de l'ID "change-difficulty-btn"
    answerButtons.appendChild(changeDifficultyButton); // Ajout du bouton au conteneur d'éléments de réponse
    changeDifficultyButton.addEventListener("click", changeDifficulty);

    // Configuration du bouton "Suivant" pour recommencer le quiz
    nextButton.textContent = "Rejouer";
    nextButton.style.display = "block";
}

// Fonction pour changer de difficulté
function changeDifficulty() {
    // Redirection de l'utilisateur vers une autre page pour changer la difficulté
    window.location.href = "quizDificulty.html";
}

// Fonction pour gérer le bouton "Suivant"
function handleNextButton(){
    // Incrémentation de l'indice de la question actuelle
    currentQuestionIndex++;

    // Vérification s'il reste des questions à afficher ou si le quiz est terminé
    if(currentQuestionIndex < totalQuestions){
        showQuestion(); // Afficher la question suivante
    }else{
        showScore(); // Afficher le score final
    }
}

// Ajout d'un gestionnaire d'événements pour le bouton "Suivant"
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < totalQuestions){
        handleNextButton(); // Gestion du bouton "Suivant" en fonction du contexte
    }else{
        startQuiz(); // Redémarrage du quiz si toutes les questions ont été répondues
    }
})

// Fonction pour mélanger les éléments d'un tableau de manière aléatoire
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Démarrage du quiz au chargement de la page
startQuiz();

