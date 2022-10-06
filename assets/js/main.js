/* Calcolo costo biglietto del treno */

/* Istruzioni */

// Il programma chiede all'utente i chilometri che vuole percorrere
const kmTraveled = prompt ('Quanti chilometri vuoi percorrere?');
console.log(kmTraveled);
// Il programma chiede l'età del passeggero
const passengerAge = prompt ('Qual`è la tua età?');
console.log(passengerAge);

/* Calcolo prezzo biglietto */

// Calcola il prezzo in base ai km (0.21 € al km)
const ticketPrice = (kmTraveled * 0.21);
// Se il passeggero è minorenne applica il 20% di sconto
if (passengerAge < 18) {
    const underageDiscount = ((passengerAge * 20) /100);
    const underageTicketPrice = (ticketPrice - underageDiscount);
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(underageTicketPrice));
// Se il passeggero ha più di 65 anni applica il 40% di sconto
} else if (passengerAge > 65) {
    const over65Discount = ((passengerAge * 40) /100);
    const over65TicketPrice = (ticketPrice - over65Discount);
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(over65TicketPrice));
// Altrimenti non applicare nessuno sconto
} else {
    console.log(new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(ticketPrice));
}