const questions = [
    {
    //FACILE - LA COMMUNAUTE DE L'ANNEAU

        question: "Sur quel continent se déroule l'histoire ?",
        difficulty: 1.1,
        trueAnswer: "Là c'est facile à part Valinor, qui est une région du continent d'Aman (ou Terres Immortelles) se trouvant à l'Ouest de la Terre du Milieu, pas de confusion possible !",
        answers:[
            { text: "L'Europe", correct: false},
            { text: "La Terre du Milieu", correct: true},
            { text: "Valinor", correct: false},
            { text: "Narnia", correct: false},
        ]
    },
    {
        question: "Qui est le Seigneur des Anneaux ?",
        difficulty: 1.1,
        trueAnswer: "C'est Sauron qui a forgé l'Anneau Unique pour diriger les autres anneaux de pouvoir qu'il a aidé à confectionner",
        answers:[
            { text: "Sauron", correct: true},
            { text: "Saroumane", correct: false},
            { text: "Bilbon", correct: false},
            { text: "Morgoth", correct: false},
        ]
    },
    {
        question: "Combien y a t-il d'Anneau Unique ?",
        difficulty: 1.1,
        trueAnswer: "L'anneau Unique, comme son nom l'indique, il n'y en a qu'un !",
        answers:[
            { text: "1", correct: true},
            { text: "3", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "Qui a vaincu Sauron lors du flash back du début de film ?",
        difficulty: 1.1,
        trueAnswer: "C'est Isildur, le fils du roi Elendil qui trancha les doigts de Sauron",
        answers:[
            { text: "Elrond", correct: false},
            { text: "Elendil", correct: false},
            { text: "Isildur", correct: true},
            { text: "Ëarendil", correct: false},
        ]
    },
    {
        question: "Qui a trouvé l'Anneau Unique dans les tunnels des gobelins ?",
        difficulty: 1.1,
        trueAnswer: "C'est Bilbon qui le trouva lors de son voyage vers le Mont Solitaire avec la compagnie de Thorin, que l'on peut voir aussi dans Le Hobbit",
        answers:[
            { text: "Isildur", correct: false},
            { text: "Frodon", correct: false},
            { text: "Bilbon", correct: true},
            { text: "Gandalf", correct: false},
        ]
    },
    {
        question: "Quelle est la particularité des Hobbits ?",
        difficulty: 1.1,
        trueAnswer: "Les pieds de Hobbit c'est connu, si t'as faux je ne peux rien faire pour toi (même si sur le tournage, les acteurs des Hobbits étaient souvent en baskets, on peut d'ailleurs les voir par moment à l'écran !)",
        answers:[
            { text: "Ils ont de grands pieds poilus", correct: true},
            { text: "Ils sont très grands", correct: false},
            { text: "Ce sont de grands guerriers", correct: false},
            { text: "Ils sont capable de résoudre une équation du 3e degré en moins de 5 secondes", correct: false},
        ]
    },
    {
        question: "Qui préside le conseil d'Elrond à Fondcombe ?",
        difficulty: 1.1,
        trueAnswer: "C'est le Seigneur Elrond de Fondcombe qui préside le Conseil d'Elrond à Fondcombe, logique !",
        answers:[
            { text: "Gandalf", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Bilbon", correct: false},
            { text: "Elrond", correct: true},
        ]
    },
    {
        question: "Combien y a t-il de Hobbits lors de la création de la Communauté à Fondcombe ?",
        difficulty: 1.1,
        trueAnswer: "Frodon, Sam, Merry et Pippin, le compte est bon !",
        answers:[
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
        ]
    },
    {
        question: "Combien y a t-il de membres lors de la création de la Communaité à Fondcombe ?",
        difficulty: 1.1,
        trueAnswer: "Frodon, Sam, Merry, Pippin, Gandalf, Aragorn, Boromir, Gimli et Legolas, le compte est bon !",
        answers:[
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "7", correct: false},
            { text: "9", correct: true},
        ]
    },
    {
        question: "Qui essaye de détruire l'anneau à coup de hache lors du conseil d'Elrond ?",
        difficulty: 1.1,
        trueAnswer: "C'est Gimli, fils de Gloïn, ce qui aura pour conséquence de détruire sa hache",
        answers:[
            { text: "Elrond", correct: false},
            { text: "Gimli", correct: true},
            { text: "Legolas", correct: false},
            { text: "Gloïn", correct: false},
        ]
    },
    {
        question: "Qui est le descendant d'Isildur ?",
        difficulty: 1.1,
        trueAnswer: "Bien que Boromir et Faramir descendent eux aussi des Numénoréens, il n'y a qu'Aragorn qui est un descendant direct d'Isildur (Elendil étant le père de ce dernier)",
        answers:[
            { text: "Boromir", correct: false},
            { text: "Faramir", correct: false},
            { text: "Aragorn", correct: true},
            { text: "Elendil", correct: false},
        ]
    },
    {
        question: "Selon Gandalf lors du départ de la Communauté, le Mordor est...",
        difficulty: 1.1,
        trueAnswer: 'Frodon "Le Mordor Gandalf, c\'est à gauche ou à droite ?"<br>Gandalf "A gauche"',
        answers:[
            { text: "à droite", correct: false},
            { text: "à gauche", correct: true},
            { text: "super cool", correct: false},
            { text: "la meilleure destination de vacances", correct: false},
        ]
    },
    {
        question: "Qu'est-ce que la Moria ?",
        difficulty: 1.1,
        trueAnswer: "Il s'agit du plus grand royaume des Nains, aujourd'hui abandonné par ces derniers. Il a été fondé par Durin 1er, l'un des 7 premiers nains à s'être éveillé en Terre du Milieu. Il se trouve sous les Monts Brumeux et permet de les traverser d'Est en Ouest",
        answers:[
            { text: "une forêt", correct: false},
            { text: "un marais", correct: false},
            { text: "l'ancien grand royaume des Nains", correct: true},
            { text: "une marque naine de mort au rat", correct: false},
        ]
    },
    {
        question: "Pourquoi Gandalf a peur d'aller dans la Moria ?",
        difficulty: 1.1,
        trueAnswer: "Gandalf a peur du Fléau de Durin, le Balrog, qui ravagea la Moria, tuant Durin VI, le roi des Nains, ainsi que son fils Náin et de très nombreux Nains par la même occasion. Dans les livres c'est l'inverse, c'est Aragorn qui a peur d'y aller, alors que c'est Gandalf qui préfère emprunter ce chemin",
        answers:[
            { text: "à cause du Balrog que les nains ont réveillé", correct: true},
            { text: "à cause des Gobelins", correct: false},
            { text: "parce qu'il a peur du noir", correct: false},
            { text: "parce qu'il est claustrophobe", correct: false},
        ]
    },
    {
        question: "Lorsqu'ils sont perdus dans la Moria, que dit Gandalf à Merry pour retrouver leur chemin ?",
        difficulty: 1.1,
        trueAnswer: 'Gandalf : "Ohhh ! C\'est par ici !" <br>Merry : "Ahh, ça lui revient !" <br>Gandalf : "Pas du tout, mais l\'air est moins nauséabond en bas. Dans le doute, Meriadoc, il faut toujours suivre son flair."',
        answers:[
            { text: '"Il faut suivre les araignées"', correct: false},
            { text: '"Il faut suivre les papillons"', correct: false},
            { text: '"Tout ce que vous avez à décider c\'est quoi faire du temps qui vous est imparti"', correct: false},
            { text: '"Dans le doute, il faut toujours suivre son flair"', correct: true},
        ]
    },
    {
        question: "Quel célèbre phrase prononce Gandalf face au Balrog ?",
        difficulty: 1.1,
        trueAnswer: "Là franchement, plus simple c'est pas possible, vu la quantité de memes qui existent. Donc si t'as faux, retourne voir les 3 films, et en version longue !",
        answers:[
            { text: '"Vous ne les tuerez pas !"', correct: false},
            { text: '"Vous ne passerez pas !"', correct: true},
            { text: '"Vous ne me mangerez pas !"', correct: false},
            { text: '"Vous avez mauvaise haleine !"', correct: false},
        ]
    },
    {
        question: "Après la Moria où se rend la Communauté ?",
        difficulty: 1.1,
        trueAnswer: "En sortant de la Moria (après la perte de Gandalf), Aragorn pousse la Communauté à se dépêcher pour rejoindre la Lórien avant la tombée de la nuit pour être à l'abris, car à ce moment-là, la région entre la Moria et la Lórien grouille d'Orques",
        answers:[
            { text: "A Fondcombe", correct: false},
            { text: "Dans la forêt de Fangorn", correct: false},
            { text: "Dans la Forêt Noire", correct: false},
            { text: "Dans la forêt de la Lórien", correct: true},
        ]
    },
    {
        question: "Quel cadeau Galadriel ne donne pas à l'un des membres de la Communauté ?",
        difficulty: 1.1,
        trueAnswer: "Elle donne la lumière d'Eärendil à Frodon, les dagues de Noldorin à Merry et Pippin et la corde elfique à Sam. La cotte de mithril est donnée à Frodon par Bilbon avant le départ de la Communauté de Fondcombe",
        answers:[
            { text: "La lumière d'Eärendil", correct: false},
            { text: "Les dagues de Noldorin", correct: false},
            { text: "La cotte en mithril", correct: true},
            { text: "Une corde elfique", correct: false},
        ]
    },
    {
        question: "Qui essaye de prendre de force l'Anneau à Frodon ?",
        difficulty: 1.1,
        trueAnswer: "C'est Boromir qui succomba petit à petit au pouvoir de l'Anneau, comme tous les Hommes désirant le pouvoir, que ce soit à des fins personnelles ou pour des raisons louables, comme pour Boromir qui le convoite pour protéger son peuple et vaincre Sauron",
        answers:[
            { text: "Boromir", correct: true},
            { text: "Sam", correct: false},
            { text: "Pippin", correct: false},
            { text: "Legolas", correct: false},
        ]
    },
    {
        question: "Qui meurt en protégeant Merry et Pippin",
        difficulty: 1.1,
        trueAnswer: "C'est Boromir qui se sacrifia pour protéger Merry et Pippin, de qui il était proche et pour se racheter du fait qu'il ait essayé de prendre l'Anneau à Frodon",
        answers:[
            { text: "Gandalf", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Sam", correct: false},
            { text: "Boromir", correct: true},
        ]
    },
    {
        question: "Qui accompagne Frodon à la fin du film ?",
        difficulty: 1.1,
        trueAnswer: "C'est Sam qui accompagne Frodon car il a fait la promesse à Gandalf de ne pas perdre des yeux Frodon",
        answers:[
            { text: "Gandalf", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Sam", correct: true},
            { text: "Boromir", correct: false},
        ]
    },

    //FACILE - LES DEUX TOURS

    {
        question: "Quelle créature, qui suivait la Communauté, devient le guide de Frodon et Sam ?",
        difficulty: 1.2,
        trueAnswer: "Facile, c'est Gollum !",
        answers:[
            { text: "Gollum", correct: true},
            { text: "Gothmog", correct: false},
            { text: "Le Balrog", correct: false},
            { text: "Smaug", correct: false},
        ]
    },
    {
        question: "Quel est le principal problème de Gollum, dû à son port prolongé de l'Anneau ?",
        difficulty: 1.2,
        trueAnswer: "Bon, même si les 4 affirmations sont vraies et peuvent être liées au port de l'Anneau, la plus importante/grave de ces conséquences est son dédoublement de la personnalité",
        answers:[
            { text: "Il a un dédoublement de la personnalité", correct: true},
            { text: "Il n'a que 9 dents", correct: false},
            { text: "Il est atteint de calvitie", correct: false},
            { text: "Il est moche", correct: false},
        ]
    },
    {
        question: "Quel est le vrai nom de Gollum ?",
        difficulty: 1.2,
        trueAnswer: "C'est Sméagol !",
        answers:[
            { text: "Déagol", correct: false},
            { text: "Théagol", correct: false},
            { text: "Sméagol", correct: true},
            { text: "Smiguel", correct: false},
        ]
    },
    {
        question: "De quelle race faisait partie Sméagol avant de devenir Gollum ?",
        difficulty: 1.2,
        trueAnswer: "C'est Gandalf, puis Frodon qui nous dit qu'il \"n'était pas si différent d'un Hobbit autrefois\". Il faisait partie d'un peuple de Hobbit vivant au Nord, près de l'Anduin (entre les Monts Brumeux et la Forêt Noire)",
        answers:[
            { text: "Un elfe", correct: false},
            { text: "Un nain", correct: false},
            { text: "Un orque", correct: false},
            { text: "Un hobbit", correct: true},
        ]
    },
    {
        question: "Où Gollum conduit-il Sam et Frodon pendant la majorité du film ?",
        difficulty: 1.2,
        trueAnswer: "Frodon lui demanda de les conduire à la Porte Noire du Mordor, mais une fois là-bas et que la Porte s'ouvre, Gollum les retient en leur disant qu'il y avait un autre chemin",
        answers:[
            { text: "A la Porte Noire du Mordor", correct: true},
            { text: "A Minas Tirith", correct: false},
            { text: "A l'auberge du Poney Fringant", correct: false},
            { text: "A la Comté", correct: false},
        ]
    },
    {
        question: "Quel est le surnom que Gollum donne à Sam ?",
        difficulty: 1.2,
        trueAnswer: "Il l'appelle toujours le gros hobbit joufflu ou juste le gros hobbit",
        answers:[
            { text: "Le beau hobbit", correct: false},
            { text: "Le gros hobbit joufflu", correct: true},
            { text: "Le Maître", correct: false},
            { text: "Le petit hobbit pansu", correct: false},
        ]
    },
    {
        question: "Comment s'appelle le marais que traverse Frodon, Sam et Gollum ?", //---------------------------------
        difficulty: 1.2,
        trueAnswer: "C'est le marais des morts, théâtre d'une des grandes batailles entre La Dernière Alliance des Hommes et des Elfes contre Sauron. Les cadavres qu'on y voit sont d'ailleurs des combattants morts lors de cette bataille",
        answers:[
            { text: "Le marais des morts", correct: true},
            { text: "Le joyeux marais", correct: false},
            { text: "Le marais cage", correct: false},
            { text: "Le marais de Shrek", correct: false},
        ]
    },
    {
        question: "Qui a enlevé Merry et Pippin ?",
        difficulty: 1.2,
        trueAnswer: "Ce sont les Uruk-Hai portant la trace de la Main Blanche de Saroumane, qui les enlevèrent et les ramenèrent vers l'Isengard",
        answers:[
            { text: "Les Nazgûls", correct: false},
            { text: "Les orques de Sauron", correct: false},
            { text: "Les Uruk-Hai de Saroumane", correct: true},
            { text: "Les gobelins de Gobelinville", correct: false},
        ]
    },
    {
        question: "Qui est le magicien blanc qui se promène dans la forêt de Fangorn ?",
        difficulty: 1.2,
        trueAnswer: "Il s'agit de Gandalf le Blanc qui se fait passer pour Saroumane, ce dernier ne venant plus se promener à Fangorn selon Sylvebarbe",
        answers:[
            { text: "Gandalf le Gris", correct: false},
            { text: "Sylvebarbe", correct: false},
            { text: "Saroumane", correct: false},
            { text: "Gandalf le Blanc", correct: true},
        ]
    },
    {
        question: "Qui est Sylvebarbe ?",
        difficulty: 1.2,
        trueAnswer: "Comme il le dit lui-même : \"Un arbre ? Je ne suis pas un arbre ! Je suis un Ent !\"",
        answers:[
            { text: "Un Ent", correct: true},
            { text: "Un arbre", correct: false},
            { text: "Un troll", correct: false},
            { text: "Un Balrog vegan", correct: false},
        ]
    },
    {
        question: "Qui est le roi du Rohan dans Les Deux Tours ?",
        difficulty: 1.2,
        trueAnswer: "Même s'il est envoûté par Saroumane, c'est bien Théoden le roi du Rohan",
        answers:[
            { text: "Eomer", correct: false},
            { text: "Théoden", correct: true},
            { text: "Théodred", correct: false},
            { text: "Hama", correct: false},
        ]
    },
    {
        question: "Qui contrôle l'esprit de Théoden ?",
        difficulty: 1.2,
        trueAnswer: "C'est Saroumane afin de contrôler tout le Rohan",
        answers:[
            { text: "Grima", correct: false},
            { text: "Sauron", correct: false},
            { text: "Saroumane", correct: true},
            { text: "Le Roi Sorcier d'Angmar", correct: false},
        ]
    },
    {
        question: "Quel ordre donne Théoden une fois qu'il a retrouvé ses esprits ?",
        difficulty: 1.2,
        trueAnswer: "Pour protéger son peuple et éviter une guerre frontale contre les armées d'Isengard, il ordonne de se réfugier au Gouffre de Helm, la plus grande forteresse du Rohan, qui n'est jamais tombée",
        answers:[
            { text: "D'évacuer la ville pour aller se réfugier au Gouffre de Helm", correct: true},
            { text: "D'ouvrir les portes en signe de reddition", correct: false},
            { text: "D'attaquer frontalement Isengard", correct: false},
            { text: "D'allumer les feux d'alarme pour demander de l'aide au Gondor", correct: false},
        ]
    },
    {
        question: "Combien d'Uruk-Hai y a t-il dans l'armée de Saroumane qui attaque le Gouffre de Helm ?",
        difficulty: 1.2,
        trueAnswer: "Aragorn (et Saroumane) ont rescensé 10 000 Uruk-Hai",
        answers:[
            { text: "9", correct: false},
            { text: "1 973", correct: false},
            { text: "5 000", correct: false},
            { text: "10 000", correct: true},
        ]
    },
    {
        question: "Lequel de ces lieux ne se trouve pas dans le Gouffre de Helm ?",
        difficulty: 1.2,
        trueAnswer: "Ils se trouvent tous dans le Gouffre de Helm (ou la Gorge de Helm), sauf Edoras, qui est la capitale du Rohan située plus à l'Est",
        answers:[
            { text: "Le fossé de Helm", correct: false},
            { text: "Fort-le-Cor", correct: false},
            { text: "Les cavernes étincelantes", correct: false},
            { text: "Edoras", correct: true},
        ]
    },
    {
        question: "Dans le film, qui vient aider les Hommes du Rohan juste avant la bataille finale ?",
        difficulty: 1.2,
        trueAnswer: "Ce sont les Elfes de la Lórien, menés par Haldir, venant aider les Hommes à la demande d'Elrond",
        answers:[
            { text: "Le Gondor", correct: false},
            { text: "Les Nains", correct: false},
            { text: "Les Elfes", correct: true},
            { text: "Les Hobbits", correct: false},
        ]
    },
    {
        question: "Dans le film, qui Aragorn lance t-il sur la chaussée de Fort-le-Cor pour tuer les Uruk-Hai le temps de consolider la porte ?",
        difficulty: 1.2,
        trueAnswer: "C'est Gimlin, mais chut ! Ne le dites pas à l'elfe !",
        answers:[
            { text: "Gimli", correct: true},
            { text: "Legolas", correct: false},
            { text: "Théoden", correct: false},
            { text: "Gilmi", correct: false},
        ]
    },
    {
        question: "Quand Gandalf rejoint-il la bataille ?",
        difficulty: 1.2,
        trueAnswer: "\"Un magicien n'arrive jamais en retard, ni en avance d'ailleurs, il arrive précisément à l'heure convenue !\" En l'occurence, il avait demandé d'attendre \"sa venue aux premières lueures du 5e jour, à l'aube, regardez à l'Est\" et c'est le moment précis ou il arriva",
        answers:[
            { text: "En retard", correct: false},
            { text: "En avance", correct: false},
            { text: "A l'aube du 5e jour", correct: true},
            { text: "Après la bataille", correct: false},
        ]
    },
    {
        question: "Dans le film, qui conduit la charge finale des Rohirrims aux côtés de Gandalf lors de la bataille du Gouffre de Helm ?",
        difficulty: 1.2,
        trueAnswer: "Il s'agit d'Eomer, qui avait été banni par Théoden, mais qui prit avec lui des cavaliers pour chasser tous les Uruk-Hai qu'ils auraient pu croiser",
        answers:[
            { text: "Eomer", correct: true},
            { text: "Eowyn", correct: false},
            { text: "Théoden", correct: false},
            { text: "Aragorn", correct: false},
        ]
    },
    {
        question: "Combien d'orques ont tué au total Gimli et Legolas ?",
        difficulty: 1.2,
        trueAnswer: "43 et 42, même si celui sur lequel Gimli était assis bougeait encore, il le faisait parce que la hache de Gimli était plantée dans son système nerveux",
        answers:[
            { text: "17 et 38", correct: false},
            { text: "42 et 42", correct: false},
            { text: "43 et 42", correct: true},
            { text: "43 et 43", correct: false},
        ]
    },
    {
        question: "Qui attaque et conquiert Isengard à la fin du film ?",
        difficulty: 1.2,
        trueAnswer: "Après que Sylvebarbe ait vu la déforestation causée par Saroumane, il rallia tous les Ents pour attaquer Isengard",
        answers:[
            { text: "Les Arbres", correct: false},
            { text: "Les Rohirrims", correct: false},
            { text: "Les Elfes", correct: false},
            { text: "Les Ents", correct: true},
        ]
    },
    {
        question: "Complétez cette chanson de Gollum : \"Le lac est beau, fraîche est son eau, c'est délicieux ! C'que nous voulons, ...\" :",
        difficulty: 1.2,
        trueAnswer: "C'est du poisson qu'il veut ! Il chante ceci après avoir pêché un poisson dans le Lac Interdit",
        answers:[
            { text: "\"Nous les tuerons, mon précieux !\"", correct: false},
            { text: "\"C'est du jambon, c'est délicieux !\"", correct: false},
            { text: "\"C'est du poisson, fort bien goûteux !\"", correct: true},
            { text: "\"C'est des bonbons, des cordons bleus !\"", correct: false},
        ]
    },

    //FACILE - LE RETOUR DU ROI

    {
        question: "Comment s'appelle le Grand Royaume des Hommes qui fait face au Mordor ?",
        difficulty: 1.3,
        trueAnswer: "Le Rohan étant plus petit et au Nord-Ouest du Gondor, il s'agit bien de ce dernier",
        answers:[
            { text: "Le Rohan", correct: false},
            { text: "Le Gondor", correct: true},
            { text: "La Comté", correct: false},
            { text: "La Moria", correct: false},
        ]
    },
    {
        question: "Par ou Gollum conduit-il Frodon et Sam ?",
        difficulty: 1.3,
        trueAnswer: "Après être partis d'Osgiliath, ils se dirigent vers le Mordor depuis le passage de Cirith Ungol, près de Minas Morgul",
        answers:[
            { text: "Par le gué de l'Isen", correct: false},
            { text: "Par le gué d'Ent", correct: false},
            { text: "Par le passage de Cirith Ungol", correct: true},
            { text: "Par la trouée du Rohan", correct: false},
        ]
    },
    {
        question: "Qui dirige le Gondor au début du film ?",
        difficulty: 1.3,
        trueAnswer: "Le roi étant mort depuis des siècles sans laisser d'héritier, c'est l'intendant qui gouverne (le premier intendant était conseiller du roi, puis son fils aîné lui succéda et ainsi de suite)",
        answers:[
            { text: "L'intendant", correct: true},
            { text: "Le roi", correct: false},
            { text: "Le Thane", correct: false},
            { text: "Le premier ministre", correct: false},
        ]
    },
    {
        question: "Comment s'appelle le dirigeant du Gondor ?",
        difficulty: 1.3,
        trueAnswer: "Il s'agit de Denethor II, fils d'Ecthelion et père de Boromir et Faramir",
        answers:[
            { text: "Ecthelion", correct: false},
            { text: "Barahïr", correct: false},
            { text: "Boromir", correct: false},
            { text: "Denethor", correct: true},
        ]
    },
    {
        question: "Comment s'appelle la principale ville du Gondor lors du film ?",
        difficulty: 1.3,
        trueAnswer: "L'ancienne capitale est Osgiliath, mais étant en ruine car perdue et prise à de nombreuses reprises, c'est aujourd'hui Minas Tirith la capitale",
        answers:[
            { text: "Minas Morgul", correct: false},
            { text: "Minas Ithil", correct: false},
            { text: "Minas Tirith", correct: true},
            { text: "Osgiliath", correct: false},
        ]
    },
    {
        question: "Quel objet magique appartenant à Saroumane récupère Pippin à Isengard ?",
        difficulty: 1.3,
        trueAnswer: "Pippin récupère dans l'eau le palantir de Saroumane",
        answers:[
            { text: "Son bâton", correct: false},
            { text: "Un palantir", correct: true},
            { text: "Un anneau de pouvoir", correct: false},
            { text: "Une des bombes utilisées pour faire exploser le mur d'enceinte du Gouffre de Helm", correct: false},
        ]
    },
    {
        question: "Qui est Boromir pour Denethor ?",
        difficulty: 1.3,
        trueAnswer: "Pas dur mais il peut y avoir un piège : pour Denethor, Boromir est son fils !",
        answers:[
            { text: "Son fils", correct: true},
            { text: "Son cousin", correct: false},
            { text: "Son neveu", correct: false},
            { text: "Son père", correct: false},
        ]
    },
    {
        question: "Avant de rencontrer Denethor, quelle est la seule chose que Gandalf attend au final de Pippin ?",
        difficulty: 1.3,
        trueAnswer: "Gandalf demande d'abord à Pippin de ne pas mentionner la quête secrète de Frodon, puis de ne pas évoquer la mort de Boromir et ensuite de ne rien dire sur Aragorn... Avant de directement lui demander de ne pas parler du tout finalement",
        answers:[
            { text: "Qu'il raconte en détails la mort de Boromir", correct: false},
            { text: "Qu'il explique la quête secrète de Frodon", correct: false},
            { text: "Qu'il s'engage au service de Denethor", correct: false},
            { text: "Qu'il ne parle pas du tout", correct: true},
        ]
    },
    {
        question: "Qui allume le premier feu d'alarme du Gondor",
        difficulty: 1.3,
        trueAnswer: "C'est Pippin qui escalade le feu d'alarme avant de l'allumer comme lui a demandé Gandalf",
        answers:[
            { text: "Merry", correct: false},
            { text: "Pippin", correct: true},
            { text: "Gandalf", correct: false},
            { text: "Denethor", correct: false},
        ]
    },
    {
        question: "Comment s'appelle la ville en ruine sur le fleuve et qui est l'ancienne capitale du Gondor ?",
        difficulty: 1.3,
        trueAnswer: "Il s'agit d'Osgiliath, qui a été perdue et reprise à de nombreuses reprises, c'est pour celà qu'elle a été abandonnée puis ravagée par la guerre",
        answers:[
            { text: "Osgiliath", correct: true},
            { text: "Minas Tirith", correct: false},
            { text: "Minas Ithil", correct: false},
            { text: "Minas Morgul", correct: false},
        ]
    },
    {
        question: "Pourquoi Aragorn, Gimli et Legolas quittent l'armée du Rohan à Dunharrow et empruntent le chemin des Morts ?",
        difficulty: 1.3,
        trueAnswer: "Elrond rejoint Aragorn à Dunharrow pour lui donner l’épée reforgée de son ancêtre avant de lui dire qu’avec elle il avait le pouvoir d’ordonner aux morts parjures d’honorer leur serment d’antant de se battre au côté des Hommes contre les forces de Sauron",
        answers:[
            { text: "Parce qu’ils ont peur de la guerre", correct: false},
            { text: "Pour aller chercher Merry et Pippin", correct: false},
            { text: "Pour prendre un raccourci", correct: false},
            { text: "Pour rappeler aux morts parjures leur ancien serment de se battre à leur coté", correct: true},
        ]
    },
    {
        question: "Que fait Denethor quand son fils Faramir revient blessé ?",
        difficulty: 1.3,
        trueAnswer: "Il le croit mort, et n'ayant plus aucun espoir de victoire, il demande qu'un bûcher pour lui et son fils soit érigé dans la crypte des dirigeants du Gondor",
        answers:[
            { text: "Il l’envoie auprès d’un médecin", correct: false},
            { text: "Il l'enterre vivant", correct: false},
            { text: "Il veut le faire brûler sur un bûcher (et lui avec)", correct: true},
            { text: "Il le chatouille pour le réveiller", correct: false},
        ]
    },
    {
        question: "Qui sauve Faramir du bûcher ?",
        difficulty: 1.3,
        trueAnswer: "C'est Pippin qui prévient Gandalf que Denethor veut se faire brûler vif avec son fils Faramir, et une fois que Gandalf met hors d'état de nuire Denethor, c'est Pippin qui sort Faramir du bûcher",
        answers:[
            { text: "Pippin", correct: true},
            { text: "Merry", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Denethor", correct: false},
        ]
    },
    {
        question: "Quel est le plus puissant des lieutenants de Sauron à prendre part à la guerre ?",
        difficulty: 1.3,
        trueAnswer: "Il s’agit du Roi Sorcier d’Angmar, le Nazgul le plus puissant ainsi que leur chef",
        answers:[
            { text: "Gothmog", correct: true},
            { text: "Shelob", correct: false},
            { text: "Saroumane", correct: false},
            { text: "Le Roi Sorcier d'Angmar", correct: false},
        ]
    },
    {
        question: "Quelle est la prophétie entourant le Roi Sorcier d’Angmar ?",
        difficulty: 1.3,
        trueAnswer: "On dit de lui qu’aucun homme ne peut le tuer, et cela se vérifiera car il sera vaincu par une femme aidée d’un Hobbit",
        answers:[
            { text: "Il est immortel", correct: false},
            { text: "Il est plus puissant que Sauron lui-même", correct: false},
            { text: "Aucun homme ne peut le tuer", correct: true},
            { text: "Il doit rétablir l'équilibre dans la Force", correct: false},
        ]
    },
    {
        question: "Qui tue le Roi Sorcier d'Angmar",
        difficulty: 1.3,
        trueAnswer: "Merry blesse le Nazgul à la jambe mais c’est bien Eowyn qui donna le coup fatal",
        answers:[
            { text: "Merry", correct: false},
            { text: "Eomer", correct: false},
            { text: "Gandalf", correct: false},
            { text: "Eowyn", correct: true},
        ]
    },
    {
        question: "Qui arrive à la fin de la bataille pour massacrer en seulement quelques minutes les milliers d’orques devant et dans Minas Tirith ?",
        difficulty: 1.3,
        trueAnswer: "Aragorn, Gimli et Legolas arrivent avec l’armée des morts et déciment les forces de Sauron, nettoyant la ville des orques qui y ont pénétré et mettant fin à la bataille",
        answers:[
            { text: "Les Rohirrims", correct: false},
            { text: "L'armée des Morts", correct: true},
            { text: "Les Elfes", correct: false},
            { text: "Les Nains", correct: false},
        ]
    },
    {
        question: "Qui se cache dans le passage de Cirith Ungol et attaque Frodon ?",
        difficulty: 1.3,
        trueAnswer: "Il s’agit de Shelob, que même Sauron en personne craint car elle est la descendante d’Ungoliant, une araignée encore plus monstrueuse qui s’en est prit à Morgoth lui-même (le maître des Ténèbres dont Sauron était le lieutenant) qui n’a eu d’autres choix que d’appeler ses armées pour pouvoir se sauver",
        answers:[
            { text: "Shelob l'araignée géante", correct: true},
            { text: "Gollum", correct: false},
            { text: "Un Nazgûl", correct: false},
            { text: "Une armée d'orques", correct: false},
        ]
    },
    {
        question: "Qui sauve Frodon des geôles de Cirith Ungol ?",
        difficulty: 1.3,
        trueAnswer: "C’est Sam qui, armé de son courage, de Dard, de la lumière d’Eärendil et d’un coup de pouce du destin (car une grande partie des orques se sont entretués), pénètra dans Cirith Ungol et sauva Frodon",
        answers:[
            { text: "Gollum", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Galadriel", correct: false},
            { text: "Sam", correct: true},
        ]
    },
    {
        question: "Pourquoi Aragorn part vers la Porte Noire à la tête d’une armée d’Hommes du Gondor et du Rohan ?",
        difficulty: 1.3,
        trueAnswer: "Aragorn utilise le palantír de Saroumane pour se montrer à Sauron comme l’héritier d’Isildur, lui montre l’épée reforgée qui avait servi à le vaincre pour le provoquer, lui faisant croire qu’il avait l’Anneau et pour déclencher une bataille devant la Porte Noire. L’attention de Sauron sera donc portée sur lui et Sauron négligera donc le reste du Mordor, qui sera vidé de ses armées qui iront se battre contre Aragorn, créant une diversion pour Frodon et Sam",
        answers:[
            { text: "Pour essayer de vaincre Sauron par la force", correct: false},
            { text: "Pour aller sauver Frodon et Sam", correct: false},
            { text: "Pour faire diversion afin de laisser le champ libre à Frodon et Sam", correct: true},
            { text: "Pour avoir une mort glorieuse", correct: false},
        ]
    },
    {
        question: "Qui jette l’Anneau Unique dans le feu de la Montagne du Destin ?",
        difficulty: 1.3,
        trueAnswer: "C’est Gollum qui tombe avec lui dans la Montagne du Destin (même si dans le film c’est Frodon qui pousse Gollum, dans le livre il tombe tout seul pendant sa danse de la joie)",
        answers:[
            { text: "Isildur", correct: false},
            { text: "Sam", correct: false},
            { text: "Gandalf", correct: false},
            { text: "Gollum", correct: true},
        ]
    },

    //NORMAL(SANS CHRONOMETRE) ET DIFFICILE(AVEC CHRONOMETRE) - OEUVRE INTEGRALE

    {
        question: "Quel est le nom elfique de Gandalf ?",
        difficulty: 2,
        trueAnswer: "Les Elfes le surnomment Mithrandir, le pèlerin gris (mith=gris ; randir=pèlerin, errant). Tharkûn est son surnom chez les Nains (=homme au bâton), tandis que Manwë et Elessar n’ont rien à voir avec Gandalf",
        answers:[
            { text: "Tharkûn", correct: false},
            { text: "Mithrandir", correct: true},
            { text: "Manwë", correct: false},
            { text: "Manwë", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "",
        difficulty: 2,
        trueAnswer: "",
        answers:[
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },

];

// Déclaration d'un tableau vide pour les questions actives
let questionsActives = [];

// Récupération d'éléments du DOM et stockage dans des variables
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const answerText = document.getElementById("answer-text");
const titreQuiz = document.getElementById("quiz-title");

// Initialisation de variables
let currentQuestionIndex = 0; // Indice de la question actuelle
let score = 0; // Score actuel de l'utilisateur
let totalQuestions = 0; // Nombre total de questions dans le quiz
let selectedDifficulty = Number(localStorage.getItem("selectedDifficulty")); // Récupération de la difficulté sélectionnée depuis le stockage local

// Fonction pour démarrer le quiz
function startQuiz(){
    // Réinitialisation des variables
    questionsActives = [];
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";

    // Détermination du nombre total de questions en fonction de la difficulté sélectionnée et modification de l'affichage du gros titre du quiz
    if(selectedDifficulty == 2){
        totalQuestions = 20;
        titreQuiz.innerHTML = "Normal - Univers étendu";
    } else if(selectedDifficulty == 3){
        totalQuestions = 30;
        titreQuiz.innerHTML = "Normal - Univers étendu (avec chronomètre)";
    } else{
        totalQuestions = 10;
        if(selectedDifficulty == 1.1){
            titreQuiz.innerHTML = "Facile - La Communauté de l'Anneau";
        }else if(selectedDifficulty == 1.2){
            titreQuiz.innerHTML = "Facile - Les Deux Tours";
        }else if(selectedDifficulty == 1.3){
            titreQuiz.innerHTML = "Facile - Le Retour du Roi";
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
    questionElement.innerHTML = `${questionNo}/${totalQuestions}. ${currentQuestion.question}`;

    // Affichage des réponses possibles sous forme de boutons
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
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

    // Affichage du bouton "Next" et du texte de la réponse
    nextButton.style.display = "block";
    let currentAnswer = questionsActives[currentQuestionIndex];
    answerText.innerHTML = currentAnswer.trueAnswer;
    answerText.style.display = "block";
}

// Fonction pour afficher le score final
function showScore(){
    // Réinitialisation de l'état
    resetState();

    // Affichage du score final
    questionElement.innerHTML = `Votre score est de ${score} bonnes réponses sur ${totalQuestions}!`;

    // Création d'un bouton pour changer de difficulté
    const changeDifficultyButton = document.createElement("button");
    changeDifficultyButton.innerHTML = "Changer de difficulté";
    changeDifficultyButton.id = "change-difficulty-btn"; // Ajout de l'ID "change-difficulty-btn"
    answerButtons.appendChild(changeDifficultyButton); // Ajout du bouton au conteneur d'éléments de réponse
    changeDifficultyButton.addEventListener("click", changeDifficulty);

    // Configuration du bouton "Next" pour recommencer le quiz
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

// Fonction pour changer de difficulté
function changeDifficulty() {
    // Redirection de l'utilisateur vers une autre page pour changer la difficulté
    window.location.href = "quizDificulty.html";
}

// Fonction pour gérer le bouton "Next"
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

// Ajout d'un gestionnaire d'événements pour le bouton "Next"
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < totalQuestions){
        handleNextButton(); // Gestion du bouton "Next" en fonction du contexte
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
