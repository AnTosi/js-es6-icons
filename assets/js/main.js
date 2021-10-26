// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
// Milestone 2
// Coloriamo le icone per tipo
// Milestone 3
// Creiamo una select con i tipi di icone e usiamola per filtrare le icone
// Consigli:
// Mangiate e poi iniziate a lavorare subito.
// riprodurre layout fedelmente
// fate una milestone alla volta
// mettete ciascuna milestone in una cartella (es. js-es6-icons/milestone_1)
// completata una milestone passate alla successiva, copiando il contenuto della milestone precedente nella cartella di quella nuova.
// per ciascuna milestone scrivete quello che volete fare, passo passo, in italiano.
// leggete le slide e la documentazione degli strumenti che volete utulizzare
// Divertitievi.




//array icone
let icons = 
[
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

var filter = document.getElementById("iconFilter").value;
console.log(filter);

// inzializzo icon

icon = "";
// Milestone 1
// Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
//creo in html il layout, poi lo copio qua

// Fatto html e css di base, ora ciclo per stamparle

//uso foreach per due motivi, prima cosa devo fare un ciclo su un array e non mi interessa utilizzare i e array, seconda cosa Fabio aveva detto che oggi avremmo fatto un esercizio sugli ultimi cicli ò.ò

//userò anche filter, metodo che abbiamo visto noi, e poi probabilmente userò if includes per adattare il filtro
//ah, prima di tutto questo non ho settato l'option come variabile, che mi servirà per capire quale filtro adattare
//i prefissi e la famiglia mi servono per comporre le classi che poi utilizza fontawsome per cercare l'icona, e dovrò combinarli con il name, mi pare che icona fontawsome sia tipo fas fa-user-secret, una cosa del genere, poi controllo

// dicitura precisa fontawesome: <i class="fas fa-user-ninja"></i>
//ovvero `${family} + " " + ${prefix} + ${name}
// let card = `<div class="card text-center col-2 d-flex flex-column justify-content-center my-4 mx-3">
// <div class="icon">
//     <i><i class="${icon.family} ${icon.prefix}${icon.name}"></i></i>
// </div>
// <p class="text-center">
//     CAT
// </p>
// </div>`




icons.forEach(icon => {
    document.getElementById("container").insertAdjacentHTML("beforeend", generateCard(icon))
    
});

function generateCard(icon) {
    return `<div class="card text-center col-2 d-flex flex-column justify-content-center my-4 mx-3">
    <div class="icon">
        <i><i class="${icon.family} ${icon.prefix}${icon.name} ${icon.type}"></i></i>
    </div>
    <p class="text-center">
        ${icon.name.toUpperCase()}
    </p>
    </div>`
}

//sto inserendo la milestone 2, aggiungo classe in base al tipo e assegno alla classe un colore nel css