const wins = document.querySelector('#wins')

let dice;
let montant;
let first;
let second;
let third;


function manche() {
    first = displaySet(cln1, img1)
    second = displaySet(cln2, img2)
    third = displaySet(cln3, img3)
    compter()
  } 

function compter() {
    let montant;
    if(first === second && second === third) {
        switch(first) {
            case 1 :
                montant = 6000
                break;
            case 2 :
                montant = 5000
                break;
            case 3 :
                montant = 4000
                break;
            case 4 :
                montant = 3000
                break;
            case 5 :
                montant = 2000;
                break;
            case 6 : 
                montant = 1000;
                break;
        }
    } else if(first === second || second === third || first === third) {
        switch(first) {
            case 1 :
                montant = 5500
                break;
            case 2 :
                montant = 4500
                break;
            case 3 :
                montant = 3500
                break;
            case 4 :
                montant = 2500        
                break;
            case 5 :
                montant = 1500;
                break;
            case 6 : 
                montant = 500;
                break;
        }
    } else if(first !== second && second !== third && first !== third) {
        montant = 500
    } 
    amountWins.innerText = (`${montant}`)    
    score += montant
    bouleScore.innerText = (`${score}`)
    localStorage.setItem('score', score)
}

   
    
    

    