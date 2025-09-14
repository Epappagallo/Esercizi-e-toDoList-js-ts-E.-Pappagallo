let a = [1,2,3,4,5,6,7,8,9,10];
console.log(a.filter(function(value){
    let ePari = value % 2;
    return ePari === 0;
}));

const names = ["anna", "luca", "mario"];

console.log(names.map(string => string.charAt(0).toUpperCase() + string.slice(1)));

let numeri = [1,2,3,4,5];
let sum = 0;
numeri.forEach((number) => {sum = sum + number;});
console.log(sum);

let citta = ['Napoli','Bari','Roma','Milano','Venezia','Torino'];
console.log(citta.includes('Roma'));
for(let i=0; i<21; i++){
    console.log(i);
}
let i = 10;
while(i>-1){
    console.log(i);
    i--;
}

const fruits = ["Mela", "Pera", "Banana"];
for(let fruit of fruits){
    console.log(fruit);
}
let test = document.getElementById("demo");
test.innerHTML="Benvenuto!"