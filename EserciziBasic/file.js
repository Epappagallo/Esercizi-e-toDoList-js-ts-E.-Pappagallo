
var a = 1;
let b = "ciao";
const c = false;
console.log(a, b, c);
for(let i = 0; i < 10; i++) {
    this.i = i;
    setTimeout(() => console.log(i), 1000);
};
for(var x = 0; x < 10; x++) {
    this.x = x;
    setTimeout(() => console.log(this.x), 0);
}


console.log(r);
var r = 10;

    //tipi primitivi

let n = 10;
let m = 'welcome';
let o = true;
let p = null;
let q = undefined;

console.log(typeof n, typeof m, typeof o, typeof p, typeof q);

let numero0 = 0.1;
let numero1 = 0.2;
let numeroSomma = numero0 + numero1;
console.log(numeroSomma);
console.log (Boolean(0),Boolean(""),Boolean({}),Boolean([]),Boolean("0"));

function pariDispari(number) {
    if (number % 2 === 0) {
        return "pari";
    } else {
        return "dispari";
    }
};

console.log(pariDispari(10));
console.log(pariDispari(11));

let g = null;
let h = undefined;
console.log(g==h);
console.log(g===h);

const maggiorenneMinorenne = function(eta) {
    eta >= 18 ? console.log("maggiorenne") : console.log("minorenne");
};

console.log(maggiorenneMinorenne(18));

const namess = null;
const user = namess ?? 'Ospite';
console.log(user); 

function media(number1,number2) {
    let somma = number1 + number2;
    let media = somma/2;
    console.log(media);
};

media (2,4);

let numericArray = [1,2,3,4,5,6];
function isNumber(data) {
    return typeof data === 'number';
  }

let raddoppia = (arr) => {
    let v = 0;
    arr.forEach(element => {
        if (isNumber(element)){
            arr[v] = arr[v] * 2; 
            v++;
        }
        else {
            console.log('NaN');
        }
    });
    return arr;
};

console.log(raddoppia(numericArray));

// 1. Funzione per calcolare l'area di un rettangolo
function calcolaAreaRettangolo(base, altezza) {
    console.log("Base del rettangolo:", base);
    console.log("Altezza del rettangolo:", altezza);
    
    let area = base * altezza;
    console.log("Area del rettangolo:", area);
    
    return area;
}

console.log("=== ESERCIZIO 1: AREA RETTANGOLO ===");
calcolaAreaRettangolo(5, 3);

// 2. Oggetto utente con console.log e console.table
const utente = {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25,
    email: "mario.rossi@email.com",
    citta: "Roma"
};

console.log("=== ESERCIZIO 2: OGGETTO UTENTE ===");
console.log("console.log:");
console.log(utente);

console.log("console.table:");
console.table(utente);

// 3. Ciclo for con console.log per vedere i cambiamenti
console.log("=== ESERCIZIO 3: CICLO FOR CON DEBUG ===");
for (let i = 0; i < 5; i++) {
    console.log("Iterazione", i + 1, "- Valore di i:", i);
    let quadrato = i * i;
    console.log("Quadrati di", i, "=", quadrato);
    console.log("---");
}

// 4. Funzione mistero con debug
function mistero(x) {
    console.log("Passo 1: Input ricevuto x =", x);
    
    let y = x * 2;
    console.log("Passo 2: Calcolo y = x * 2 =", x, "* 2 =", y);
    
    let risultato = y - 1;
    console.log("Passo 3: Calcolo risultato = y - 1 =", y, "- 1 =", risultato);
    
    console.log("Passo 4: Ritorno il risultato:", risultato);
    return risultato;
}

console.log("=== ESERCIZIO 4: DEBUG FUNZIONE MISTERO ===");
mistero(5);









