//Au chargement de la page, on vérifie le local storage. S'il est vide, on y inscrit les données par défaut. S'il est déjà rempli, on récupère les données et les affiche.
window.addEventListener('DOMContentLoaded', () => {
    loadScore()
    afficheScore()
    loadTemps()
    afficheTemps(minutes, secondes)
    amountWins.innerText = '000';
    loadTours()
    displayScreen(cln1, img1)
    displayScreen(cln2, img2)
    displayScreen(cln3, img3)
});



btn.addEventListener('click', () => {    
    retireTour()
    manche()
})

// rec.addEventListener('click', deconnecter) 









let deconnexion = new Date(document.lastModified)

// function rebours() {
//     minutes = 59
//     secondes = 60
//     console.log(minutes + ' : ' + secondes);
//     setInterval(() => {
//         if(secondes > 0) {
//             minutes
//         }
//         secondes -= 1
//         console.log(minutes + ' : ' + secondes);
//     }, 1000)








