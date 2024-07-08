//VARIABLES
const rec = document.querySelector('#record')

rec.addEventListener('click', deconnecter)

function loadConnexion() {
    connexion = Date.now()
    console.log(`connexion = ${connexion}`);
    localStorage.setItem('connexion', connexion)
}


function deconnecter() {
    let deconnexion = Date.now()
    localStorage.setItem('deconnexion', JSON.stringify(deconnexion))
    console.log('enregistré')
    clearInterval(departTimer)
    window.close()

}
