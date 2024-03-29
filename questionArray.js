const mixQuestion = [
    {
        //tech
        question: "Quelle entreprise est connue pour son système d'exploitation mobile iOS ?",
        answer: [
            "A) Google", 
            "B) Microsoft",
            "C) Apple",
            "D) Samsung"],
        correctAnswer: "C) Apple",
    },
    {
        //history
        question: " Dans la comptine française, qui est célèbre pour 'sa culotte à l'envers' ?",
        answer: [
            "A) Le roi Dagobert", 
            "B) Le roi Louis", 
            "C) Le roi Charles ", 
            "D) Le roi Philippe"], 
        correctAnswer: "A) Le roi Dagobert"
    },
    {//culture
        question: "Quel est le prénom du jeune garçon, personnage principal de la série animée «Pokémon»?",
        answer: [
            "A) Pierrick ", 
            "B) Pikachu ", 
            "C) Sacha ", 
            "D) James"], 
        correctAnswer: "C) Sacha "
    },
    {
        //sport
        question: "A quel sport doit-on jouer pendant 2 mi-temps de 40 minutes ?",
        answer: [
            "A) Le football",
            "B) Le rugby",
            "C) Le handall",
            "D  Le basket-ball ", ], 
        correctAnswer: "B) Le rugby"
    }, {
        //culture
        question: "Quel est le nom associé au personnage joué par Millie Bobby Brown dans «Stranger Things»?",
        answer: [
            "A) Quarante-deux ", 
            "B) Quatre-vingt-onze ", 
            "C) Seize ", 
            "D) Onze"], 
        correctAnswer: "D) Onze"
    },
    {
        //tech
        question: "Quel type de technologie utilise des algorithmes complexes pour simuler des processus cognitifs humains, tels que la perception, le raisonnement et l'apprentissage ?",
        answer: [
            "A) Réalité Virtuelle", 
            "B) Intelligence Artificielle (IA)", 
            "C) Réalité Augmentée", 
            "D) Réseaux de Neurones Artificiels"], 
        correctAnswer: "B) Intelligence Artificielle (IA)"
    },
    {
        //Sport
        question: "Combien de fois Paris a-t-elle accueilli les Jeux olympiques?",
        answer: [
            "A) 3 fois", 
            "B) 4 fois",
            "C) 2 fois",
            "D) 5 fois "], 
        correctAnswer: "A) 3 fois"
    },
    {
       //histoire
       question: "Quelle est la ville où Jeanne d'Arc a mené sa première bataille victorieuse, levant ainsi le siège qui durait depuis plusieurs mois ?",
       answer: [
           "A) Rouen",
           "B) Orléans",
           "C) Paris",
           "D) Reims"], 
       correctAnswer: "B) Orléans"

    },
    { 
        //culture
        question: "Quel duo d'artiste francophone  à reprit en 2023 le célèbre morceau «Lady (Hear me Tonight)» sorti en 2000?",
        answer: [
            "A) Aya Nakamura & Tiakola", 
            "B) Damso & Stromae", 
            "C) Hamza & Damso ", 
            "D) Aucune des 3 réponses"], 
        correctAnswer: "C) Hamza & Damso "

    }, {
        //Sport
        question: "Que représentent les 5 anneaux olympiques ?",
        answer: [
            "A) Les 5 sports principaux des Jo",
            "B) Les 5 régions du monde",
            "C) Les 5 doigts d'une mains",
            "D) 5 années d’intervalles "], 
        correctAnswer: "B) Les 5 régions du monde"
    },
    {
        //histoire
        question: "Quelle partie du corps de Louis XIV a été affectée par une fistule, une maladie douloureuse qui lui a causé des problèmes de santé pendant une grande partie de sa vie ?",
        answer: [
            "A) Le pied ", 
            "B) L'estomac", 
            "C) L'oreille ", 
            "D) L'anus"], 
        correctAnswer: "D) L'anus"
    },
    {
        //tech
        question: "Quel est le principal langage de programmation utilisé pour le développement web front-end ?",
        answer: [
            "A) Python",
            "B) Java",
            "C) JavaScript", 
            "D) C++"], 
        correctAnswer: "C) JavaScript"

    },
    {
        //culture        
        question: "Quel chanteuse américaine interprète «Man Down», et raconte les remords suite à un meurtre?",
        answer: [
            "A) Shakira ", 
            "B) Yoann Fortin ", 
            "C) Rihanna ", 
            "D) Shanna Kress"], 
        correctAnswer: "C) Rihanna "
    },
    {
        //Sport
        question: "A Quelle équipe de foot est associé le stade Matmut Atlantique ?",
        answer: [
            "A) As Saint Etienne",
            "B) Fs Nantes",
            "C) Girondins du Bordeaux",
            "D) PSG"], 
        correctAnswer: "C) Girondins du Bordeaux"

    },{
        //histoire
        question: "Qui, avant le règne de Henri II, a réellement fait connaître Bordeaux dans l'histoire de France ?",
        answer: [
            "A) Charles VII", 
            "B) Aliénor d'Aquitaine", 
            "C) Louis IX (Saint Louis)", 
            "D) Philippe IV le Bel"], 
        correctAnswer: "B) Aliénor d'Aquitaine"
    },
    {
        //tech
        question: "Si un ordinateur a des problèmes de sommeil, que devrait-il faire ?",
        answer: [
            "A) Prendre des pilules d'alt+tab", 
            "B) Faire une sieste dans le cloud", 
            "C) Réinitialiser son horloge interne", 
            "D) la réponse D"], 
        correctAnswer: "D) la réponse D"

    }
];

const historyQuestions = [
    {
        
        question: "Quelle est la ville où Jeanne d'Arc a mené sa première bataille victorieuse, levant ainsi le siège qui durait depuis plusieurs mois ?",
        answer: [
            "A) Rouen",
            "B) Orléans",
            "C) Paris",
            "D) Reims"], 
        correctAnswer: "B) Orléans"
    },
    {
        
        question: "Quelle partie du corps de Louis XIV a été affectée par une fistule, une maladie douloureuse qui lui a causé des problèmes de santé pendant une grande partie de sa vie ?",
        answer: [
            "A) Le pied ", 
            "B) L'estomac", 
            "C) L'oreille ", 
            "D) L'anus"], 
        correctAnswer: "D) L'anus"
    },
    {
        
        question: "Quel roi est mort des suites d'une blessure lors d'un combat de joute ?",
        answer: [
            "A) Henri IV ", 
            "B) François Ier", 
            "C) Henri II ", 
            "D) Louis XIV"], 
        correctAnswer: "C) Henri II"
    },
    {
        
        question: "Qui est considéré comme le premier roi des Francs ?",
        answer: [
            "A) Charlemagne", 
            "B) Clovis ", 
            "C) Pépin le Bref ", 
            "D) Charles Martel"], 
        correctAnswer: "B) Clovis "
    },
    {
        
        question: " Dans la comptine française, qui est célèbre pour 'sa culotte à l'envers' ?",
        answer: [
            "A) Le roi Dagobert", 
            "B) Le roi Louis", 
            "C) Le roi Charles ", 
            "D) Le roi Philippe"], 
        correctAnswer: "A) Le roi Dagobert"
    },
    {
        
        question: "Quel roi français a transformé le Château de Fontainebleau en un lieu de résidence prestigieux, connu pour son style Renaissance et son parc magnifique ?",
        answer: [
            "A) Louis XIV", 
            "B) François Ier ", 
            "C) Napoléon Bonaparte ", 
            "D) Henri IV"], 
        correctAnswer: "B) François Ier"

    },
    {
        
        question: "Dans une célèbre énigme historique, quelle couleur est attribuée au cheval blanc d'Henri IV ?",
        answer: [
            "A) Rouge", 
            "B) Noir", 
            "C) Blanc", 
            "D) Gris"], 
        correctAnswer: "C) Blanc"

    },
    {
       
        question: "Qui était président de la France pendant la Première Guerre mondiale, de 1913 à 1920, dirigeant le pays à travers cette période tumultueuse ?",
        answer: [
            "A) Georges Clemenceau ", 
            "B) Raymond Poincaré ", 
            "C) Alexandre Millerand ", 
            "D) Paul Deschanel"], 
        correctAnswer: "B) Raymond Poincaré "

    },
    {
        
        question: "Qui, avant le règne de Henri II, a réellement fait connaître Bordeaux dans l'histoire de France ?",
        answer: [
            "A) Charles VII", 
            "B) Aliénor d'Aquitaine", 
            "C) Louis IX (Saint Louis)", 
            "D) Philippe IV le Bel"], 
        correctAnswer: "B) Aliénor d'Aquitaine"

    },
    {
        
        question: "Sous quel roi de France le vin de Bordeaux était-il le plus réputé ?",
        answer: [
            "A) Louis XIV ", 
            "B) Henri IV", 
            "C) François Ier ", 
            "D) Louis XV"], 
        correctAnswer: "B) Henri IV"
    }
];

const cultureQuestions = [
    {
        //
        question: "Quel est le prénom du jeune garçon, personnage principal de la série animée «Pokémon»?",
        answer: [
            "A) Pierrick ", 
            "B) Pikachu ", 
            "C) Sacha ", 
            "D) James"], 
        correctAnswer: "C) Sacha "
    },
    {
       
        question: "Qui est l'auteur de la série de livres à succès «Harry Potter» ?",
        answer: [
            "A) Woody Allen  ", 
            "B) J.K Rowling", 
            "C) Agatha Christie", 
            "D) Margaret Atwood"], 
        correctAnswer: "B) J.K Rowling"
    },
    {
        
        question: "Quel est le nom de l'album de M.Jackson, qui contient notamment le titre «Thriller» et «Billie Jean»?",
        answer: [
            "A) Off the Wall  ", 
            "B) Just Michael", 
            "C) Thriller ", 
            "D) Dangerous"], 
        correctAnswer: "C) Thriller"
    },
    {
        //
        question: "Quel est le nom associé au personnage joué par Millie Bobby Brown dans «Stranger Things»?",
        answer: [
            "A) Quarante-deux ", 
            "B) Quatre-vingt-onze ", 
            "C) Seize ", 
            "D) Onze"], 
        correctAnswer: "D) Onze"
    },
    {
        
        question: "Quel Studio développe depuis 1991 les jeux de l'univers de «Sonic The Hedgehog»?",
        answer: [
            "A) Sega", 
            "B) Nintendo ", 
            "C) Blizzard", 
            "D) Riot Games"], 
        correctAnswer: "A) Sega"
    },
    {
        //
        question: "Quel duo d'artiste francophone  à reprit en 2023 le célèbre morceau «Lady (Hear me Tonight)» sorti en 2000?",
        answer: [
            "A) Aya Nakamura & Tiakola", 
            "B) Damso & Stromae", 
            "C) Hamza & Damso ", 
            "D) Aucune des 3 réponses"], 
        correctAnswer: "C) Hamza & Damso "
    },
    {
        
        question: "Dans «Les Simpsons», comment s'appelle le voisin détesté d'Homer?",
        answer: [
            "A) Nelson Flandres ", 
            "B) Kevin-Yoann Elea", 
            "C) Ned Flanders", 
            "D) Waylon Smitters"], 
        correctAnswer: "C) Ned Flanders"
    },
    {
        
        question: "Quel réalisateur est derrière le film d'animation «Le Roi Lion» sorti en 1994 ?",
        answer: [
            "A) Steven Spielberg ", 
            "B) Hayao Miyazaki", 
            "C) John Lasseter ", 
            "D) Rob Minkoff "], 
        correctAnswer: "D) Rob Minkoff "
    },
    {
        
        question: "Quel personnage fait BIEN parti de la franchise Marvel?",
        answer: [
            "A) Le Tribunal Vivant ", 
            "B) Solar man", 
            "C) La guêpe", 
            "D) A,B et C donc D"], 
        correctAnswer: "D) A,B et C donc D"
    },
    {
        //
        question: "Quel chanteuse américaine interprète «Man Down», et raconte les remords suite à un meurtre?",
        answer: [
            "A) Shakira ", 
            "B) Yoann Fortin ", 
            "C) Rihanna ", 
            "D) Shanna Kress"], 
        correctAnswer: "C) Rihanna "
    }
];

const sportQuestions = [
    {
        question: "1- Pour quel sport les arbitres sont-ils obligés d'utiliser la langue française ?",
        answer: [
            "A) La lutte",
            "B) L'escrime",
            "C) La boxe",
            "D L'équitation"], 
        correctAnswer: "B) L'escrime"
    },
    {
        question: "Au judo, quel est le grade le plus élevé parmi ces ceintures ?",
        answer: [
            "A) Bleue",
            "B) Orange",
            "C) Verte",
            "D Jaune ", ], 
        correctAnswer: "A) Bleue"
    },
    {
        question: "A quel sport doit-on jouer pendant 2 mi-temps de 40 minutes ?",
        answer: [
            "A) Au football",
            "B) Au rugby",
            "C) Au handall",
            "D Au basket-ball ", ], 
        correctAnswer: "B) Au rugby"
    },
    {
        question: "A Quelle équipe de foot est associé le stade Matmut Atlantique ?",
        answer: [
            "A) As Saint Etienne",
            "B) Fs Nantes",
            "C) Girondins du Bordeaux",
            "D) PSG"], 
        correctAnswer: "C) Girondins du Bordeaux"
    },
    {
        question: "Quel pays a le record du pays organisateur ayant encaissé le plus grand nombre de buts en un match ?",
        answer: [
            "A) Le Brésil", 
            "B) L’argentine", 
            "C) L’Angleterre",
            "D) L’Allemagne "], 
        correctAnswer: "A) Le Brésil"
    },
    {
        question: "Que représentent les 5 anneaux olympiques ?",
        answer: [
            "A) Les 5 sports principaux des Jo",
            "B) Les 5 régions du monde",
            "C) Les 5 doigts du mais",
            "D) 5 années d’intervalles "], 
        correctAnswer: "B) Les 5 régions du monde "
    },
    {
        question: "Combien y a t'il de joueurs sur un terrain de handball ?",
        answer: [
            "A) 5",
            "B) 7",
            "C) 9",
            "D) 8"], 
        correctAnswer: "A) 5"
    },
    {
        question: "Combien de fois Paris a-t-elle accueilli les Jeux olympiques?",
        answer: [
            "A) 3 fois", 
            "B) 4 fois",
            "C) 2 fois",
            "D) 5 fois "], 
        correctAnswer: "A) 3 fois"
    },
    {
        question: "- De ces quatre disciplines, laquelle utilise la plus petite surface de jeu ?",
        answer: [
            "A) Le tennis",
            "B) Le basket-ball",
            "C) Le volley-ball",
            "D) Le handball"], 
        correctAnswer: "C) Le volley-ball"
    },
    {
        question: " Quel pays termine en tête du classement générale des jeux olympiques de pékin 2022 ?",
        answer: [
            "A) Chine", 
            "B) Norvége",
            "C) Japon",
            "D) Eat unis"], 
        correctAnswer: "B) Norvége"
    }
];