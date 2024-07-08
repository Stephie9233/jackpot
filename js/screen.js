const cln1 = document.querySelector('#cln1')
const cln2 = document.querySelector('#cln2')
const cln3 = document.querySelector('#cln3')
const img1 = document.querySelector('#img1')
const img2 = document.querySelector('#img2')
const img3 = document.querySelector('#img3')

const images = document.querySelectorAll('.image')

function displayScreen(a, b) {
    b.setAttribute('src',`img/perso/goku.png`)
    a.appendChild(b)
}

function displaySet(a, b) {
    dice = Math.floor(Math.random()*6)+1;
    console.log(dice);
    if(dice === 1) {
        b.setAttribute('src','img/perso/goku.png') 
        a.appendChild(b)
    } else if(dice === 2) {
        b.setAttribute('src','img/perso/dende.png')
        a.appendChild(b)
    } else if(dice === 3) {
        b.setAttribute('src','img/perso/vegeta.png')
        a.appendChild(b)
    } else if(dice === 4) {
        b.setAttribute('src','img/perso/tortueGeniale.png')
        a.appendChild(b)
    } else if(dice === 5) {
        b.setAttribute('src','img/perso/babidi150.png')
        a.appendChild(b)
    } else if(dice === 6) {
        b.setAttribute('src','img/perso/boo150.png')
        a.appendChild(b)
    }
    return dice
}