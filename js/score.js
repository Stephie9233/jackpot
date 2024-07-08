const bouleScore = document.querySelector("#score");


let score;

function loadScore() {
    if(localStorage.length === 0) {
        score = 0
        localStorage.setItem('score', score)
        return score;
    } else {
        let locScore = localStorage.getItem('score')
        score = JSON.parse(locScore)
        return score;
    }
} 

function afficheScore() {
    score = JSON.parse(localStorage.getItem('score'))
    bouleScore.innerText = (`${score}`);
    if(score === 0) {
        bouleScore.innerText = (`${score}00`); 
    } else if(score >= 100 && score < 1000) {
        bouleScore.innerText = (`${score}0`);
    }
}





