const ecran = document.querySelector('.ecran');
const num = document.querySelectorAll('.num');
const nbr = document.querySelectorAll('.nbr');
const somme = document.getElementsByClassName('somme');

const plus = document.querySelector('.plus');
const egal = document.querySelector('.egal');

for(let i=0; i< num.length; i++){
    num[i].addEventListener('click', () =>{
        somme[0].textContent= somme[0].textContent + num[i].innerText;
    })
}







