const score = {
    bouleScore : document.querySelector("#score"),
    solde : 0,
    
    load() {
        let local = localStorage.getItem(`score`)
        console.log(local);
    
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
            this.countTours.innerText = `0${this.nbTours}`: this.countTours.innerText = `${this.nbTours} / 100`;
            return this.nbTours;
        }
    },
    
    retireTour() {
        //console.log(nbTours);
        nbTours--
        if(nbTours == 0) {
            btn.style.display = 'none';
        }
        tours.innerText = (`${nbTours} / 100`);   
        localStorage.setItem('nbTours', nbTours)
    }
}

const timer = {
    chrono : document.querySelector("#timer"),
    minutes : 15,
    secondes : 0,

    afficheTemps(minutes, secondes) {
        if(secondes < 10 && secondes > 0) {
            this.chrono.innerText = (`${minutes} : 0${secondes}`);
        } else if(secondes === 0) {
            this.chrono.innerText = (`${minutes} : ${secondes}0`); 
        } else if(minutes < 10 && minutes > 0) {
            this.chrono.innerText = (`0${minutes} : ${secondes}`);
        } else if(minutes === 0) {
            this.chrono.innerText = (`${minutes}0 : ${secondes}`); 
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

const set = {
    dice : 0,
    amount : 0,
    avatars : [],


    getDice() {
        this.dice = Math.floor(Math.random()*6)+1
        //console.log(this.dice);
        
        return this.dice
    },

    displayAvatar(a, b) {
        //console.log(this.dice);        
        if(this.dice == 1) 
        {
            b.setAttribute('src','img/perso/goku.png') 
            a.appendChild(b)
        }
        else if(this.dice == 2) 
        {
            b.setAttribute('src','img/perso/dende.png')
            a.appendChild(b)
        } 
        else if(this.dice == 3) 
        {
            b.setAttribute('src','img/perso/vegeta.png')
            a.appendChild(b)
        } 
        else if(this.dicer == 4) 
        {
            b.setAttribute('src','img/perso/tortueGeniale.png')
            a.appendChild(b)
        } 
        else if(this.dice == 5) 
        {
            b.setAttribute('src','img/perso/babidi150.png')
            a.appendChild(b)
        }
        else if (this.dice == 6) 
            {
            b.setAttribute('src','img/perso/boo150.png')
            a.appendChild(b)
        }
    },

    getAvatars() {
        for(let i = 0; i< 3; i++) {
            this.getDice()            
            this.avatars.push(this.dice)   
            this.displayAvatar(`cln${i+1}`, `img${i+1}`)         
        }
        //console.log(this.avatars);
    },
}


const screen = {
    

    displayScreen(a, b) {
        b.setAttribute('src',`img/perso/goku.png`)
        a.appendChild(b)
    },

    displayAvatar(a, b) {
        set.getDice()
        //console.log(dice);
        if(this.dice === 1) {
            b.setAttribute('src','img/perso/goku.png') 
            a.appendChild(b)
        } else if(this.dice === 2) {
            b.setAttribute('src','img/perso/dende.png')
            a.appendChild(b)
        } else if(this.dice === 3) {
            b.setAttribute('src','img/perso/vegeta.png')
            a.appendChild(b)
        } else if(this.dice === 4) {
            b.setAttribute('src','img/perso/tortueGeniale.png')
            a.appendChild(b)
        } else if(this.dice === 5) {
            b.setAttribute('src','img/perso/babidi150.png')
            a.appendChild(b)
        } else if(this.dice === 6) {
            b.setAttribute('src','img/perso/boo150.png')
            a.appendChild(b)
        }
        return this.dice
    }
}



set.getAvatars()



//Au chargement de la page, on vérifie le local storage. S'il est vide, on y inscrit les données par défaut. S'il est déjà rempli, on récupère les données et les affiche.

window.addEventListener('DOMContentLoaded', () => {
    score.load()
    tours.load()
    timer.load()
    screen.displayScreen(cln1, img1)
    screen.displayScreen(cln2, img2)
    screen.displayScreen(cln3, img3)

    amountWins.innerText = '000';
})