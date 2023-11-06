// Richiedi all'utente di inserire il suo nome, cognome e colore preferito
const askName = prompt('Inserisci il tuo nome');
const askSurname = prompt('Inserisci il tuo cognome');
const askFavouriteColor = prompt('Inserisci il tuo colore preferito');

// Definisci le tue costanti
const nome = 'Cristian';
const surname = 'Sassaro';
const favouriteColor = 'green';
const currentYear = '#23'; // Aggiungi l'anno corrente o un valore desiderato

// Crea la password concatenando i dati inseriti dall'utente con le costanti
const password = askName + askSurname + askFavouriteColor + currentYear;

// Mostra la password nella pagina HTML
document.getElementById('message').innerHTML = `La tua password è: ${password}`;
