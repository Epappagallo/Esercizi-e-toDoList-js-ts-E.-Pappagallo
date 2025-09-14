// Es n.1
type Status = "asd" | "wtf" | "jk";
//let varStatus: Status = "agaga"; Type '"pending"' is not assignable to type 'Status'.

// Es n.2
type Admin = {
    id: number;
    role: "Admin";
};
type User = {
    id: number;
    email: string;
};
type AdminUser = Admin & User;
let utenteAmministratore: AdminUser = {
    id: 123,
    role: "Admin",
    email: "wtf@gmail.com",
};
console.log(utenteAmministratore);

// Es n.3
enum Priority {
    LOW,
    MEDIUM,
    HIGH
};
const validPriority = Priority.HIGH;
const invalidPriority = "joke";
function setPriority(param) {
    if (Object.values(Priority).includes(param)) { return true; } else { return false }
};
console.log(setPriority(validPriority));
console.log(setPriority(invalidPriority));

// Es n.4
function descrivi(classType: Admin | User) {
    if ('email' in classType) {
        console.log('e\' un class User');
    }
    else if ('role' in classType) {
        console.log('e\' un class Adim');

    };
};
const esempioUtente: User = {
    id: 121,
    email: "jhon@Ima\.org",
};
console.log(descrivi(esempioUtente));

// Es n.5

class Persona {
    nome: string;
    constructor(nome: string) {
        this.nome = nome;
    }
    saluta() {
        console.log('Hello World')
    };
}
const persona = new Persona("Eghg");
console.log(persona);

// Es n.6


