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

//controllo:
// int c=0;
// for(int i=0;i<array.size();i++){
// if(array[i]==array[i]){
//     c++;
//     array[i]
// }
// }


// const countNumbersListElement = document.getElementById('numbers-list');
// countNumbersListElement.list-unstyled = false;
// const countAnswesrFormElement = document.getElementById('answers-form');
// countAnswesrFormElement.d-none = false;


let count = 10;
let countdown = setInterval(function countdown(){
    console.log(count);

    count--;

    if(count===-1){
        console.log('TEMPO SCADUTO');
        clearInterval(countdown);
    }
}, 10_00)

// const countContoAllaRovesciaElement = document.getElementById('countdown');
// countContoAllaRovesciaElement.addEventListener(function(){
//     countContoAllaRovesciaElement.fs-1 = 'countdown';
// })