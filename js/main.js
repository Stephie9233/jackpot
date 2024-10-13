const score = {
    bouleScore : document.querySelector("#score"),
    amountWins : document.querySelector("#amountWins"),
    wins : 0,
    solde : 0,
    
    load() {
        let local = localStorage.getItem(`score`)
        //console.log(local);
    
        if(local === null) {
            solde = 0
            this.bouleScore.innerText = `${solde}0`
            localStorage.setItem(`score`, this.solde)
            return this.solde;
        } else {        
            this.solde = JSON.parse(localStorage.getItem(`score`))
            console.log(score.solde);
            
            (this.solde === 0) ? 
            this.bouleScore.innerText = `${this.solde}0`: this.bouleScore.innerText = `${this.solde}`;
            return this.solde;
        }
    },

    count() {
        //console.log(set.avatars);
        if(set.avatars[0] === set.avatars[1] && set.avatars[1] === set.avatars[2]) {
            return this.wins = set.avatars[0][4]
        } else if(set.avatars[0] !== set.avatars[1] && set.avatars[1] !== set.avatars[2] && set.avatars[0] !== set.avatars[2]) {
            this.wins = set.avatars[0][2]+set.avatars[1][2]+set.avatars[2][2]
        } else {
            if(set.avatars[0] === set.avatars[1]) {
                this.wins = set.avatars[0][3]+set.avatars[2][2]
            } else if (set.avatars[1] === set.avatars[2]) {
                this.wins = set.avatars[1][3] + set.avatars[0][2]
            } else if(set.avatars[0] === set.avatars[2]) {
                this.wins = set.avatars[0][3]+ set.avatars[1][2]
            }
        }
        this.amountWins.innerText = `${this.wins}`
        this.solde += this.wins
        this.bouleScore.innerText = `${this.solde}`
       localStorage.setItem(`score`, this.solde)
        return this.solde        
    }
}

const tours = {
    countTours : document.querySelector("#tours"),
    nbTours : 100,

    load() {
        let local = localStorage.getItem(`nbTours`)
        console.log(local);
    
        if(local === null) {
            this.nbTours = 100
            this.countTours.innerText = `${this.nbTours} / 100`
            localStorage.setItem(`nbTours`, this.nbTours)
            return this.nbTours;
        } else {        
            this.nbTours = JSON.parse(localStorage.getItem(`nbTours`))
            console.log(tours.nbTours);
            
            (this.nbTours < 10) ? 
            this.countTours.innerText = `0${this.nbTours} / 100`: this.countTours.innerText = `${this.nbTours} / 100`;
            return this.nbTours;
        }
    },
    
    retireTour() {
        //console.log(nbTours);
        this.nbTours--
        if(this.nbTours == 0) {
            play.style.display = 'none';
            this.countTours.innerText = (`0${this.nbTours} / 100`);
        }
        this.countTours.innerText = (`${this.nbTours} / 100`);   
        localStorage.setItem('nbTours', this.nbTours)
    }
}

const timer = {
    chrono : document.querySelector("#timer"),
    minutes : 15,
    secondes : 0,

    getChrono() {
        setInterval(() => {
            this.afficheTemps(this.minutes, this.secondes--)
            if(this.secondes < 0) {
                this.afficheTemps(this.minutes--, this.secondes = 59)                   
            } else if(this.minutes === 0 && this.secondes === 0) {
                this.afficheTemps(this.minutes = 15, this.secondes = 0)
                tours.nbTours += 1
                tours.countTours.innerText = `${tours.nbTours} / 100`
                localStorage.setItem('nbTours', tours.nbTours)
                play.style.display = "inline";
            }
            localStorage.setItem('minutes', this.minutes)
            localStorage.setItem('secondes', this.secondes)
            this.afficheTemps(this.minutes, this.secondes)
        }, 1000)        
    },

    stopChrono() {
        if(tours.nbTours === 100) {
            clearInterval(this.getChrono())
        }
            //clearInterval(this.getChrono())
    },

    afficheTemps(minutes, secondes) {
        if(secondes < 10 && secondes >= 0) {
            this.chrono.innerText = (`${minutes} : 0${secondes}`);
        } else if(minutes < 10 && minutes >= 0) {
            this.chrono.innerText = (`0${minutes} : ${secondes}`);
        } else {
            this.chrono.innerText = (`${minutes} : ${secondes}`);
        }
    },

    load() {
        let locMinutes = localStorage.getItem('minutes')
        if(locMinutes === null) {
            this.minutes = 15
            this.secondes = 0
            this.afficheTemps(this.minutes, this.secondes)
            localStorage.setItem('minutes', this.minutes)
            localStorage.setItem('secondes', this.secondes)
        } else {
            this.minutes = JSON.parse(localStorage.getItem('minutes'));
            this.secondes = JSON.parse(localStorage.getItem('secondes'));   
            this.afficheTemps(this.minutes, this.secondes)
        }
        return this.minutes, this.secondes
    }    
}

const token = {
    values :[ 
        [1, 'goku', 1500, 3500, 6000],
        [2, 'dende', 1250, 3000, 4750],
        [3, 'vegeta', 1000, 2500, 4000],
        [4, 'tortueGeniale', 750, 2000, 3250],
        [5, 'babidi', 500, 1500, 2500],
        [6, 'boo', 250, 1000, 1750]
    ] 
}

const set = {
    dice : 0,
    amount : 0,
    avatars : [],
    play : document.querySelector("#play"),

    playTour() {        
        play.addEventListener('click', () => {
            screen.getAvatars()
            screen.displayAvatar()
            tours.retireTour()
            score.count()
        })
    },
    
    getDice() {
        this.dice = Math.floor(Math.random()*6)+1
        //console.log(this.dice);        
        return this.dice
    }   
}



const screen = {    
    columns : document.querySelectorAll(".body__main--ctn-machine-screen-clns"),
    images : document.querySelectorAll(".body__main--ctn-machine-screen-clns-img"),
    getAvatars() { 
        set.avatars = [];               
        for(let i = 0; i < 3; i++) {            
            let diceValue = set.getDice()            
            console.log(diceValue);
            set.avatars.push(token.values[diceValue-1]);
        }
        //console.log(set.avatars);
                
    },

    displayAvatar() {
        for(let i = 0 ; i < 3 ; i++) {
            this.images[i].setAttribute('src', `img/perso/${set.avatars[i][1]}.png`)
            this.columns[i] = ""
            this.columns[i].appendChild(this.images[i])
        }
    },

    displayScreen(a, b) {
        b.setAttribute('src',`img/perso/goku.png`)
        a.appendChild(b)
    }

}





//Au chargement de la page, on vérifie le local storage. S'il est vide, on y inscrit les données par défaut. S'il est déjà rempli, on récupère les données et les affiche.

window.addEventListener('DOMContentLoaded', () => {
    score.load()
    tours.load()
    timer.load()
    if(tours.nbTours < 100) {timer.getChrono()}
    if(timer.minutes === 0 && timer.secondes === 0) {timer.stopChrono()}
    amountWins.innerText = '000';
    for(let i = 0; i<3; i++) {
        screen.displayScreen(screen.columns[i], screen.images[i])
    }
    if(tours.nbTours === 0) {play.style.display = 'none'}
})

set.playTour() 
