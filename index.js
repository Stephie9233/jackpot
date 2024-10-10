/***********************VARIABLES*******************************/
/*SCORE*/
//DOM
const bouleScore = document.querySelector("#score");
//DONNEES
let score;

// TOURS
//DOM
const tours = document.querySelector('#tours');
const btn = document.querySelector('#play')
//DONNEES
let nbTours;

//TEMPS
//DOM
const montre = document.querySelector('#timer');
//DONNEES
let minutes;
let secondes;

//GAINS
//DOM
const amountWins = document.querySelector('#amountWins')

//MACHINE
//DOM
const cln1 = document.querySelector('#cln1')
const cln2 = document.querySelector('#cln2')
const cln3 = document.querySelector('#cln3')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')

const images = document.querySelectorAll('.image')

/***********************FONCTIONS*******************************/
//LOCALSTORAGE
//SCORE
/*On vérifie si le localStorage en contient déjà un en mémoire. Si non, on l'initialise à 0 dans localstorage, si oui, on récupère le score enregistré.*/
function loadScore() {
    let locScore = localStorage.getItem('score')
    if(locScore === null) {
        score = 0
        afficheScore()
        localStorage.setItem('score', score)
        return score;
    } else {        
        score = JSON.parse(locScore)
        afficheScore()
        return score;
    }
}

//TOURS
function loadTours() {
    let locTours = localStorage.getItem('nbTours')
    console.log(locTours);
    
    if(locTours == null) {
        nbTours = 100
        tours.innerText = `${nbTours} / 100`
        localStorage.setItem('nbTours', nbTours)
        return nbTours
    } else {
        nbTours = JSON.parse(localStorage.getItem('nbTours'))
        console.log(nbTours);        
        tours.innerText = (`${nbTours} / 100`)
        return nbTours
    }  
}

//TEMPS
function loadTemps() {
    let locMinutes = localStorage.getItem('minutes')
    if(locMinutes <= null) {
        minutes = 15
        secondes = 0
        afficheTemps(minutes, secondes)
        localStorage.setItem('minutes', minutes)
        localStorage.setItem('secondes', secondes)
    } else {
        minutes = JSON.parse(localStorage.getItem('minutes'));
        secondes = JSON.parse(localStorage.getItem('secondes'));   
        afficheTemps(minutes, secondes)
    }
    return minutes, secondes
}

//DONNEES

//SCORE
/*On affiche le score dans le container après avoir paramètré l'affichage (afficher 00 et non pas 0*/
function afficheScore() {
    score = JSON.parse(localStorage.getItem('score'))
    bouleScore.innerText = (`${score}`);
    if(score === 0) {
        bouleScore.innerText = (`${score}00`); 
    }
}

//TOURS
/*On décrémente le nombre de tours à l'appel de la fonction*/
function retireTour() {
    //console.log(nbTours);
    nbTours--
    if(nbTours == 0) {
        btn.style.display = 'none';
    }
    tours.innerText = (`${nbTours} / 100`);   
    localStorage.setItem('nbTours', nbTours)
}

//TEMPS
/*On paramètre l'affichage du chrono*/
function afficheTemps(minutes, secondes) {
    if(secondes < 10 && secondes > 0) {
        montre.innerText = (`${minutes} : 0${secondes}`);
    } else if(secondes === 0) {
        montre.innerText = (`${minutes} : ${secondes}0`); 
    } else if(minutes < 10 && minutes > 0) {
        montre.innerText = (`0${minutes} : ${secondes}`);
    } else if(minutes === 0) {
        montre.innerText = (`${minutes}0 : ${secondes}`); 
    } else {
        montre.innerText = (`${minutes} : ${secondes}`);
    }
}


/**************************SCRIPT*******************************/
//Au chargement de la page, on vérifie le local storage. S'il est vide, on y inscrit les données par défaut. S'il est déjà rempli, on récupère les données et les affiche.
window.addEventListener('DOMContentLoaded', () => {
    loadScore()
    // afficheScore()
    loadTemps()
    loadTours()
    //rebours()
    afficheTemps(minutes, secondes)
    amountWins.innerText = '000';
    
    displayScreen(cln1, img1)
    displayScreen(cln2, img2)
    displayScreen(cln3, img3)
});

function rebours() {
    console.log(`nbTours : ${nbTours}, minutes : ${minutes}, secondes : ${secondes}`);
    if(nbTours < 100) {
        setInterval(() => {
            afficheTemps(minutes, secondes--)
            if(secondes === 0) {
                minutes -= 1
                secondes = 59
            }
            afficheTemps(minutes, secondes)
        })
    }
    
}

btn.addEventListener('click', () => {    
    retireTour()
    manche()
    
})

// rec.addEventListener('click', deconnecter) 









let deconnexion = new Date(document.lastModified)

// function rebours() {
//     minutes = 15
//     secondes = 00
//     console.log(minutes + ' : ' + secondes);
//     setInterval(() => {
//         if(secondes > 0) {
//             minutes
//         }
//         secondes -= 1
//         console.log(minutes + ' : ' + secondes);
//     }, 1000)








