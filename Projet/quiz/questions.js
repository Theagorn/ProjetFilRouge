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
        trueAnswer: 'Frodon \: "Le Mordor Gandalf, c\'est à gauche ou à droite ?"\nGandalf \: "A gauche"',
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
        trueAnswer: 'Gandalf : "Ohhh ! C\'est par ici !" \nMerry : "Ahh, ça lui revient !" \nGandalf : "Pas du tout, mais l\'air est moins nauséabond en bas. Dans le doute, Meriadoc, il faut toujours suivre son flair."',
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
        question: "Comment s'appelle le marais que traversent Frodon, Sam et Gollum ?", //---------------------------------
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
        trueAnswer: "Ce sont les Elfes de la Lórien, menés par Haldir, qui viennent aider les Hommes à la demande d'Elrond",
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
            { text: "A l'aube du 5eme jour", correct: true},
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
        question: "Quel peuple attaque et conquiert Isengard à la fin du film ?",
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
        trueAnswer: "C'est du poisson qu'il veut ! Il chante cela après avoir pêché un poisson dans le Lac Interdit",
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
        question: "Dans le film, comment s'appelle la principale ville du Gondor ?",
        difficulty: 1.3,
        trueAnswer: "L'ancienne capitale était Osgiliath, mais étant en ruine car perdue et prise à de nombreuses reprises, c'est aujourd'hui Minas Tirith la capitale",
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
            { text: "Qu'il raconte en détail la mort de Boromir", correct: false},
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
        trueAnswer: "Elrond rejoint Aragorn à Dunharrow pour lui donner l’épée reforgée de son ancêtre avant de lui dire qu’avec elle il avait le pouvoir d’ordonner aux morts parjures d’honorer leur serment d’antan de se battre au côté des Hommes contre les forces de Sauron",
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
            { text: "Gothmog", correct: false},
            { text: "Shelob", correct: false},
            { text: "Saroumane", correct: false},
            { text: "Le Roi Sorcier d'Angmar", correct: true},
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
        trueAnswer: "Il s’agit de Shelob, que même Sauron en personne craint car elle est la descendante d’Ungoliant, une araignée encore plus monstrueuse qui s’en est pris à Morgoth lui-même (le maître des Ténèbres dont Sauron était le lieutenant) qui n’a eu d’autres choix que d’appeler ses armées pour pouvoir se sauver",
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
            { text: "Elessar", correct: false},
        ]
    },
    {
        question: "Quel est le nom elfique d’Aragorn ?",
        difficulty: 2,
        trueAnswer: "On le surnomme Elessar, \"la Pierre Elfique\", qui est le nom de la pierre verte qu’il porte, offerte par Galadriel. Elle fait référence à une première Elessar (pierre elfique) forgée au Premier âge, dotée d’un grand pouvoir de régénération et emportée par Eärendil",
        answers:[
            { text: "Mithrandir", correct: false},
            { text: "Lindir", correct: false},
            { text: "Elessar", correct: true},
            { text: "Glorfindel", correct: false},
        ]
    },
    {
        question: "Qui est le père de Sam ?",
        difficulty: 2,
        trueAnswer: "Il s’agit de l’Ancien, qui était également jardinier de Bilbon avant Sam.",
        answers:[
            { text: "Le père Magotte", correct: false},
            { text: "Bilbon", correct: false},
            { text: "Taureau rugissant", correct: false},
            { text: "L'Ancien", correct: true},
        ]
    },
    {
        question: "Quel est l’un des talents des Hobbits ?",
        difficulty: 2,
        trueAnswer: "Afin de protéger leurs cultures des oiseaux comme les corbeaux, les Hobbits ont développé leur adresse au lancer de cailloux pour faire fuir les nuisibles.",
        answers:[
            { text: "Ils sont très adroits au lancer de cailloux", correct: true},
            { text: "Ils savent bien raconter les histoires", correct: false},
            { text: "Ils sont d’excellents musiciens", correct: false},
            { text: "Ils ont l’ouïe fine", correct: false},
        ]
    },
    {
        question: "Quelle est la différence entre un orque et un gobelin ?",
        difficulty: 2,
        trueAnswer: "Dans d’autres œuvres, ou même dans les films ils sont différents, mais dans l’univers créé par Tolkien, il s’agit juste d’une différence de sémantique. En effet, l’histoire de la guerre de l’Anneau étant recueillie dans un livre écrit par un Hobbit (Frodon en l’occurence), les ennemis qui sont identifiés comme des Orques par Frodon, sont appelés Gobelins en langue commune (de la même manière que les Nains les nomment rakhâs ou que les Elfes les nomment urug ou orco)",
        answers:[
            { text: "L'un vit en caverne et l'autre à la surface", correct: false},
            { text: "L'un à les oreilles pointues et l'autre non", correct: false},
            { text: "L'un est plus grand que l'autre", correct: false},
            { text: "Aucune, orque signifiant gobelin dans la langue des Hobbits", correct: true},
        ]
    },
    {
        question: "Comment les orques sont-ils apparus ?",
        difficulty: 2,
        trueAnswer: "Melkor, le vala maléfique, enleva des Elfes au bord du lac Cuiviénen où ces derniers s'éveillèrent. Il les a ensuite torturés et mutilés jusqu'à ce que les Elfes soient totalement déformés, physiquement comme psychologiquement, devenant ainsi les premiers orques",
        answers:[
            { text: "Comme les autres créatures apparues sur Arda", correct: false},
            { text: "Créés de toute pièce par Melkor le vala maléfique", correct: false},
            { text: "Ils étaient des Elfes autrefois, enlevés, torturés et mutilés", correct: true},
            { text: "Sauron les a façonnés en Mordor à base de plomb et de fer", correct: false},
        ]
    },
    {
        question: "A quoi sert un palantir ?",
        difficulty: 2,
        trueAnswer: "Contrairement à ce que l'on peut voir dans la série des \"Anneaux de Pouvoirs\", les palantiri, ou pierres de vision, servent à communiquer à distance. C’est un genre de téléphone ou de face time",
        answers:[
            { text: "A communiquer à distance avec un autre palantir", correct: true},
            { text: "A avoir des visions du futur", correct: false},
            { text: "A indiquer les faiblesses de son ennemi", correct: false},
            { text: "A lire dans les pensées de quelqu'un", correct: false},
        ]
    },
    {
        question: "Combien y a t-il de Grands Anneaux en tout ?",
        difficulty: 2,
        trueAnswer: "\"Trois anneaux pour les Rois Elfes sous le ciel,\nSept pour les Seigneurs Nains dans leurs demeures de pierre,\nNeuf pour les Hommes Mortels destinés au trépas,\nUn pour le Seigneur Ténébreux sur son sombre trône,\nAu pays de Mordor où s'étendent les Ombres. [...]\"Soit un total de 20 Grands Anneaux",
        answers:[
            { text: "1", correct: false},
            { text: "7", correct: false},
            { text: "13", correct: false},
            { text: "20", correct: true},
        ]
    },
    {
        question: "Complétez le poème de l’anneau : \"Un Anneau pour les gouverner tous, un Anneau pour les trouver, un Anneau pour les amener tous,…\"",
        difficulty: 2,
        trueAnswer: "\"Un Anneau pour les gouverner tous, \nun Anneau pour les trouver, \nun Anneau pour les amener tous, \net dans les ténèbres les lier, \nau pays de Mordor où s'étendent les Ombres\"",
        answers:[
            { text: "Pour ne montrer aucune pitié", correct: false},
            { text: "Et dans le Mordor les lier", correct: false},
            { text: "Grâce à cet anneau forgé", correct: false},
            { text: "Et dans les ténèbres les lier", correct: true},
        ]
    },
    {
        question: "Quel est le nom elfique de Sylvebarbe ?",
        difficulty: 2,
        trueAnswer: "Il s'agit de Fangorn, et étant le chef des Ents, il a donné son nom (elfique) à la forêt dans laquelle il vit",
        answers:[
            { text: "Syvebarbe", correct: false},
            { text: "Fangorn", correct: true},
            { text: "Calenardhon", correct: false},
            { text: "Celebrant", correct: false},
        ]
    },
    {
        question: "Qui est le mari de Galadriel ?",
        difficulty: 2,
        trueAnswer: "C'est Celeborn",
        answers:[
            { text: "Celeborn", correct: true},
            { text: "Celebrimbor", correct: false},
            { text: "Haldir", correct: false},
            { text: "Lindir", correct: false},
        ]
    },
    {
        question: "Qui est Arwen pour Galadriel ?",
        difficulty: 2,
        trueAnswer: "Celebrían, la fille de Galadriel, a épousé Elrond avec qui elle a eu Arwen et deux autres fils. Arwen est donc la petite fille de Galadriel",
        answers:[
            { text: "Sa fille", correct: false},
            { text: "Sa petite fille", correct: true},
            { text: "Son arrière petite fille", correct: false},
            { text: "Sa nièce", correct: false},
        ]
    },
    {
        question: "Qui est le père de Legolas ?",
        difficulty: 2,
        trueAnswer: "C'est Thranduil, seigneur de Felegoth",
        answers:[
            { text: "Elwe", correct: false},
            { text: "Haldir", correct: false},
            { text: "Fëanor", correct: false},
            { text: "Thranduil", correct: true},
        ]
    },
    {
        question: "Qui est le père de Gimli ?",
        difficulty: 2,
        trueAnswer: "C'est Gloïn de la maison de Durin",
        answers:[
            { text: "Gloïn", correct: true},
            { text: "Durin", correct: false},
            { text: "Thorin", correct: false},
            { text: "Dwalin", correct: false},
        ]
    },
    {
        question: "Comment se nomme le plus grand fleuve de la Terre du Milieu ?",
        difficulty: 2,
        trueAnswer: "Il s’agit du fleuve Anduin, qui longe l’Est des Monts Brumeux, prend sa source loin dans le Nord, au niveau des Ered Mithrin (Montagnes Grises) et qui rejoint la mer dans le Sud du Gondor, dans la baie de Belfalas",
        answers:[
            { text: "Le Brandevin", correct: false},
            { text: "Le Celebrant", correct: false},
            { text: "L'Anduin", correct: true},
            { text: "La rivière Lhûn", correct: false},
        ]
    },
    {
        question: "Comment s’appelle la plus haute montagne des Monts Brumeux ?",
        difficulty: 2,
        trueAnswer: "Ces 3 noms désignent la même montagne, le Caradhras étant le noms elfique, le Baraz Imbar celui donné par les Nains et la Corne Rouge étant son appellation en langue commune",
        answers:[
            { text: "Caradhras", correct: false},
            { text: "Baraz Imbar", correct: false},
            { text: "La Corne Rouge", correct: false},
            { text: "Les 3 car ces 3 noms désignent la même montagne mais dans des langues différentes", correct: true},
        ]
    },
    {
        question: "Quelles races faisaient partie de la dernière alliance (flash back du début du 1er film) ?",
        difficulty: 2,
        trueAnswer: "Il s’agit bien de la dernière alliance des Hommes et des Elfes, mais les Nains en faisaient également partie",
        answers:[
            { text: "Hommes & Elfes", correct: false},
            { text: "Hommes & Nains", correct: false},
            { text: "Nains & Elfes", correct: false},
            { text: "Hommes & Elfes & Nains", correct: true},
        ]
    },
    {
        question: "Quel âge a Aragorn au moment de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "Il a 87ans mais il ne les fait pas car il est le chef du peuple des Dúnedains, qui descendent de celui de Númenor et à qui les Valars ont octroyé une longue vie en remerciement de leur aide aux côtés des Elfes lors des affrontements contre Melkor",
        answers:[
            { text: "47 ans", correct: false},
            { text: "67 ans", correct: false},
            { text: "87 ans", correct: true},
            { text: "107 ans", correct: false},
        ]
    },
    {
        question: "Quelle est la forme de la fumée de pipe de Gandalf lorsque Bilbon et lui font des ronds de fumée ?",
        difficulty: 2,
        trueAnswer: "Bilbon fait un rond de fumée, et Gandalf fait un bateau qui passe à l’intérieur",
        answers:[
            { text: "Un rond", correct: false},
            { text: "Un bateau", correct: true},
            { text: "Un dragon", correct: false},
            { text: "Un Balrog", correct: false},
        ]
    },
    {
        question: "Dans les films, où était Sam lorsqu'il surprit la conversation entre Gandalf et Frodon ?",
        difficulty: 2,
        trueAnswer: "Il était \"à la coupe de la pelouse, sous la fenêtre\"",
        answers:[
            { text: "à la coupe de la pelouse", correct: true},
            { text: "à la coupe de la fenêtre", correct: false},
            { text: "à la coupe de la porte", correct: false},
            { text: "dans un placard", correct: false},
        ]
    },
    {
        question: "Combien de lapin(s) Gollum chasse t’il pour Frodon et Sam ?",
        difficulty: 2,
        trueAnswer: "Il en ramène 2",
        answers:[
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
        ]
    },
    {
        question: "Comment s'appelle la porte ouest de la Moria ?",
        difficulty: 2,
        trueAnswer: "Elle s’appelle la porte de Durin, construite par le Nain Narvi, maitre forgeron de Khazâd-dûm au Second Âge, avec l’aide de son ami l’Elfe Celebrimbor, qui inscrivit les ornementations et inscriptions en Ithildin (c’est pour cela que les insciptions sont en elfique)",
        answers:[
            { text: "La porte Ouest", correct: false},
            { text: "La porte des Nains", correct: false},
            { text: "La porte de la Moria", correct: false},
            { text: "La porte de Durin", correct: true},
        ]
    },
    {
        question: "Qu’est il écrit au dessus de la porte de Durin ?",
        difficulty: 2,
        trueAnswer: "Il est écrit très exactement : « Les Portes de Durin, Seigneur de la Moria. Parlez, ami, et entrez. Moi, Narvi, je l'ai faite. Celebrimbor de Houssaye a gravé ces signes »",
        answers:[
            { text: "Parlez, ami, et entrez", correct: true},
            { text: "Frappez, ami, et entrez", correct: false},
            { text: "Entrez, ami, et partez", correct: false},
            { text: "Frappez, ami, et payez", correct: false},
        ]
    },
    {
        question: "Quel est le nom de la Moria en Khuzdul (langue des Nains) ?",
        difficulty: 2,
        trueAnswer: "Khazâd désigne les Nains et dûm signifie maison, il s’agit donc de Khazâd-dûm (=la maison des Nains)",
        answers:[
            { text: "Khuzdul-dûm", correct: false},
            { text: "Khazâd-dûm", correct: true},
            { text: "Kheled-dûm", correct: false},
            { text: "Zirak-dûm", correct: false},
        ]
    },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },
    // {
    //     question: "",
    //     difficulty: 2,
    //     trueAnswer: "",
    //     answers:[
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //         { text: "", correct: false},
    //     ]
    // },

];