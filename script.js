//CONSEGNA
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//PROCEDIMENTO
// - creare il timer e vidualizzare il form 
// - inserire il comando per visualizzare 5 random number
//     - i random number devono essere inseriti in un'array 
// - al termine del countdown non si visualizzano più i random number 
// - dare la possibilità all'utente di inserire i numeri manualmente 
// - impostare una funzione che riconosce i random number e inserire un contatore che tiene il conto dei numeri indovinati
//     - impostare un if che riconosce i numeri e verifica se fanno parte dell'array oppure no tramite vero o falso
//         - se è vero avviene un'incremento del contatore
//         - se è falso il contatore rimane invariato
//     - i numeri che sono stati indovinati devono essere rimossi dall'array
// - stampare una stringa (hai indovinato 'result' numeri), dove result corrisponde al risultato del contatore


//1.generazione numeri random
//2.inserimento numeri nell'array

//3.generazione numeri scritti dall'utente
//4.inserimento numeri utente in un array



// const countNumbersListElement = document.getElementById('numbers-list');
// countNumbersListElement.list-unstyled = false;
// const countAnswesrFormElement = document.getElementById('answers-form');
// countAnswesrFormElement.d-none = false;


//const numeri
const min = 1;
const max = 50;
const tot = 5;

//elementi html
const numbersListElement = document.getElementById('numbers-list');
console.log(numbersListElement);

const countdownElement = document.getElementById('countdown');
console.log(countdownElement);

const answesrFormElement = document.getElementById('answers-form');
console.log(answesrFormElement);

const instructionsElement = document.getElementById('instructions');
console.log(instructionsElement);

const inputFieldsElement = document.querySelectorAll('#answers-form .form-control');
console.log(inputFieldsElement);

//valore timer
let time = 30;

//numeri iniziali che compariranno sullo schermo
const numbers = generateRandomNumbers(min, max, tot);
console.log(numbers);

let items = '';

for (let i=0; i < tot; i++) {

    const currentNumber = numbers[i];
    items += `<li>${currentNumber}</li>`;
}

numbersListElement.innerHTML = items;


//timer
countdownElement.innerText = time;
//countdown
const countDownId = setInterval(function(){

    countdownElement.innerText = --time;
    
    if (time === 0) {
        clearInterval(countDownId);

        //nascondere numeri
        numbersListElement.classList.add('d-none');

        //mostrare form
        answesrFormElement.classList.remove('d-none');

        //istruzioni
        instructionsElement.innerText = 'Inserire numeri';
    }



}, 1000)

//inserimento numeri by user


answesrFormElement.addEventListener('submit', confirm);




function confirm(e) {
    e.preventDefault();
    console.log('Invio form');

    for (let i=0; i < inputFieldsElement.length; i++) {
        const currentValue = inputFieldsElement[i].value;
        console.log(currentValue);
    }



}










//array numeri
function generateRandomNumbers (min, max, tot) {
    const result = [];

    //crea 5 numeri random
    for (let i=0; i < tot; i++) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
        result.push(randomNumber);
    }
    return result;
}

