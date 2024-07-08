const montre = document.querySelector('#timer');

let minutes;
let secondes;
// let departTimer;
// let deco;
// let connexion;

function loadTemps() {
    if(localStorage.length <= 1) {
        minutes = 15
        secondes = 0
        localStorage.setItem('minutes', minutes)
        localStorage.setItem('secondes', secondes)
    } else {
        minutes = JSON.parse(localStorage.getItem('minutes'));
        secondes = JSON.parse(localStorage.getItem('secondes'));   
    }
    return minutes, secondes
}
// function compare() {
//     console.log(`connexion = ${connexion}`);
//     if(localStorage.deconnexion) {
//         let locDeco = localStorage.getItem('deconnexion')
//         deco =  JSON.parse(locDeco)
//         console.log(`deco = ${deco}`);
//     }
//     let delta = connexion - deco
//     console.log(`delta = ${delta}`);
//     gainTours = ((delta / 60)/60)/60
//     console.log(gainTours);
// }


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
// 

afficheTemps(minutes, secondes)