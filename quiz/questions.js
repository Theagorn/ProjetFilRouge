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
    {
        question: "Qui a fondé le royaume de Lórien ?",
        difficulty: 2,
        trueAnswer: "Après la chute de son royaume en Eregion, elle part de l’autre côté des Monts Brumeux avec son mari Celeborn et elle va fonder le royaume de Lórien, notamment grâce à son anneau, Nenya, l’un des 3 anneaux des Elfes.",
        answers:[
            { text: "Celeborn", correct: false},
            { text: "Celebrimbor", correct: false},
            { text: "Gil Galad", correct: false},
            { text: "Galadriel", correct: true},
        ]
    },
    {
        question: "Comment se nomment les montagnes « tranchantes comme des rasoirs » que doit traverser la communauté pour aller au Mordor ?",
        difficulty: 2,
        trueAnswer: "Il s’agit des Emyn Muil, ou collines de la tristesse, qui se situent entre le fleuve Anduin et le Marais des Morts.",
        answers:[
            { text: "Ered Mithrin", correct: false},
            { text: "Emyn Muil", correct: true},
            { text: "Ered Muil", correct: false},
            { text: "Elen Muil", correct: false},
        ]
    },
    {
        question: "Qui est Tom Bombadil ?",
        difficulty: 2,
        trueAnswer: "Il s’agit d’un être mystérieux, toujours joyeux, trapu, avec une barbe brune. Il est plus grand qu’un Nain mais plus petit qu’un Homme et il se présente comme étant « l’Aîné » car il était « ici avant la rivière et les arbres » il « se souvient de la première goutte de pluie et du premier gland. Il traçait des sentiers avant les Grandes Gens et a vu les Petites Gens arriver. Il était ici avant les Rois et les tombeaux et les Esprits des Tertres. Quand les Elfes ont passé dans l’Ouest, Tom était déjà ici, avant que les mers soient fléchies. » — Le Seigneur des Anneaux — Livre I — Chapitre 7.",
        answers:[
            { text: "un Homme", correct: false},
            { text: "un Nain", correct: false},
            { text: "un Maïa", correct: false},
            { text: "personne ne le sait", correct: true},
        ]
    },
    {
        question: "Comment s’appelle la femme de Tom Bombadil ?",
        difficulty: 2,
        trueAnswer: "Comment s’appelle la femme de Tom Bombadil ?",
        answers:[
            { text: "Baie d'Or", correct: true},
            { text: "Rosée d'Or", correct: false},
            { text: "Blé d'Or", correct: false},
            { text: "Bleuet d'Or", correct: false},
        ]
    },
    {
        question: "Que se passe t-il quand Frodon met l’Anneau devant Tom Bombadil ?",
        difficulty: 2,
        trueAnswer: "« et il passa l’Anneau à son doigt. Merry se retourna pour lui dire quelque chose et il sauta en réprimant une exclamation. Frodon fut ravi (en un sens) : c’était bien son propre anneau, car son ami contemplait, déconcerté, son fauteuil et ne le voyait manifestement pas. Il se leva et se glissa furtivement du coin du feu à la porte extérieure. Hé là ! Cria Tom, lui lançant un regard de ses yeux brillants qui semblaient parfaitement le voir. Hé ! Venez ici, Frodon, là-bas ! Où allez-vous donc ? Le vieux Tom Bombadil n’est pas encore aveugle à ce point. Otez votre anneau d’or ! Votre main est plus belle sans lui. Revenez! Abandonnez votre jeu et asseyez-vous à côté de moi ! — Le Seigneur des Anneaux — Livre I — Chapitre 7.",
        answers:[
            { text: "Tom essaie de prendre l’Anneau", correct: false},
            { text: "Tom continue à voir Frodon", correct: true},
            { text: "Frodon voit Tom comme s’il était Sauron", correct: false},
            { text: "Il ne se passe rien", correct: false},
        ]
    },
    {
        question: "Que se passe t-il quand Tom Bombadil met l’Anneau ?",
        difficulty: 2,
        trueAnswer: "« Puis il passa l’Anneau au bout de son petit doigt et l’éleva vers la lumière de la chandelle. Pendant un moment, les Hobbits ne remarquèrent rien d’étrange. Puis ils eurent le souffle coupé : il n’y avait aucun signe de disparition de Tom ! Tom rit de nouveau, puis il lança l’Anneau en l’air et celui-ci disparut dans un éclair. Frodon poussa un cri et Tom se pencha en avant pour le lui tendre en souriant.» — Le Seigneur des Anneaux — Livre I — Chapitre 7.",
        answers:[
            { text: "Frodon essaie de le récupérer", correct: false},
            { text: "Tom devient invisible", correct: false},
            { text: "Tom prend l’apparence de Sauron", correct: false},
            { text: "rien", correct: true},
        ]
    },
    {
        question: "Dans les livres, qui attaque les quatre Hobbits dans la Vieille Forêt qui borde le Pays de Bouc ?",
        difficulty: 2,
        trueAnswer: "Le Vieil Homme Saul, le Huorn avec le cœur le plus pourri de cette forêt, attrape Merry et Pippin dans ses racines, les coinçant et les étouffant (Huorn= probablement d’anciens Ents très âgés devenus des arbres au cours du temps, de nature agressive et toujours capables de se mouvoir). Ils sont sauvés par Tom Bombadil.",
        answers:[
            { text: "Tom Bombadil", correct: false},
            { text: "un Nazgûl", correct: false},
            { text: "Le vieil Homme Saul", correct: true},
            { text: "un orque", correct: false},
        ]
    },
    {
        question: "Sur la route de Fondcombe, qui sauve(nt) Frodon dans les livres et l’amène(nt) jusqu’à Fondcombe ?",
        difficulty: 2,
        trueAnswer: "« Soudain apparut en bas un cheval blanc […]. Le manteau du cavalier flottait derrière lui et son capuchon était rejeté en arrière ; ses cheveux dorés volaient, chatoyants, au vent de sa course. […] _Ai na vedui Dunadan ! Mae govannen ! [...] _Voici Glorfindel, qui demeure dans la maison d’Elrond, dit Grand-Pas. _Salut, et bonne rencontre, enfin ! Dit le Seigneur Elfe à Frodon. J’ai été envoyé de Fondcombe à votre recherche. Nous craignions que vous ne fussiez en danger sur la Route. » — Le Seigneur des Anneaux — Livre I — Chapitre 12.",
        answers:[
            { text: "Glorfindel", correct: true},
            { text: "Arwen", correct: false},
            { text: "Elrond", correct: false},
            { text: "Elrohir & Elladan", correct: false},
        ]
    },
    {
        question: "Dans les livres, qui arrive à la tête des cavaliers rohirrims avec Gandalf à la fin de la bataille du Gouffre de Helm ?",
        difficulty: 2,
        trueAnswer: "« Là, sur une crête, apparut soudain un cavalier vêtu de blanc […]. Derrière lui, dévalant par les longues pentes, venait un millier d’hommes à pied, l’épée à la main. Parmi eux s’avançait un homme, grand et fort. Son bouclier était rouge […], il porta à ses lèvres un grand cor noir et fit retentir une éclatante sonnerie. « Erkenbrand ! Crièrent les cavaliers. Erkenbrand ! » — Le Seigneur des Anneaux — Livre III — Chapitre 7.",
        answers:[
            { text: "Eomer", correct: false},
            { text: "Eärnur", correct: false},
            { text: "Gamelin", correct: false},
            { text: "Erkenbrand", correct: true},
        ]
    },
    {
        question: "Qui était Lùthien, la dame de la chanson que chante Aragorn en montant la garde la nuit, avant les événement du Mont Venteux ?",
        difficulty: 2,
        trueAnswer: "Lùthien est la fille de Thingol et de Melian, respectivement le Roi du royaume Elfe de Doriath (le plus important de tout le Beleriand et dans lequel Galadriel a séjourné) et une Maïa (sous divinité rattachée à une divinité plus importante) en charge de soigner les plantes du jardin de Valinor. Thingol étant le frère de Olwë, le grand père maternelle de Galadriel. Lùthien est donc la grande tante de Galadriel; de plus elle est l'arrière grand mère d'Elros, premier roi de Númenor et ancêtre d'Aragorn.",
        answers:[
            { text: "une de ses ancêtres lointaines", correct: false},
            { text: "la fille du plus grand Roi Elfe du Beleriand et d’une Maïa", correct: false},
            { text: "la grande tante et amie de Galadriel", correct: false},
            { text: "les trois à la fois", correct: true},
        ]
    },
    {
        question: "Qui était Beren, l’époux de Lùthien ?",
        difficulty: 2,
        trueAnswer: "Il s’agit du fils de Barahir, de la maison de Bëor du peuple des Edains (Hommes) alliée des Eldars (Elfes) dans les guerres contre Morgoth.",
        answers:[
            { text: "Le fils de Barahir", correct: true},
            { text: "le fils d’un puissant Roi Elfe", correct: false},
            { text: "le père d’Elrond", correct: false},
            { text: "les trois à la fois", correct: false},
        ]
    },
    {
        question: "Lequel de ces personnages n’a jamais porté l’Anneau ?",
        difficulty: 2,
        trueAnswer: "Facile, c’est Gandalf ! Dès qu’il s’en approche, il ressent le pouvoir de Sauron et refuse de le toucher par peur d’être corrompu par lui.",
        answers:[
            { text: "Sam", correct: true},
            { text: "Isildur", correct: false},
            { text: "Gandalf", correct: false},
            { text: "Sauron", correct: false},
        ]
    },
    {
        question: "Comment s’appelle la grande région à l’Ouest des Mont Brumeux ?",
        difficulty: 2,
        trueAnswer: "Par rapport aux Monts Brumeux, le Rhovanion se trouve à l’Est, le Lindon à l’extrême Ouest de la Terre du Milieu et le Rhûn au Sud Est. C’est bien l’Eriador qui se trouve à l’Ouest des Monts Brumeux.",
        answers:[
            { text: "le Rhonavion", correct: false},
            { text: "l’Eriador", correct: true},
            { text: "le Lindon", correct: false},
            { text: "le Rhûn", correct: false},
        ]
    },
    {
        question: "Qui a aidé Sauron à forger les anneaux des Hommes et des Nains ?",
        difficulty: 2,
        trueAnswer: "Il s’agit de Celembrimbor, le petit-fils de Fëanor, qui fut berné par Sauron, travaillant de concert avec lui pour forger ces anneaux de pouvoirs. Heureusement il forgea seul les trois anneaux des Elfes.",
        answers:[
            { text: "Galadriel", correct: false},
            { text: "Celeborn", correct: false},
            { text: "Fëanor", correct: false},
            { text: "Celebrimbor", correct: true},
        ]
    },
    {
        question: "A qui ont été donnés en premier les trois anneaux elfiques ?",
        difficulty: 2,
        trueAnswer: "Dans le Silmarillion, il est dit qu’un fut donné à Galadriel et les deux autres à Gil Galad, qui en donna un à Círdan (qui le donnera ensuite à Gandalf à son arrivée en Terre du Milieu), puis qui donna le second à Elrond peu avant sa mort.",
        answers:[
            { text: "Gil Galad (qui en avait deux) & Galadriel", correct: true},
            { text: "Círdan & Gil Galad & Gandalf", correct: false},
            { text: "Círdan & Galadriel & Gil Galad", correct: false},
            { text: "Círdan & Eärendil & Lùthien)", correct: false},
        ]
    },
    {
        question: "Quel(le) est l’Elfe vivant(e) le/la plus vieux/vieille connu(e) en Terre du Milieu au moment de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "Il s’agit de Círdan, qui serait le dernier en Terre du Milieu des premiers Elfes à s’être éveillé aux abords du lac Cuiviénen, il y a plus de 7 500ans. A titre de comparaison, il a 300 ans de plus que Galadriel née au Valinor, il aurait environ 900 ans de plus que Gil Galad et plus d’un millénaire d’écart avec Eärendil tout deux nés au Beleriand. ",
        answers:[
            { text: "Galadriel", correct: false},
            { text: "Círdan", correct: true},
            { text: "Eärendil", correct: false},
            { text: "Gil Galad", correct: false},
        ]
    },
    {
        question: "Lequel de ces noms ne désigne pas l’un des trois anneaux des Elfes ?",
        difficulty: 2,
        trueAnswer: "Les trois anneaux des Elfes sont Narya (l’anneau de feu), Nenya (celui de l’eau) et Vilya (l’anneau de l’air).",
        answers:[
            { text: "Narya", correct: false},
            { text: "Nenya", correct: false},
            { text: "Nerya", correct: true},
            { text: "Vilya", correct: false},
        ]
    },
    {
        question: "Lequel de ces personnages ne porte pas l’un des trois anneaux des elfes au moment de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "Au moment de la Guerre de l’Anneau, l’anneau de feu est en possession de Gandalf, celui de l’eau est à Fondcombe avec Elrond et l’anneau de l’air est au doigt de Galadriel.",
        answers:[
            { text: "Círdan", correct: true},
            { text: "Galadriel", correct: false},
            { text: "Gandalf", correct: false},
            { text: "Elrond", correct: false},
        ]
    },
    {
        question: "Quel est le lien entre Aragorn et Arwen au début des évènements de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "Aragorn est un descendant de la famille royale de Númenor dont le premier n’était autre que Elros, frère jumeau d’Elrond, qui a choisi une vie de mortel. Par conséquent, Arwen, fille d’Elrond et Aragorn, descendant d’Elros, sont des cousins éloignés (il y a plus d’une quarantaine de générations qui les séparent donc pas de risque de consanguinité!).",
        answers:[
            { text: "frère et sœur", correct: false},
            { text: "mari et femme", correct: false},
            { text: "cousin éloigné", correct: true},
            { text: "aucun", correct: false},
        ]
    },
    {
        question: "Pourquoi Denethor II est si défaitiste face à la puissance du Mordor ?",
        difficulty: 2,
        trueAnswer: "Denethor II a utilisé le palantir de Minas Tirith pour défier Sauron. Ce dernier lui a montré de fausses images de la ruine du Gondor en retour. Ils se sont battus par esprit interposé et Sauron a pris l’avantage petit à petit, vieillissant et altérant le jugement de Denethor II au fur et à mesure.",
        answers:[
            { text: "à cause de la mort de Boromir son fils préféré", correct: false},
            { text: "c’est son caractère depuis la naissance", correct: false},
            { text: "il veut trahir les Hommes et rejoindre Sauron comme l’ont fait Saroumane et Grima", correct: false},
            { text: "il a trop utilisé un palantir via lequel Sauron l’a démoralisé en lui montrant la chute et la ruine totale du Gondor", correct: true},
        ]
    },
    {
        question: "Dans les livres, quelle ville est reprise par Aragorn grâce à l’armée des Morts ?",
        difficulty: 2,
        trueAnswer: "Hors celle de Minas Tirith, le gros des troupes du Gondor se trouve à Pelargir (qui se situe sur l’Anduin) qui est en proie aux attaques des Corsaires d’Umbar. Ensuite Aragorn a délivré les morts de leur serment puis est monté dans les bateaux corsaires avec de nombreuses garnisons de Pelargir afin de remonter le fleuve et venir en aide à Minas Tirith.",
        answers:[
            { text: "Osgiliath", correct: false},
        { text: "Pelargir", correct: true},
            { text: "Minas Tirith", correct: false},
            { text: "Cair Andros", correct: false},
        ]
    },
    {
        question: "Lors de la bataille du Gouffre de Helm, qu’est-ce qui amène la victoire aux Hommes dans les livres ?",
        difficulty: 2,
        trueAnswer: "« Les armées d’Isengard rugissaient, oscillant tantôt d’un côté, tantôt de l’autre, ne sachant quelle peur affronter. Le cor sonna de nouveau dans la tour. La compagnie du roi chargea par la brèche du Fossé. Du haut des collines bondit Erkenbrand, seigneur de l’Ouestfolde [...]. Le Cavalier Blanc fondit sur ses adversaires, et la terreur de sa venue les emplit de folie. Les hommes sauvages tombaient à plat ventre devant lui. Les Orques couraient chancelants, poussant des cris aigus, jetant épées et lances. Ils fuirent comme une fumée noire chassée par un vent impétueux. Gémissant, ils passèrent dans l’ombre patiente des arbres ; et de cette ombre, aucun ne devait jamais ressortir. » — Le Seigneur des Anneaux — Livre III — Chapitre 7.",
        answers:[
            { text: "la charge des Rohirrim venant de l’Est", correct: false},
            { text: "la forêt qui apparaît mystérieusement au Nord et qui affole les orques", correct: false},
            { text: " la charge du roi Théoden venant du Sud, couplée au cor de Helm qui retentit et résonne dans le gouffre comme si des milliers de soldats en sortaient", correct: false},
            { text: "les trois à la fois", correct: true},
        ]
    },
    {
        question: "Combien y a t’il de feux d’alarme dans les livres entre Minas Tirith et Edoras?",
        difficulty: 2,
        trueAnswer: "Comme le dit Gandalf à Pippin dans Le Seigneur des Anneaux — Livre V — Chapitre 1 : « Vois ! Les feux d’alarme du Gondor s’allument, appelant à l’aide. La guerre embrase le pays. Vois, les flammes montent sur l’Amon Dîn, de même que sur l’Eilenach ; et les voici qui se portent rapidement vers l’ouest : le Nardol, l’Erelas, le Min-Rimmon, le Calenhad, enfin le Halifirien aux frontières du Rohan. »",
        answers:[
            { text: "7", correct: true},
            { text: "10", correct: false},
            { text: "13", correct: false},
            { text: "16", correct: false},
        ]
    },
    {
        question: "Dans les livres, comment meurt Théoden ?",
        difficulty: 2,
        trueAnswer: "Cette fois pas de piège, il meurt comme dans le film, tué par le Roi Sorcier d’Angmar.",
        answers:[
            { text: "tué par le Roi Sorcier d’Angmar", correct: true},
            { text: "il ne meurt pas", correct: false},
            { text: "tué par un troll à la bataille de la Porte Noire", correct: false},
            { text: "écrasé par un oliphant", correct: false},
        ]
    },
    {
        question: "Lequel de ces personnages ne fait pas partie des Maïar (sous divinité) ?",
        difficulty: 2,
        trueAnswer: "Gandalf, ou Olórin de son nom en Valinor, est un des Maïar au service de Manwë, le Vala de l’Air et nommé Roi du Monde des Valar par Ilúvatar. Sauron, connu à ses début comme Mairon l’Admirable, était un Maïa au service d’Aulë, le Vala de la forge (au même titre que Curunir, plus connu comme Saroumane). Il fut ensuit corrompu par Melkor, et devint son plus fidèle et plus puissant lieutenant. Les Balrogs étaient, comme Sauron, des Maïar attirés et corrompus par Melkor. Ils étaient les plus puissants de ses serviteurs, dominés seulement par Sauron lui-même. Leur chef était Gothmog.",
        answers:[
            { text: "Gandalf", correct: false},
            { text: "Sauron", correct: false},
            { text: "Sylvebarbe", correct: true},
            { text: "un Balrog", correct: false},
        ]
    },
    {
        question: "Dans les livres qui dirige la défense de Minas Tirith pendant la bataille des champs du Pelenor ?",
        difficulty: 2,
        trueAnswer: "Une fois que Denethor II a fait son saut de l’ange, c’est le Prince Imrahil de Dol Amroth qui dirige les défense de la cité de Minas Tirith.",
        answers:[
            { text: "Gandalf", correct: false},
            { text: "Imrahil", correct: true},
            { text: "Aragorn", correct: false},
            { text: "Ingold", correct: false},
        ]
    },
    {
        question: "D’où partent les bateaux elfes à destination des Terres Immortelles ?",
        difficulty: 2,
        trueAnswer: "Ils partent du port de Mithlond (en sindarin) ou Havres Gris, qui se situe dans le Lindon, la région la plus à l’Ouest de la Terre du Milieu. Il fut construit par Círdan le Charpentier pour y construire ses navires, les seuls capables de voguer jusqu’aux Terres Immortelles.",
        answers:[
            { text: "Fondcombe", correct: false},
            { text: "Caras Galadhon", correct: false},
            { text: "Dol Amroth", correct: false},
            { text: "Les Havres Gris", correct: true},
        ]
    },
    {
        question: "Quel est le nom elfique de Fondcombe ?",
        difficulty: 2,
        trueAnswer: "C’est Imladris, qui signifie « Vallée Cachée », car au départ ce n’était qu’un endroit où Elrond et son armée s’étaient réfugiés pour se cacher de Sauron.",
        answers:[
            { text: "Imlad Morgul", correct: false},
            { text: "Rivendell", correct: false},
            { text: "Imlad Mithrin", correct: false},
            { text: "Imladris", correct: true},
        ]
    },
    {
        question: "Quel est le nom elfique des Havres Gris ?",
        difficulty: 2,
        trueAnswer: "Il s’agit de Mithlond ; les Ered Mithrin (ou Montagnes Grises) sont une chaîne de montagnes au Nord de la Terre du Milieu (au Nord d’Erebor), Mithrandir est l’un des nombreux noms de Gandalf et Imlad Mithrin est inventé.",
        answers:[
            { text: "Mithlond", correct: true},
            { text: "Ered Mithrin", correct: false},
            { text: "Mithrandir", correct: false},
            { text: "Imlad Mitrhin)", correct: false},
        ]
    },
    {
        question: "Parmi ces noms en khuzdul, lequel ne désigne pas l’un des trois pics au-dessus de Khazâd dûm ?",
        difficulty: 2,
        trueAnswer: "Comme le dit Gimli à Frodon :« Là-bas se dressent Barazinbar, Cornerouge, le cruel Caradhras ; et derrière lui, le Pic d’Argent et la Tête Nuageuse : Celebdil le Blanc et Fanuidhol le Gris, que nous appelons Zirakzigil et Bundushathûr. » — Le Seigneur des Anneaux — Livre II — Chapitre 3. Le Kheled-zâram, ou Lac du Miroir, est un lac qui se situe prês de la porte Est, à l’extérieur de la Moria.",
        answers:[
            { text: "Barazinbar", correct: false},
            { text: "Kheled-zâram", correct: true},
            { text: "Zirakzigil", correct: false},
            { text: "Bundushathûr", correct: false},
        ]
    },
    {
        question: "Lequel de ces thermes ne désigne pas la Moria ?",
        difficulty: 2,
        trueAnswer: "l s’agit respectivement des noms de la Moria en Khuzdûl (langue des Nains), en langue commune et en Sindarin (un des langages elfiques). Belegost (ou Gabilgathol en Khuzdûl) était une autre cité naine, la plus grande du premier âge se trouvant sur les pentes Nord du plus haut sommet des Ered Luin.",
        answers:[
            { text: "Khazâd dûm", correct: false},
            { text: "Cavenain", correct: false},
            { text: "Hadhodrond", correct: false},
            { text: "Belegost", correct: true},
        ]
    },
    {
        question: "Quel était le dernier Roi du Gondor ?",
        difficulty: 2,
        trueAnswer: "Le Roi Sorcier d’Angmar envoya un messager en 2050 du Troisième Age à Eärnur, Roi du Gondor, l’invitant à se présenter seul devant Minas Morgul pour le défier. Sans descendance et malgré les contre-indications de Mardil son conseiller et intendant, Eärnur accepta le défi et partit seul à Minas Morgul. Personne ne le revit plus jamais et Mardil fut le premier intendant à gouverner le Gondor et depuis, c’est sa descendance qui hérita des rênes du pouvoir jusqu’à Denethor II, le dernier intendant.",
        answers:[
            { text: "Eärnil II", correct: false},
            { text: "Eärendil", correct: false},
            { text: "Eärnur", correct: true},
            { text: "Eärendur", correct: false},
        ]
    },
    {
        question: "Quel était le dernier Roi du Grand Royaume de l’Arnor ?",
        difficulty: 2,
        trueAnswer: "texte de réponse",
        answers:[
            { text: "Eärnil II", correct: false},
            { text: "Eärendil", correct: false},
            { text: "Eärnur", correct: false},
            { text: "Eärendur", correct: true},
        ]
    },
    {
        question: "Laquelle de ces montagnes ne se trouve pas dans le Mordor ?",
        difficulty: 2,
        trueAnswer: "L’Orodruin est le nom elfique de la Montagne du Destin. De même pour les Ered Lithui et les Ephel Dúath, qui sont les Monts Cendrés et les Remparts de l’Ombre, les deux chaînes de montagnes qui encadrent et fortifient le Mordor : l’Ered Lithui au Nord et les Ephel Dúath à l’Ouest et au Sud. Au contraire de Gundabad qui se situe à l’extrémité Nord des Monts Brumeux.",
        answers:[
            { text: "Gundabad", correct: true},
            { text: "Orodruin", correct: false},
            { text: "Ered Lithui", correct: false},
            { text: "Ephel Dúath", correct: false},
        ]
    },
    {
        question: "Qu’est ce qui ne fait pas partie du Mordor ?",
        difficulty: 2,
        trueAnswer: "La Morannon désigne la Porte Noire du Mordor, la mer de Nurn se situe dans le Sud Est du Mordor tandis que le plateau de Gorgoroth désigne la grand pleine du Mordor où se trouve la Montagne du Destion, ainsi que Barad-Dûr, la grande forteresse de Sauron. L’Angmar est une région du Nord de l’Eriador, collée au versant Ouest des Monts Brumeux dans leur extrémité septentrionale (=au Nord).",
        answers:[
            { text: "la Morannon", correct: false},
            { text: "la mer de Nurn", correct: false},
            { text: "l’Angmar", correct: true},
            { text: "le plateau de Gorgoroth", correct: false},
        ]
    },
    {
        question: "Quel est le cri de guerre des Nains ?",
        difficulty: 2,
        trueAnswer: "« Mais une silhouette sombre et courte, que personne n’avait remarquée, surgit des ombres avec un cri rauque : Baruk Khazâd ! Khazâd ai-mênu ! Une hache fendit l’air puis revint. Deux Orques tombèrent décapités » — Le Seigneur des Anneaux — Livre III — Chapitre 7. Cela signifie « Les haches des Nains ! Les Nains sont sur vous ! » ",
        answers:[
            { text: "Balin Fundinul Uzbad Khazaddûmu !", correct: false},
            { text: "Baruk Khazâd ! Khazâd ai-mênu !", correct: true},
            { text: "Ishkhaqwi ai durugnul !", correct: false},
            { text: "Uzbad Azaghâl Zirakayabund!", correct: false},
        ]
    },
    {
        question: "Pourquoi ne voit-on jamais de femmes Nains ?",
        difficulty: 2,
        trueAnswer: "« Elles sont, par la voix et l’apparence, et par leur costume lorsqu’elles doivent voyager, si semblables à leurs pendants masculins que les yeux et les oreilles des autres peuples n’arrivent pas à les distinguer. Ceci est à l’origine de l’absurde croyance, fort répandue chez les Hommes, voulant qu’il n’y ait pas de femmes naines, et que les Nains soient « issus de la pierre ». » — Le Seigneur des Anneaux — Appendice A — Le Peuple de Durin. Cela est renforcé par le fait que les femmes naines voyagent peu et qu’elles sont peu nombreuses (moins d’un tiers de la population).",
        answers:[
            { text: "Parce qu’elles sont aussi barbues que les hommes Nains", correct: true},
            { text: "Parce qu’elles sont pacifiques et ne prennent pas part aux combats", correct: false},
            { text: "Parce que les nains jaillissent des trous dans le sol", correct: false},
            { text: "Parce qu’elles sont toutes mortes lors de la bataille de Nargûn Azaghazan", correct: false},
        ]
    },
    {
        question: "D’où vient le mithril ?",
        difficulty: 2,
        trueAnswer: "Le mithril est un minéral unique, aux propriétés particulières que l’on trouve uniquement dans la Moria (certains gisements furent exploités à Númenor lors du Second Âge). L’extraction du mithril à Khazâd-dûm débuta au début du Second Âge mais le gisement principal devait être déjà connu du temps de Durin Ier Trompe la mort durant les jours Anciens et au Premier Age, soit avant la disparition des Silmarils. Donc l’origine donnée dans la série « Les Anneaux de Pouvoir », en plus d’être farfelue, incohérente et capillotractée est tout bonnement impossible (comme beaucoup de choses dans cette série...).",
        answers:[
            { text: "C’est un alliage créé par Celebrimbor", correct: false},
            { text: "il s’agit de l’un des Silmarils perdu qui s’est retrouvé dans un arbre au sommet du Caradhras, qui a ensuite été foudroyé pendant qu’un guerrier elfe et un Balrog s’affrontaient", correct: false},
            { text: "des filons de la Moria", correct: true},
            { text: "c’était un piège de Morgoth pour pousser les Nains à réveiller le Balrog", correct: false},
        ]
    },
    {
        question: "Qui était le premier Roi de Númenor ?",
        difficulty: 2,
        trueAnswer: "« Au pied de la Montagne se dressaient les tombes des Rois et sur une colline voisine Armenelos, la plus belle des cités, où se trouvaient la forteresse et la tour construites par le fils d'Eärendil, Elros, que les Valar avaient nommé premier Roi des Dúnedain. » — Akallabêth, Le Silmarillion. Elros se trouve être le frère jumeau d’Elrond.",
        answers:[
            { text: "Elros", correct: false},
            { text: "le frère d’Elrond", correct: false},
            { text: "le fils d’Eärendil", correct: false},
            { text: "les trois car il s’agit de la même personne", correct: true},
        ]
    },
    {
        question: "Quelle arme n’apparaît pas dans les livres du Seigneur des Anneaux ?",
        difficulty: 2,
        trueAnswer: "Glamdring, Narzil et Aeglos sont respectivement l’épée de Gandalf, celle d’Elendil (et de ses descendants) et la lance de Gil Galad, qui apparaissent toutes dans le Seigneurs des Anneaux et leurs Appendices. Au contraire d’Orcrist qui est l’épée de Thorïn dans le Hobbit (qui est trouvée en même temps que Glamdring et Dard. Orcrist (=fendoir à gobelins) était l’épée sœur de Glamdring qui furent toutes les deux forgées à Gondolin pendant le Premier Age. Elle a une dent de dragon comme manche.",
        answers:[
            { text: "Glamdring", correct: false},
            { text: "Narzil", correct: false},
            { text: "Aeglos", correct: false},
            { text: "Orcrist", correct: true},
        ]
    },
    {
        question: "Dans les livres, que prédit Galadriel à Legolas s’il continue la quête de l’Anneau en allant vers le sud ?",
        difficulty: 2,
        trueAnswer: "Elle lui dit qu’il y verra la Grande Mer, Belegaer, pour la première fois de sa vie, et qu’à cette vue, il ressentira pour la première fois l’envie irrépressible de partir de la Terre du Milieu pour les Terres Immortelles. Et ce sentiment, comme chez la majorité des Elfes, ne ferait que s’accroître au cours du temps. Il attendra la mort de son ami le roi Elessar (Aragorn) en 120 du 4e Age pour partir en Aman, de l’autre côté de Belegaer, accompagné de Gimli.",
        answers:[
            { text: "Qu’il va y trouver l’amour", correct: false},
            { text: "Qu’il va y trouver la mort", correct: false},
            { text: "Qu’à la vue de la mer, il ressentira l’envie de partir pour Valinor", correct: true},
            { text: "Qu’il va se lier d’amitié avec un Nain", correct: false},
        ]
    },
    {
        question: "Que fait Gimli avec les cheveux que lui donne Galadriel ?",
        difficulty: 2,
        trueAnswer: "« Et si jamais je retrouve les forges de mon pays, il sera monté dans un cristal impérissable pour demeurer un bien de ma maison et un gage de bonne volonté entre la Montagne et la Forêt jusqu’à la fin des temps » — Le Seigneur des Anneaux — Livre II — Chapitre 8.",
        answers:[
            { text: "proposition 1Il les fait mettre sur un bijou", correct: true},
            { text: "il les perd à la bataille du Gouffre de Helm", correct: false},
            { text: "il les perd à la bataille des champs du Pelenor", correct: false},
            { text: "l’histoire ne le dit pas", correct: false},
        ]
    },
    {
        question: "Que fait Gimli au début du 4e Âge de la Terre ?",
        difficulty: 2,
        trueAnswer: "Après les évènements de la Guerre de l’Anneau, Eomer, nouveau roi du Rohan, en remerciement de son aide (il lui a sauvé la vie pendant la bataille du Gouffre) autorise Gimli à faire venir d’autres Nains d’Erebor dans les cavernes étincelantes (dans le Gouffre de Helm) pour s’y installer et fonder sa propre cité.",
        answers:[
            { text: "Il repart vivre à Erebor", correct: false},
            { text: "Il part reconquérir la Moria vu que le Balrog est mort", correct: false},
            { text: "Il part fonder son propre royaume dans le Rohan", correct: true},
            { text: "Il s’installe en Arnor où il devient conseiller d’Aragorn", correct: false},
        ]
    },
    {
        question: "Qu’est-ce que la Flèche rouge ?",
        difficulty: 2,
        trueAnswer: "«Il tenait à la main une seule flèche, empennée de noir et barbelée d'acier, mais la pointe en était peinte en rouge. » Le Seigneur des Anneaux - Livre V - Chapitre 3 . Dans ce passage, c’est Hirgon, le messager de Denethor, qui amène la Flèche rouge au roi Théoden afin de quérir son aide pour défendre Minas Tirith, en souvenir du Serment d’Eorl qui promet l'assistance du Rohan au cas où le Gondor le requière.",
        answers:[
            { text: "Le surnom d’une montagne", correct: false},
            { text: "Le nom d’une des tours de garde du Mordor", correct: false},
            { text: "La traduction du nom de la lance de Gil Galad", correct: false},
            { text: "Un objet permettant au Gondor de demander symboliquement de l’aide à ses alliés", correct: true},
        ]
    },
    {
        question: "Quelle est la particularité du cor de Boromir ?",
        difficulty: 2,
        trueAnswer: "Il s’agirait d’un cor magique qui pourrait être entendu au Gondor peu importe où se trouve son utilisateur. Faramir entendit la sonnerie du cor de Boromir et fit également un rêve de la mort de son frère (mais ce rêve n’est pas dû au cor).",
        answers:[
            { text: "Peu importe où l’on se trouve, on l’entend sonner au Gondor", correct: true},
            { text: "Il n’est audible que pour ses alliés", correct: false},
            { text: "Il permet d’insuffler la peur dans les cœurs ennemis", correct: false},
            { text: "Il n’a rien de particulier", correct: false},
        ]
    },
    {
        question: "Comment s’appelle le seigneur des Aigles géants et ami de Gandalf ?",
        difficulty: 2,
        trueAnswer: "« Vinrent là Gwaihir le Seigneur du Vent et son frère Landroval, plus grands de tous les Aigles du Nord, plus formidables descendants de Thorondor l’ancien, lui dont les aires étaient disséminées sur les pics inaccessibles des Montagnes Encerclantes, quand la Terre du Milieu était jeune. » — Le Seigneur des Anneaux — Livre VI — Chapitre 4 Il s’agit de Gwahir, qui porta Gandalf trois fois car reconnaissant que ce dernier l’ait soigné d’une flèche autrefois. C’est notamment lui qui alla chercher Gandalf en haut de la tour de Durin après son combat contre le Balrog et qui récupéra plus tard Frodon et Sam sur les flancs de la Montagne du Destin après que l’Anneau ait été détruit. Les nains d’Erebor lui firent une couronne en or et le reconnurent en tant que roi de tous les oiseaux pour le remercier d’avoir pris part à la bataille des Cinq Armées. A ne pas confondre avec Thorondor, son ancêtre, qui était le seigneur des Aigles jusqu’au Premier Âge, où il mena le combat aérien aux côtés d’Eärendil contre tous les dragons de Morgoth lors de la bataille finale contre ce dernier.",
        answers:[
            { text: "Thorondor", correct: false},
            { text: "Gwahir", correct: true},
            { text: "Landroval", correct: false},
            { text: "Meneldor", correct: false},
        ]
    },
    {
        question: "Laquelle de ces régions ne faisait pas partie du Grand Royaume de l’Arnor ?",
        difficulty: 2,
        trueAnswer: "Toutes ces régions sont sur le territoire disparu du Grand Royaume de l’Arnor, hormis l’Enedwaith qui se situe dans le Sud de l’Eriador, non loin de la Trouée du Rohan.",
        answers:[
            { text: "La Comté", correct: false},
            { text: "Le Pays de Bree", correct: false},
            { text: "L’Enedwaith", correct: true},
            { text: "L’Evendim", correct: false},
        ]
    },
    {
        question: "A qui les morts parjures avaient-ils promis leur aide dans la guerre contre Sauron ?",
        difficulty: 2,
        trueAnswer: "Ils avaient promis leur aide à Isildur, cofondateur du Gondor avec son petit frère Anarion. C’est d’ailleurs lui qui les maudit quand ils ne respectèrent pas leur serment.",
        answers:[
            { text: "Isildur", correct: true},
            { text: "Elendil", correct: false},
            { text: "Anarion", correct: false},
            { text: "Gil Galad", correct: false},
        ]
    },
    {
        question: "Comment est mort Isildur ?",
        difficulty: 2,
        trueAnswer: "Il fut pris dans une embuscade orque avec trois de ses fils aux Champs des Iris alors qu’il rejoignait l’Arnor pour succéder à son père Elendil mort durant la bataille finale contre Sauron. C’est lui qui réussit à vaincre Sauron sur le champ de bataille mais qui, malgré les conseils d’Elrond, ne se résolut pas à jeter l’Anneau Unique dans le feu de la Montagne du Destin.",
        answers:[
            { text: "Il a reçu une pierre en pleine tête lancée depuis les remparts de Barad-Dûr", correct: false},
            { text: "Tué par Sauron devant la Montagne du Destin", correct: false},
            { text: "Dans une embuscade orque aux Champs des Iris", correct: true},
            { text: "Tué à Amon Hen par Gollum pour lui reprendre l’Anneau", correct: false},
        ]
    },
    {
        question: "Comment est mort Anárion ?",
        difficulty: 2,
        trueAnswer: "Anárion reçut une pierre en pleine tête lancée depuis les remparts de Barad-Dûr lors du siège de cette dernière par La Dernière Alliance des Hommes et des Elfes. Ces trois premiers fils périrent également dans la bataille. Après la chute de Sauron, Isildur devint roi de l’Arnor à la place de son père Elendil, en plus d’être roi du Gondor (titre qu’il partageait avec Anárion avant sa mort). Il confia alors la régence du Gondor à Meneldil, le 4e fils d’Anárion, qui se proclama roi du Gondor à la mort de son oncle Isildur.",
        answers:[
            { text: "Il a reçu une pierre en pleine tête lancée depuis les remparts de Barad-Dûr", correct: true},
            { text: "Tué par Sauron devant la Montagne du Destin", correct: false},
            { text: "Dans une embuscade orque aux Champs des Iris", correct: false},
            { text: "Tué à Amon Hen par un Nazgûl", correct: false},
        ]
    },
    {
        question: "Pourquoi les Nains n’aident pas les Hommes pendant la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "A cette période, Sauron sait que l’Anneau est dans les mains d’un semi-homme du nom de Sacquet. De même qu’un semi-homme du nom de Bilbon Sacquet aida les Nains à récupérer la Montagne Solitaire. Il envoya à plusieurs reprises un émissaire auprès de Daïn II Pied d’Acier, roi d’Erebor (et cousin de Thorïn II écu de chêne) pour monnayer des informations et leur aide, et notamment certains des sept anneaux des Nains qui ne furent pas détruits par le feu des dragons. Daïn II refusa et entra ouvertement en guerre contre Sauron. Il fut à la tête des armées naines pour défendre la ville des Hommes de Dale, dirigée par son ami Brand le roi du Val (petit-fils de Bard l’Archer qui tua Smaug). Ce dernier mourut face aux armées d’orientaux envoyées par Sauron et son fils Bard II alla se réfugier à Erebor avec Thorin III (le fils du roi Daïn II) avec le restant de leurs troupes, où ils résistèrent aux sièges. Pendant cette bataille Durin II Pied d’Acier couvrit la retraite de son fils et du jeune roi Bard II en restant aux côtés du corps du roi Brand, tuant tous ceux qui s’en approchaient, afin d’éviter qu’il soit mutilé et profané par l’ennemi. Il y laissera la vie.",
        answers:[
            { text: "Parce qu’ils ne sont pas au courant", correct: false},
            { text: "Parce qu’ils sont en froid avec les Hommes", correct: false},
            { text: "Parce qu’ils ont signé un traité de paix avec Sauron", correct: false},
            { text: "Parce qu’ils se battent déjà contre d’autres forces de Sauron", correct: true},
        ]
    },
    {
        question: "Quelle chaîne de montagnes ne se trouve pas en Terre du Milieu ?",
        difficulty: 2,
        trueAnswer: "« Sur la côte Est du Pays d'Aman venait finir Belegaer, la Grande Mer de l'Ouest, et comme Melkor était sur la Terre du Milieu et qu'ils ne pouvaient le renverser, les Valar fortifièrent leur demeure en élevant près de la côte les Pelóri, les plus hautes montagnes du monde. » Le Silmarillion - Quenta Silmarillion - Chapitre 1  Les Pelóri, signifiant hauteurs défensives en elfiques, traversaient de Nord en Sud l’entièreté du continent d’Aman par sa côte Est (Aman = les Terres Immortelles).",
        answers:[
            { text: "Ered Mithrin", correct: false},
            { text: "Ered Nimrais", correct: false},
            { text: "Les Pelóri", correct: true},
            { text: "Ephel Dúath", correct: false},
        ]
    },
    {
        question: "Qu’est-ce que Minas Morgul ?",
        difficulty: 2,
        trueAnswer: "Au départ elle se nommait Minas Ithil, la tour de la Lune, et fut fondée par Isildur. Son frère Anárion fonda de l’autre côté de l’Anduin Minas Anor, la tour du Soleil (qui prit plus tard le nom de Minas Tirith, la tour de garde). Entre les deux, sur l’Anduin, ils fondèrent Osgiliath, qui serait la capitale de leur royaume : le Gondor.",
        answers:[
            { text: "La ville fondée par Isildur connue sous le nom de Minas Ithil, puis prise par l’ennemi", correct: true},
            { text: "Une ville fondée par Sauron pour faire face à Minas Tirith", correct: false},
            { text: "Une ancienne ville elfe en ruine et abandonnée", correct: false},
            { text: "Une ancienne tour naine", correct: false},
        ]
    },
    {
        question: "Quel âge fête Frodon le jour des 111 ans de Bilbon ?",
        difficulty: 2,
        trueAnswer: "Frodon et Bilbon ont exactement 78 ans d’écart, car ils sont nés tous deux le 22 septembre. Frodon fête donc ses 33 ans le jour des 111 ans de son oncle.",
        answers:[
            { text: "18 ans", correct: false},
            { text: "20 ans", correct: false},
            { text: "25 ans", correct: false},
            { text: "33 ans", correct: true},
        ]
    },
    {
        question: "Dans le film, comment réagit Aragorn quand Eowyn lui amène le ragoût qu’elle a préparé ?",
        difficulty: 2,
        trueAnswer: "Il le jette par terre de dégoût dès qu’elle a le dos tourné, et se brûle au passage car Eowyn se retourne brusquement après avoir fait mine de partir.",
        answers:[
            { text: "Il le trouve très bon", correct: false},
            { text: "Il le trouve fade", correct: false},
            { text: "Il le trouve trop salé", correct: false},
            { text: "Il le jette par terre de dégoût", correct: true},
        ]
    },
    {
        question: "Chez les Hobbits, que doit-on faire le jour de son anniversaire ?",
        difficulty: 2,
        trueAnswer: "Dans la culture Hobbits, c’est à celui qui fête son anniversaire d’offrir des cadeaux. Lors du 111e anniversaire de Bilbon, resté dans les mémoires de Hobbits, tous les invités se sont vus offrir de magnifiques cadeaux de la part de Bilbon.",
        answers:[
            { text: "ce qu’on veut", correct: false},
            { text: "offrir un cadeau à chacun de ses amis", correct: true},
            { text: "offrir une tournée générale à la taverne", correct: false},
            { text: "organiser une compétition de ronds de fumée", correct: false},
        ]
    },
    {
        question: "Comment s’appelle le poney qui transporte les affaires de la Communauté ?",
        difficulty: 2,
        trueAnswer: "« Mais de toute façon, nous ne pouvons emmener cette pauvre bête dans les Mines. […] J’en suis navré, dit Gandalf. Le pauvre Bill a été un compagnon utile, et c’est un crève-cœur de l’abandonner maintenant. »— Le Seigneur des Anneaux — Livre II — Chapitre 4.",
        answers:[
            { text: "Bill", correct: false},
            { text: "John", correct: true},
            { text: "Bob", correct: false},
            { text: "Phill", correct: false},
        ]
    },
    {
        question: "Comment s’appelait le précédent propriétaire de Bill le Poney ?",
        difficulty: 2,
        trueAnswer: "« J’ai quelque chose qui vous appartient. Si vous vous rappelez Bill Fougeron et le vol des chevaux : son poney que vous aviez acheté, eh bien, il est ici. » — Le Seigneur des Anneaux — Livre VI — Chapitre 7. Pendant leur nuit au Poney Fringant, Aragorn et les Hobbits se sont fait voler leur chevaux. Ils ont donc été contraints d’acheter Bill, un poney malade et famélique à Bill Fougeron pour le prix d’un cheval en plein santé.",
        answers:[
            { text: "Graham Tendremélèze", correct: false},
            { text: "Prosper Poiredebeurré", correct: false},
            { text: "Bill Fougeron", correct: true},
            { text: "Tad Coupefeuille", correct: false},
        ]
    },
    {
        question: "Dans les livres combien de temps y a t’il entre le 111ème anniversaire de Bilbon et le début de la quête de Frodon ?",
        difficulty: 2,
        trueAnswer: "Le Seigneur des Anneaux commence avec la fête d’adieu de Bilbon pour son 111eme anniversaire, le jour des 33 ans de Frodon. Lorsque Gandalf revient voir Frodon dans la Comté pour lui dire de partir et convenir du rendez-vous au Poney Fringant, Frodon a alors 50 ans, soit 17 ans plus tard !",
        answers:[
            { text: "17 jours", correct: false},
            { text: "7 mois", correct: false},
            { text: "7 ans", correct: false},
            { text: "17 ans", correct: true},
        ]
    },
    {
        question: "De qui provient le prophétie du Roi Sorcier d’Angmar ?",
        difficulty: 2,
        trueAnswer: "Lors de la bataille de Fornost, capitale de l’Arthedain et dernier vestige du royaume de l’Arnor encore debout, les armées des Hommes furent mises en déroute par le Roi Sorcier d’Angmar et ses armées. C’est alors que l’armée du Gondor menée par le prince Eärnur, fils du roi Eärnil II, et celle des elfes de Foncombe, menée par Glorfindel, arrivèrent mais trop tard. L’Arnor fut détruit et son roi s’enfuit. Mais les armées du Gondor et de Fondcombe anéantirent les forces d’Angmar, jusqu’à ce que le Roi Sorcier fondit sur Eärnur en le défiant. Le cheval de ce dernier s’enfuit de peur, provoquant les moqueries du lieutenant de Sauron qui, devant Glorfindel, fut contraint lui aussi de fuir. Eärnur, se sentant humilié, voulut poursuivre le Roi Sorcier d’Angmar mais Glorfindel l’en empêcha, lui prophétisant qu’il ne mourrait pas de main d’homme.",
        answers:[
            { text: "De Glorfindel", correct: true},
            { text: "De Galadriel", correct: false},
            { text: "Du Roi Sorcier d’Angmar", correct: false},
            { text: "De Sauron", correct: false},
        ]
    },
    {
        question: "Comment est mort le dernier Roi du Gondor ?",
        difficulty: 2,
        trueAnswer: "Le Roi Sorcier d’Angmar envoya un messager en 2050 du Troisième Âge à Eärnur, Roi du Gondor, l’invitant à se présenter seul devant Minas Morgul pour le défier. Sans descendance et malgré les contre-indications de Mardil son conseiller et intendant, Eärnur accepta le défi et partit seul à Minas Morgul. Personne ne le revit plus jamais et Mardil fut le premier intendant à gouverner le Gondor et depuis, c’est sa descendance qui hérita des rênes du pouvoir jusqu’à Denethor II, le dernier intendant.",
        answers:[
            { text: "D’un accident de chasse", correct: false},
            { text: "De vieillesse", correct: false},
            { text: "Sur le champ de bataille", correct: false},
            { text: "Le Roi Sorcier d’Angmar l’a défié en 1v1 à Minas Morgul et il n’est jamais revenu….", correct: true},
        ]
    },
    {
        question: "A qui correspond cette description : «  Ses cheveux, pareils aux ombres du crépuscule, étaient coiffés d’un mince bandeau d’argent ; ses yeux étaient du gris d’un soir clair, et il y avait en eux une lumière semblable à celle des étoiles. » ?",
        difficulty: 2,
        trueAnswer: "La suite de la citation : \"Il paraissait vénérable, tel un roi couronné de maints hivers, mais vigoureux néanmoins, tel un guerrier endurci, dans la force de l’âge. Il était Seigneur de Fondcombe et puissant parmi les Elfes et les Hommes. \" — Le Seigneur des Anneaux — Livre II — Chapitre 1 (donc Elrond).",
        answers:[
            { text: "Elrond", correct: true},
            { text: "Imrahil", correct: false},
            { text: "Aragorn", correct: false},
            { text: "Arwen", correct: false},
        ]
    },
    {
        question: "A qui correspond cette description : « Il portait un grand chapeau bleu et pointu, une longue cape grise et une écharpe argent, surmontée d’une barbe blanche qui descendait jusque sous la ceinture, ainsi que d’énormes bottes noires. » ?",
        difficulty: 2,
        trueAnswer: "Le début du passage est « Bilbon, qui ne se méfiait pas, ne vit ce matin-là qu’un vieillard avec un bâton. Il portait un grand chapeau bleu [...] ainsi que d’énormes bottes noires. » — J. R. R. Tolkien, Le Hobbit, Chapitre 1. Il s’agit de Gandalf !",
        answers:[
            { text: "Tom Bombadil", correct: false},
            { text: "Gandalf le Gris", correct: true},
            { text: "Gloïn", correct: false},
            { text: "Gimli", correct: false},
        ]
    },
    {
        question: "Andúril, l’épée d’Aragorn, a été reforgée avec les fragments de quelle autre épée ?",
        difficulty: 2,
        trueAnswer: "Avec les fragments de Narzil, l’épée des Rois brisée par Isildur lorsqu’il vaincut Sauron et récupéra l’Anneau. Les éclats de l’épée furent ensuite envoyés à Foncombe où ils furent conservés jusqu’à ce que l’épée soit reforgée pour Aragorn.",
        answers:[
            { text: "Gurthang", correct: false},
            { text: "Anglachel", correct: false},
            { text: "Narsil", correct: true},
            { text: "Aranrúth", correct: false},
        ]
    },
    {
        question: "Quand Aragorn récupère Andúril dans les livres?",
        difficulty: 2,
        trueAnswer: "« Elle était très brillante, cette épée, quand elle fut de nouveau complète ; la lumière du Soleil y scintillait avec un éclat rouge et celle de la Lune y luisait avec un reflet froid ; et le fil en était dur et tranchant. Et Aragorn lui donna un nouveau nom, l’appelant Anduril, Flamme de l’Ouest. » — Le Seigneur des Anneaux — Livre II — Chapitre 3. Cela se passa juste avant son départ de Fondcombe avec la communauté, et donc avec Anduril à sa ceinture.",
        answers:[
            { text: "Avant les évènements de la Guerre de l’Anneau", correct: false},
            { text: "En partant de Foncombe à la suite du Conseil", correct: true},
            { text: "Elrond lui amène avant qu’il emprunte le chemin des morts", correct: false},
            { text: "Arwen lui amène avant qu’il emprunte le chemin des morts", correct: false},
        ]
    },
    {
        question: "Qui a forgé l'épée Narsil ?",
        difficulty: 2,
        trueAnswer: "Il s’agit de Telchar, le plus illustre des forgerons Nains. Il vivait dans la cité naine de Nogrod au Premier Âge et forgea plusieurs objets restés mythiques comme le Heaume du Dragon (à l’effigie de Glaurung, le premier des dragons) ou encore Angrist (le poignard avec lequel Beren retira l’un des Silmarils de la couronne de Morgoth).",
        answers:[
            { text: "Le Nain Telchar", correct: true},
            { text: "L’Elfe Fëanor", correct: false},
            { text: "Le Nain Mîm", correct: false},
            { text: "L’Elfe Celembrimbor", correct: false},
        ]
    },
    {
        question: "Quelle épée n’apparaît pas à l’écran dans les films Le Seigneur des Anneaux ?",
        difficulty: 2,
        trueAnswer: "Gúthwinë est l’épée d’Eomer, Hadhafang celle d’Arwen et Herugrim est l’épée du roi Théoden. Angrist est un poignard forgé par le nain forgeron Telchar et non une épée. Il n’apparaît pas dans les films car il se brise au Premier Âge, lorsque Beren s’en sert pour retirer l’un des Silmarils de la couronne de Morgoth. En se cassant, il blessa la joue de ce dernier.",
        answers:[
            { text: "Gúthwinë", correct: false},
            { text: "Hadhafang", correct: false},
            { text: "Herugrim", correct: false},
            { text: "Angrist", correct: true},
        ]
    },
    {
        question: "Qu’est-ce que la Compagnie Grise ?",
        difficulty: 2,
        trueAnswer: "C’est un groupe d’une trentaine de Dúnedains (= descendants des Numénoréens qui échappèrent au cataclysme avec Elendil pour s’établir en Terre du Milieu créant le royaume de l’Arnor) accompagnés des jumeaux d’Elrond. Ils rejoignirent Aragorn au gué de l’Isen et se battirent à ses côtés, jusqu’à la bataille finale devant la Porte Noire du Mordor.",
        answers:[
            { text: "Un groupe d’apprentis magiciens au service de Gandalf", correct: false},
            { text: "Une tribu de Nains guerriers vivant dans les Ered Mithrin (les Montagnes Grises)", correct: false},
            { text: "Les Dúnedains qui suivent Aragorn", correct: true},
            { text: "Une troupe de guerriers d’élite du Gondor faisant des missions de sabotage au Mordor", correct: false},
        ]
    },
    {
        question: "Qui est le chef de la Compagnie Grise ?",
        difficulty: 2,
        trueAnswer: "Il s’agit d’Halbarad, ami et parent d’Aragorn, qui dirige la Compagnie Grise. C’est lui qui apporte à Aragorn l’étendard des rois du Gondor qu’Arwen confectionna pour lui. Il mourra pendant la bataille des champs du Pelennor.",
        answers:[
            { text: "Candaith", correct: false},
            { text: "Halbarad", correct: true},
            { text: "Saeradan", correct: false},
            { text: "Lothrandir", correct: false},
        ]
    },
    {
        question: "Comment s’appelle la rivière qui coule devant les mur de la Moria ?",
        difficulty: 2,
        trueAnswer: "C’est le Sirannon, appelé aussi ruisseau de la Porte. Un éboulement se produisit sur son cours, ce qui forma un lac devant les murs de la Moria.",
        answers:[
            { text: "Le Sirannon", correct: true},
            { text: "La Nimrodel", correct: false},
            { text: "Le Bruinen", correct: false},
            { text: "Le Ninglor", correct: false},
        ]
    },
    {
        question: "Le cri de guerre des Rohirrims est « Forth Eorlingas », pourquoi ?",
        difficulty: 2,
        trueAnswer: "C’est en mémoire de Eorl le Jeune (Eorlingas = peuple d’Eorl). Ce fut le premier homme qui dompta un Mearas. C’est d’ailleurs en essayant de dompter Felaróf que le père d’Eorl périt, laissant le pouvoir à son fils de 16 ans. Moins de 10 ans plus tard, le Gondor était au bord de la défaite contre des Hommes de l’Est dans la région du Calenardhon (Nord du Gondor) et envoya une demande d’aide aux Éothéod, les cavaliers du Nord. Eorl, leur chef, chevaucha à leur rescousse avec une armée de cavaliers et ils détruisirent totalement l’ennemi. En remerciement, Cirion, l’Intendant du Gondor, offrit le Calenardhon aux Éothéod, qui devint le Rohan. En retour, Eorl le Jeune fit le serment d’aider le Gondor à chaque fois qu’il en aurait besoin. Ce serment est connu sous le nom de Serment d’Eorl et Théoden l’honora une nouvelle fois lors de la Guerre de l’Anneau.",
        answers:[
            { text: "Ce n’est jamais précisé", correct: false},
            { text: "En mémoire d’Eöl, un elfe vivant reclus dans le Beleriend et qui forgea deux épées à partir d’une météorite, l’une servant encore comme épée du roi", correct: false},
            { text: "Eorl signifie soleil dans leur langue, cela veut dire « pour un nouveau jour »", correct: false},
            { text: "En souvenir d’Eorl, le premier grand roi de ce peuple qui les mena à la victoire", correct: true},
        ]
    },
    {
        question: "Quelle est la particularité de Kheled-Zâram (le lac à la sortie Est de la Moria) ?",
        difficulty: 2,
        trueAnswer: "Quand on regarde dans le Kheled-Zâram, ou lac du miroir, on y voit, en plus du reflet des montagnes autour, celui des étoiles et ça, même en plein jour. En le contemplant, Durin Ier vit apparaître les étoiles comme si elles formaient une couronne au dessus de sa tête. Y voyant un signe, il décida alors de fonder le royaume de Khazâd-dûm à cet endroit. On retrouve d’ailleurs les étoiles sur le blason de Durin Ier (au nombre de sept comme les sept Pères des Nains dont Durin faisait partie).",
        answers:[
            { text: "Il y a toujours des poissons dedans", correct: false},
            { text: "Il reflète la voûte céleste même en plein jour", correct: true},
            { text: "On peut y avoir des visions du passé, du présent et parfois du futur", correct: false},
            { text: "C’est juste un lac", correct: false},
        ]
    },
    {
        question: "Quelle est la particularité de la statue au milieu de La Croisée des Chemins, un carrefour entre Osgiliath et Minas Morgul ?",
        difficulty: 2,
        trueAnswer: "Il s’agit tout simplement d’une statue ordinaire, représentant l’un des rois du Gondor et qui fut détériorée à plusieurs reprises par des orques. Elle fut même décapitée par ces derniers et sa tête fut remplacée par une grosse pierre ronde gribouillée en visage grimaçant avec un seul grand œil rouge, la marque de Sauron.",
        answers:[
            { text: "Une aura magique s’en dégage empêchant la corruption de Sauron de se propager", correct: false},
            { text: "Elle a été faite par les Numénoréens bien avant la création du Gondor", correct: false},
            { text: "Elle impressionne les orques, les empêchant de s’en approcher", correct: false},
            { text: "C’est juste une statue banale", correct: true},
        ]
    },
    {
        question: "Lequel de ces personnages n’a jamais été l’allié de Sauron (volontairement ou non) ?",
        difficulty: 2,
        trueAnswer: "Saroumane s’allia avec Sauron dans le but de trouver l’Anneau Unique et d’utiliser son pouvoir pour le vaincre. Après avoir été vaincu et emprisonné par Ar-Pharazôn le Doré, Sauron devint petit à petit son conseiller et retourna Númenor contre les Valar, causant sa destruction. Sauron se présenta aux Elfes en tant qu’Annatar, Seigneur des Dons et envoyé des Valar. Il eut rapidement la confiance de Celebrimbor et des autres Elfes de l’Eregion en les aidant à forger des anneaux de pouvoirs de plus en plus puissants. Seule Galadriel mit ses semblables en garde et finit par quitter l’Eregion, sentant le retour du Mal en Terre du Milieu.",
        answers:[
            { text: "Galadriel", correct: true},
            { text: "Celebrimbor", correct: false},
            { text: "Ar-Pharazôn le dernier roi de Númenor", correct: false},
            { text: "Saroumane", correct: false},
        ]
    },
    {
        question: "Pourquoi y a-t-il très peu d’Ent ?",
        difficulty: 2,
        trueAnswer: "Les Ents mâles préfèrent les forêts alors que les femelles préfèrent les vergers. C’est naturellement qu’ils se séparèrent, mais ça ne les empêchait pas de se retrouver. Les Ents femelles auraient été prises dans une bataille contre Sauron et ses forces, causant leur destruction totale. Quand des Ents mâles retournèrent dans le verger des femmes Ents, ils s’aperçurent que le verger était dévasté et ne retrouvèrent aucune trace des femmes Ents. Depuis, ils les cherchent toujours, ignorant ce qui s’est passé.",
        answers:[
            { text: "Parce qu’ils ont été décimés par les Uruk hai de Saroumane", correct: false},
            { text: "Parce qu’ils ne peuvent pas se reproduire", correct: false},
            { text: "Parce que les femmes Ents ont disparu", correct: true},
            { text: "Parce que Sauron leur a lancé une malédiction", correct: false},
        ]
    },
    {
        question: "Quelle scène suivante ne s’est jamais produit dans l’univers du Seigneur des Anneaux ?",
        difficulty: 2,
        trueAnswer: "Les Aigles portèrent Gandalf par trois fois. Lors des batailles du Beleriand contre Morgoth, il était courant que les Balrogs (alors en nombre) chevauchaient des dragons sur le champ de bataille. Huan, le chien géant et chef de meute des Valar, tua bon nombre de loups garous, leur chef Draugluin (le premier des loups garous) et vainquit Sauron (qui avait pris la forme du plus grand loup garou possible) pour sauver l’homme Beren. Plus tard, il revêtit la peau de Draugluin avec Beren et Lúthien sur le dos pour les aider à s’infiltrer dans Angband, la forteresse de Morgoth, afin de lui voler un Silmaril. Gripoils accepte de porter Gandalf à la condition qu'il ne porte pas de bride",
        answers:[
            { text: "Un magicien qui chevauche un aigle géant", correct: false},
            { text: "Un Balrog qui chevauche un dragon", correct: false},
            { text: "Une Elfe et un Homme chevauchant un chien géant", correct: false},
            { text: "Gandalf qui chevauche Gripoils avec une bride", correct: true},
        ]
    },
    {
        question: "Dans les livres, que fait Saroumane à la fin ?",
        difficulty: 2,
        trueAnswer: "texte de réponse",
        answers:[
            { text: "Il se fait tuer par Gríma au sommet de la tour d’Orthanc", correct: false},
            { text: "Il part au Mordor pour essayer de prendre la place de Sauron une fois l’Anneau détruit", correct: false},
            { text: "Il essaye d’atteindre les Terres Immortelles", correct: false},
            { text: "Il part conquérir la Comté", correct: true},
        ]
    },
    {
        question: "Lequel de ces personnages ne meurt pas lors de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "C’était un piège ! Haldir meurt à la bataille du Gouffre de Helm dans les films mais pas dans les livres. Gríma meurt à la toute fin, lors de la reprise de la Comté par les Hobbits. Háma périt pendant la bataille du Gouffre de Helm et Grimbold perd la vie sur les champs du Pelennor, devant Minas Tirith, lors de la charge des Rohirrims.",
        answers:[
            { text: "Haldir", correct: true},
            { text: "Gríma", correct: false},
            { text: "Háma", correct: false},
            { text: "Grimbold", correct: false},
        ]
    },
    {
        question: "Minas Tirith est constituée d’une succession de niveaux en forme de cercles empilés les uns sur les autres. Combien y a t il de niveau en tout ?",
        difficulty: 2,
        trueAnswer: "« Et là, à l’endroit où se terminaient les Montagnes Blanches des Ered Nimrais, il vit, comme Gandalf le lui avait annoncé, la sombre masse du mont Mindolluin, les ombres violettes de ses hauts cols, et sa haute face blanche dévoilée par le jour croissant. Et sur le genou qu’elle projetait, était assise la Cité Gardée et ses sept murs de pierres, si forts et si anciens qu’elle semblait non pas bâtie de main d’homme, mais sculptée par des géants dans l’ossature de la terre. » — Le Seigneur des Anneaux — Livre V — Chapitre 1.",
        answers:[
            { text: "5", correct: false},
            { text: "6", correct: false},
            { text: "7", correct: true},
            { text: "8", correct: false},
        ]
    },
    {
        question: "Quel est le surnom de Minas Tirith ?",
        difficulty: 2,
        trueAnswer: "C’est bien sûr la cité blanche, en référence à la couleur de la pierre qui constitue la cité (à part le premier rempart extérieur qui est noir et semble être de même nature que la tour d’Orthanc).",
        answers:[
            { text: "La cité blanche", correct: true},
            { text: "La cité morte", correct: false},
            { text: "La cité endormie", correct: false},
            { text: "La cité à la menthe", correct: false},
        ]
    },
    {
        question: "Comment s’appelle le Palais des Rois du Rohan ?",
        difficulty: 2,
        trueAnswer: "« Ces habitations se nomment Edoras, dit Gandalf, et cette salle dorée est Meduseld. C’est là que réside Théoden fils de Thengel, Roi de la Marche du Rohan. » — Le Seigneur des Anneaux — Livre III — Chapitre 6",
        answers:[
            { text: "Le Tertre d’Or de Theoden", correct: false},
            { text: "Le Hall Doré d’Eorl", correct: false},
            { text: "Le château d’Or de Meduseld", correct: true},
            { text: "Le Palais d’Or de Thengel", correct: false},
        ]
    },
    {
        question: "Comment s’appellent les fils jumeaux d’Elrond, frères d’Arwen ?",
        difficulty: 2,
        trueAnswer: "« Et as-tu remarqué les frères Elladan et Elrohir ? Leur vêtement est moins sombre que celui des autres, et ils ont la beauté héroïque que l’on prête aux seigneurs des Elfes – ce qui n’a rien d’étonnant chez les fils d’Elrond de Fondcombe. » — Le Seigneur des Anneaux — Livre V — Chapitre 2",
        answers:[
            { text: "Elrohir & Elledan", correct: false},
            { text: "Elrohir & Elladan", correct: true},
            { text: "Erlohir & Elladan", correct: false},
            { text: "Erlohir & Elledan", correct: false},
        ]
    },
    {
        question: "Quelle est la suite de cette célèbre réplique de Sam à la fin du 3ème film ? « Je ne peux le porter pour vous, ...",
        difficulty: 2,
        trueAnswer: "C’est bien évidement : « Je ne peux le porter pour vous, mais je peux vous portez, vous ! » avant de prendre Frodon sur ses épaules et de continuer l’ascension de la Montagne du Destin.",
        answers:[
            { text: "alors dépêchez-vous !", correct: false},
            { text: "alors débrouillez-vous !", correct: false},
            { text: "alors qu’est ce que vous foutez ?!", correct: false},
            { text: "mais je peux vous portez vous !", correct: true},
        ]
    },
    {
        question: "Quelle est l’une des particularités de Dunhart (ou Dunharrow dans les films) ?",
        difficulty: 2,
        trueAnswer: "Il s’agit d’une ancienne forteresse au sud d’Edoras, où se regroupe l’ost du Roi Théoden partant pour Minas Tirith. Elle fut déjà occupée par les ancêtres des Hommes du Pays de Dun mais sa fonction première est inconnue. Peut être un lieu sacré ou une tombe royale car, « Divisant le plateau en deux, une double rangée de pierres levées, mais non travaillées, s’enfonçait dans le crépuscule et disparaissait parmi les arbres. » — Le Seigneur des Anneaux — Livre V — Chapitre 3. Le chemin pour y accéder serpente et est également bordé d’étranges statues nommées Homme-Pouques.",
        answers:[
            { text: "C’est une ancienne forteresse en hauteur du Rohan", correct: false},
            { text: "Son chemin est bordé d’étranges statues nommées Homme-Pouques", correct: false},
            { text: "C’est là que se regroupe l’ost du Rohan avant de partir aider le Gondor", correct: false},
            { text: "Les trois à la fois", correct: true},
        ]
    },
    {
        question: "Qu’est ce qu’un Homme-Pouque ?",
        difficulty: 2,
        trueAnswer: "« À chaque tournant, il y avait de grandes pierres levées, sculptées à la ressemblance de géants, lourds et mal bâtis, assis les jambes croisées et les bras repliés sur leur panse rebondie. […] Les Cavaliers les regardèrent à peine. Ils les appelaient les Hommes-Pouques, et ils n’y faisaient guère attention… » — Le Seigneur des Anneaux — Livre V — Chapitre 3 ",
        answers:[
            { text: "De vieilles statues en forme d’hommes trapus de grande taille assis en tailleur, les bras reposant sur leurs gros ventre", correct: true},
            { text: "Une tribu de guerriers du Pays de Dun, de grande taille, à forte corpulence et qui se battait avec deux lances", correct: false},
            { text: "Une ancienne tribu de Hobbits du Val d’Anduin, très petits mais bedonnants", correct: false},
            { text: "Un Homme banni du royaume des Edains (=Hommes) au Première Âge pour des faits graves comme le meurtre ou la trahison", correct: false},
        ]
    },
    {
        question: "Dans la trilogie de Peter Jackson, combien de répliques échangent Frodon et Légolas ?",
        difficulty: 2,
        trueAnswer: "Dans toute la saga, il lui dit juste « et mon arc est vôtre ! » soit juste cinq petits mots, à peine de quoi faire une phrase.",
        answers:[
            { text: "0", correct: false},
            { text: "1", correct: true},
            { text: "3", correct: false},
            { text: "7", correct: false},
        ]
    },
    {
        question: "Quel est le type d’aliments préférés des Hobbits ?",
        difficulty: 2,
        trueAnswer: "Ils adorent les champignons par dessous tout. D’ailleurs, Frodon a peur du Père Magoth car quand il était enfant, il venait ramasser des champignons sur ses terres. Le Père Magoth, bien qu’au courant, ne lui en tînt pas rigueur car en se quittant, il offrit à Frodon un gros panier rempli de champignons.",
        answers:[
            { text: "Les fruits rouges", correct: false},
            { text: "Les cucurbitacées", correct: false},
            { text: "Les poissons", correct: false},
            { text: "Les champignons", correct: true},
        ]
    },
    {
        question: "Quelle est la particularité physique de Círdan, le plus vieil Elfe vivant en Terre du Milieu ?",
        difficulty: 2,
        trueAnswer: "« À leur arrivée aux portes, Círdan le Constructeur de Navires vint les accueillir. Grand il était, et sa barbe était longue ; et lui-même était gris et vieux, hormis ses yeux perçants comme des étoiles… » — Le Seigneur des Anneaux — Livre VI — Chapitre 9 C’est le seul Elfe connu avec de la barbe !",
        answers:[
            { text: "Il a les yeux tellement clairs qu’ils sont quasiment blancs", correct: false},
            { text: "Il a perdu tous ses cheveux", correct: false},
            { text: "Il a perdu toutes ses dents", correct: false},
            { text: "Il a de la barbe", correct: true},
        ]
    },
    {
        question: "Qui n’est pas sur le bateau des porteurs des anneaux partant des Havres Gris vers les Terres Immortelles ?",
        difficulty: 2,
        trueAnswer: "Le bateau des porteurs des anneaux contient les troid porteurs des anneaux elfiques, Galadriel, Elrond et Gandalf ; ainsi que ceux qui ont porté l’Anneau Unique, Bilbon et Frodon. Ils sont accompagnés par Celeborn, époux de Galadriel, et Círdan le charpentier, lassé de ses millénaires passés en Terre du Milieu (mais certains écrits se contredisent, il serait peut-être finalement resté pour continuer à bâtir des bateaux pour les Elfes désireux de quitter la Terre du Milieu). Dans tous les cas, Haldir ne monta jamais dans ce bateau.",
        answers:[
            { text: "Bilbon", correct: false},
            { text: "Círdan", correct: false},
            { text: "Haldir", correct: true},
            { text: "Celeborn", correct: false},
        ]
    },
    {
        question: "Quel âge a Frodon au moment de la Guerre de l’Anneau ?",
        difficulty: 2,
        trueAnswer: "L’histoire commence quand il a 33 ans, avec la fête d’anniversaire de son oncle Bilbon, mais la Guerre de l’Anneau commence en 3018 du 3e Age, l’année de ses 50 ans (il est né le 22 septembre 2968 du 3e Age).",
        answers:[
            { text: "20 ans", correct: false},
            { text: "25 ans", correct: false},
            { text: "33 ans", correct: false},
            { text: "50 ans", correct: true},
        ]
    },
    {
        question: "A quel âge est la majorité chez les Hobbits ?",
        difficulty: 2,
        trueAnswer: "Chez les Hobbits, on atteint la majorité à l’âge de 33 ans. C’est également la majorité de Frodon qui est fêtée le jour du 111e anniversaire de Bilbon.",
        answers:[
            { text: "16 ans", correct: false},
            { text: "18 ans", correct: false},
            { text: "21 ans", correct: false},
            { text: "33 ans", correct: true},
        ]
    },
    {
        question: "Quelle est l’inscription sur la tombe que trouve la communauté dans la Moria ?",
        difficulty: 2,
        trueAnswer: "«	 - On dirait un tombeau, murmura Frodon. […] Sur la dalle, des runes étaient profondément gravées : Ce sont des runes de Daeron, telles qu’on les employait jadis dans la Moria, dit Gandalf. Il est écrit là, dans les langues des Hommes et des Nains : BALÏN FILS DE FUNDÏN SEIGNEUR DE LA MORIA » — Le Seigneur des Anneaux — Livre II — Chapitre 4. que l’on peut traduire en khuzdûl par « Balïn Fundïnul Uzbad Khazaddûmu ».",
        answers:[
            { text: "Balin Fundinul Uzbad Khazaddûmu", correct: true},
            { text: "Baruk Khazâd ! Khazâd ai-mênu !", correct: false},
            { text: "Ishkhaqwi ai durugnul !", correct: false},
            { text: "Balin Uzbad Azaghâl Zirakayabund!", correct: false},
        ]
    },
    {
        question: "Quel emplacement particulier marque la Pierre de Durïn ?",
        difficulty: 2,
        trueAnswer: "« C’est la Pierre de Durïn ! s’écria Gimli […] Cette colonne marque l’endroit d’où Durïn regarda pour la première fois dans le Lac du Miroir, dit le Nain. » — Le Seigneur des Anneaux — Livre I — Chapitre 5. Durin Ier vit y apparaître les étoiles en plein jour comme si elles formaient une couronne au-dessus de sa tête. Y voyant un signe, il décida alors de fonder le royaume de Khazad-dûm à cet endroit.",
        answers:[
            { text: "L’endroit où Durïn Ier s’est éveillé en Terre du Milieu", correct: false},
            { text: "L’endroit où Durïn Ier regarda dans le Kheled-Zâram pour la première fois", correct: true},
            { text: "L’endroit où les routes d’Erebor, de Khazad-Dûm et du Palais de Thorin en Ered Luin se rejoignent", correct: false},
            { text: "L’endroit de la mort de Durïn Ier", correct: false},
        ]
    },
    {
        question: "Comment s’appelle le repaire secret de Faramir en Ithilien, qui surplombe le Lac Interdit ?",
        difficulty: 2,
        trueAnswer: "« Voici la Fenêtre du Couchant, Henneth Annûn, la plus belle des chutes de l’Ithilien, pays aux mille fontaines. Rares sont les étrangers à l’avoir jamais vue. Mais il n’y a pas de salle royale derrière elle pour égaler sa beauté. » — Le Seigneur des Anneaux — Livre IV — Chapitre 5",
        answers:[
            { text: "Henneth Annûn", correct: true},
            { text: "Heneth Annûn", correct: false},
            { text: "Henneth Anûn", correct: false},
            { text: "Heneth Anûn", correct: false},
        ]
    },
    {
        question: "D’où provient directement l’Arbre Blanc du Gondor présent dans la cour du dernier cercle de Minas Tirith, face à la tour d’Echtelion ?",
        difficulty: 2,
        trueAnswer: "Yavanna créa Galathilion pour les Elfes sur le modèle de Telperion l’Arbre argenté de Valinor. Il donna de nombreuses pousses dont une fut plantée à Tol Eressä, une île proche des côtes du Valinor habité par les Elfes Teleri. Cet arbre fut baptisé Celeborn, Arbre d’Argent. Plus tard, ces Elfes de Tol Eressëa, en très bons termes avec les Hommes de Númenor, avaient pour habitude de leur offrir des cadeaux. Ils leur offrirent donc une pousse de Celeborn que les Númenoréens plantèrent à Armenelos dans les jardins du Roi. Elle fut nommée Nimloth, ce qui signifie « fleur blanche ».Juste avant la chute de Númenor et la fuite d’Elendil et ses fils, Isildur vola un des fruits de Nimloth. Il le garda jusqu’à la mort de son frère Anarion mort dans la guerre contre Sauron. Il le planta alors dans la cité de son frère, en hommage à ce dernier.",
        answers:[
            { text: "C’est un fruit de Nimloth, l’Arbre Blanc de Númenor, qui fut volé par Isildur avant son exil en Terre du Milieu. Il le replante à Minas Tirith en l’honneur de son frère mort au combat", correct: true},
            { text: "Il s’agit d’une pousse de Celeborn, l’Arbre Blanc de Tol Eressëa donné en cadeau par les Elfes aux Hommes", correct: false},
            { text: "C’est une graine provenant de Galathilion, un arbre créé par Yavanna (vala de la nature) pour les Elfes sur le modèle de Telperion, l’un des Deux Arbres du Valinor", correct: false},
            { text: "Les trois à la fois", correct: false},
        ]
    },
    {
        question: "Dans la mythologie créée par Tolkien, les chiffres 1, 3, 7 et 9 sont importants car ils correspondent respectivement à l’Anneau Unique (1), aux nombres d’anneaux des Elfes(3), des Nains (7) et des Hommes (9). Ainsi la date de 1973, composée de ces quatre chiffres est hautement symbolique, d’autant plus qu’elle correspond à :",
        difficulty: 2,
        trueAnswer: "Il obtient le titre de Commandeur de l’Ordre de l’Empire Britannique en 1972. Il mourut l’année d’après en 1973. Son chef d’oeuvre, « Le Silmarillon » paru à titre posthume en 1977 grâce à son fils Christopher Tolkien, qui s’efforça de son vivant à rassembler l’ensemble des manuscrits, notes, lettres, etc...de son père pour terminer et harmoniser son travail",
        answers:[
            { text: "l’année où Tolkien obtient le titre de Commandeur de l’Ordre de l’Empire Britannique", correct: false},
            { text: "l’année de parution du Silmarillon, le recueil de l’ensemble de sa mythologie qui avait une grande importance pour lui", correct: false},
            { text: "l’année de sa mort", correct: true},
            { text: "les trois à la fois", correct: false},
        ]
    },
    {
        question: "Que décident de faire Faramir avec Frodon et Sam en Ithilien quand il apprend qu’ils transportent l’Anneau ?",
        difficulty: 2,
        trueAnswer: "« Quant à vous, Frodon, dans la mesure des pouvoirs qui me sont conférés par une plus haute instance, je vous déclare libre d’aller et venir au royaume de Gondor, jusque sur les confins de son ancien territoire ; à ceci près que ni vous, ni aucun de ceux qui vont avec vous, n’avez la permission de venir en ce lieu sans y être convié. » — Le Seigneur des Anneaux — Livre IV — Chapitre 6.",
        answers:[
            { text: "Ils ne se rencontrent jamais dans les livres", correct: false},
            { text: "Il décide de les laisser partir et de les accompagner un peu sur la route qu’ils ont en commun", correct: true},
            { text: "Il décide que l’Anneau doit aller au Gondor et les emmène à Osgiliath où Frodon et Sam réussirent à s’enfuir", correct: false},
            { text: "Il décide que l’Anneau doit aller au Gondor et les emmène à Osgiliath avant de finalement les laisser partir", correct: false},
        ]
    },
    {
        question: "Comment s’appelle la capitale de la Lothlórien, demeure de Galadriel et Celeborn ?",
        difficulty: 2,
        trueAnswer: "Caras Galadhon est la capitale de la Lothlórien, le pays que Galadriel créea grâce à ses pouvoirs et dans lequel aucune force de Sauron n'a jamais réussi à pénétrer",
        answers:[
            { text: "Caras Galhadon", correct: false},
            { text: "Caras Galadhon", correct: true},
            { text: "Caras Galhason", correct: false},
            { text: "Caras Galashon", correct: false},
        ]
    },
    {
        question: "Comment s’appelait la Moria avant sa chute ?",
        difficulty: 2,
        trueAnswer: "« La Moria, Khazad-dûm ! Mais ça rend les ténèbres plus pesantes, quand on pense à toutes ces lampes. Y a-t-il encore des tas de joyaux et d’or qui dorment ici un peu partout ? » — Le Seigneur des Anneaux — Livre II — Chapitre 4",
        answers:[
            { text: "Khâzad-dûm", correct: false},
            { text: "Khazâd-dum", correct: false},
            { text: "Khazâd-dûm", correct: false},
            { text: "Khazad-dûm", correct: true},
        ]
    },
    {
        question: "Où sont envoyés les malades et les blessés à Minas Tirith, et notamment après la bataille des champs du Pelenor ?",
        difficulty: 2,
        trueAnswer: "Les blessés et les malades sont envoyés aux Maisons de Guérison. Ce fut notamment le cas de Pippin, Eowyn et Faramir. C’est d’ailleurs dans ses jardins qu’Eowyn et Faramir se rencontrèrent pour la première fois et tombèrent amoureux.",
        answers:[
            { text: "Dans la grande salle du palais de la Tour d’Ecthelion", correct: false},
            { text: "Dans les Maisons de Guérison", correct: true},
            { text: "Dans la Tour de Guérison", correct: false},
            { text: "Dans le sanctuaire de Minas Tirith où sont inhumés les Rois et Intendants du Gondor", correct: false},
        ]
    },
    {
        question: "Qu’est ce que le nom « Rath Dínen » désigne ?",
        difficulty: 2,
        trueAnswer: "«Leurs pas lents résonnaient sur les pavés tandis qu’ils descendaient, toujours plus bas, jusqu’à la Rue Silencieuse, Rath Dínen, entre les dômes pâles et les salles vides et les images sculptées d’hommes depuis longtemps partis ; et ils entrèrent dans la Maison des Intendants et y déposèrent leur fardeau. » — Le Seigneur des Anneaux — Livre VI — Chapitre 6.",
        answers:[
            { text: "Une ancienne tour du royaume d’Arnor qui abritait un palantir", correct: false},
            { text: "Une route menant aux tombeaux de Minas Tirith", correct: true},
            { text: "Le chemin des Morts qu’emprunte Aragorn", correct: false},
            { text: "Le col qu’empruntent Frodon, Sam et Gollum pour entrer dans le Mordor", correct: false},
        ]
    },
    {
        question: "Quel nom donne Pippin à son fils ?",
        difficulty: 2,
        trueAnswer: "Il se nommait Faramir Ier Touc, et prit la succession de son père Peregrin Ier Touc en tant que Thain de la Comté.",
        answers:[
            { text: "Merry", correct: false},
            { text: "Boromir", correct: false},
            { text: "Faramir", correct: true},
            { text: "Frodon", correct: false},
        ]
    },
    {
        question: "Quel « dirigeant » de la Comté fut nommé « Conseiller du Royaume du Nord » par le Roi Elessar Ier en l’an 13 du Quatrième Âge ?",
        difficulty: 2,
        trueAnswer: "Elessar Ier les avait tous nommés « Conseillers du Royaume du Nord », voulant montrer l’importance des peuples Hobbits au sein de son Royaume.",
        answers:[
            { text: "Sam Gamgie, le maire de Grande-Creusé élu pour 7 ans", correct: false},
            { text: "Meriadoc Brandibouc, Maître du Pays-de-Bouc, région indépendante de la Comté sur la rive Ouest du Brandivin", correct: false},
            { text: "Peregrin Touc, Thain de la Comté (était, en autre, en charge de la protection de la Comté en cas de crise)", correct: false},
            { text: "Ses trois fonctions précédentes", correct: true},
        ]
    },
    {
        question: "Quelle est la formule pour se servir de la lumière d’Eärendil ?",
        difficulty: 2,
        trueAnswer: "«Aiya Eärendil Elenion Ancalima ! Cria-t-il, sans savoir ce qu’il disait ; car on eût dit qu’une autre voix parlait à travers la sienne, claire, inaltérée par l’air vicié du souterrain. » — Le Seigneur des Anneaux — Livre IV — Chapitre 9.",
        answers:[
            { text: "Eärendil Aiya Elenion Ancalima !", correct: false},
            { text: "Aiya Eärendil Elenion Ancalima !", correct: true},
            { text: "Eärendil Elenion Aiya Ancalima !", correct: false},
            { text: "Aiya Elenion Eärendil Ancalima !", correct: false},
        ]
    },
    {
        question: "Que se passe t-il dans l’antre d’Arachne quand elle se retrouve face à Frodon et Sam ?",
        difficulty: 2,
        trueAnswer: "« Alors Frodon sentit son coeur s’embraser, et, sans savoir ce qu’il faisait, si c’était folie, désespoir ou acte de courage, il prit la Fiole dans sa main gauche et tira son épée de sa droite. Dard jaillit du fourreau avec un éclair,[…] Frodon, Hobbit du Comté, marcha résolument à la rencontre des yeux. »— Le Seigneur des Anneaux — Livre IV — Chapitre 9.",
        answers:[
            { text: "Frodon et Sam s’enfuirent et s’échappèrent", correct: false},
            { text: "Frodon et Sam s’enfuirent mais se retrouvèrent coincés dans une de ses toiles", correct: false},
            { text: "Frodon brandit la lumière d’Eärendil d’une main, et Dard de l’autre, lui fait face jusqu’à ce qu’elle s’enfuit", correct: true},
            { text: "Sam brandit la lumière d’Eärendil d’une main, et Dard de l’autre, lui fait face jusqu’à ce qu’elle s’enfuit", correct: false},
        ]
    },
    {
        question: "Comment Sam fait-il pour sauver Frodon dans la tour de Cirith Ungol ?",
        difficulty: 2,
        trueAnswer: "Sam utilise l’Anneau pour suivre discrètement les Orques. Il attendit que les lieux soient plus calmes pour y pénétrer et se rendit compte que les orques s’étaient entretués pour les effets personnels de Frodon (notamment sa côte de mithril). Sam, toujours habillé avec l’une des capes elfiques de la Lórien et muni de Dard, se donna du courage pour progresser dans cette forteresse en brandissant la lumière d'Eärendil et en répétant le mot elfique « Elbereth », ce qui conduit les Orques à le prendre pour un guerrier Elfe et s’enfuirent ou moururent d’effrois devant lui.",
        answers:[
            { text: "Il se sert de l’Anneau Unique, pris sur le corps de Frodon qu’il croyait mort", correct: false},
            { text: "La quasi totalité des Orques de la tour s’était déjà entretuée", correct: false},
            { text: "Sam se fait passer pour un guerrier Elfe", correct: false},
            { text: "Les trois à la fois", correct: true},
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

];