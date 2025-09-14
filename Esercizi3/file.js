const studente = {
    nome: "Giacomo",
    eta: "22",
    corsi: "5",
};
console.log(studente.nome + studente.corsi);

const automobile = {
    marca: "fiat",
    modello: "500",
};
Object.defineProperty(automobile, "anno", { value: 2005,});
console.log(automobile.anno);

const libro = {
    titolo: "nome",
    autore: "autore",
    pagine: "0",
}

const array0 = [
    {
    titolo: "Nome della rosa",
    autore: "bho",
    pagine: "3000",
},
    {
    titolo: "Harry Potter",
    autore: "non ricordo",
    pagine: "2000",
},
{
    titolo: "Zio Paperone",
    autore: "non ricordo mica",
    pagine: "200",
},
];
for (const { titolo } of array0) {
    console.log(titolo);
}

function greet(nome, saluto="Ciao") {
    console.log(saluto + " " + nome);
}

greet("mario");

function somma (...numeri) {
    return numeri.reduce((totale, valore) => totale + valore, 0);
}

console.log(somma(2,3,5)); // 10

function quadrato(n) {
    let quadrato = 0;
    quadrato = n**2;
    return quadrato;
};
console.log(quadrato(7));

function dividi(dividendo,divisore) {
    let risultato = 0;
    let resto = 0;
    risultato = dividendo/divisore;
    resto = dividendo%divisore;
    return "risultato =" + risultato + ",\n" + "resto =" + resto; 
};

console.log(dividi(7,3));