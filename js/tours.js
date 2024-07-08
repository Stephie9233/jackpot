const tours = document.querySelector('.tours');
const btn = document.querySelector('#play')

let nbTours;

function loadTours() {
    if(localStorage.length <= 3) {
        nbTours = 100
        localStorage.setItem('nbTours', nbTours)
    } else {
        nbTours = JSON.parse(localStorage.getItem('nbTours'))
    }
    tours.innerText = (`${nbTours} / 100`);   
    return nbTours
} 

function retireTour() {
    console.log(nbTours);
    nbTours--
    if(nbTours == 0) {
        btn.style.display = 'none';
    }
    tours.innerText = (`${nbTours} / 100`);   
    localStorage.setItem('nbTours', nbTours)
}

