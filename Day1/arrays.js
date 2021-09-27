// Tablourile sunt obiecte declarate sub forma de lista, care pot retine numere, caractere, sau cuvinte. Totodata, ele au metode de a efectua diverse opereatii la nivelul lor (adaugare, stergere).

// ! -- Propietatea "accessors" -- !
// Permite accesul la propietatea unui tablou folosind punctul sau paranteza dreapta.

// Prima varianta
/*const copil1 = {};
copil['nume'] = 'Vlad';
copil['prenume'] = 'Alexandru';

console.log(copil1.nume); //In aceste conditii, in consola va aparea numele copilului.*/

// A doua varianta
/*const copil2 = {
    nume: 'John',
    prenume: 'Doe'
};

console.log(copil2['nume']);
// Si in acest caz, va aparea tot numele copilului.*/

// ! -- Iteration -- !
// Aceasta metoda apeleaza o functie de fiecare data pentru fiecar element dintr-o matrice, si se foloseste metoda ForEach() pentru acest lucru.

/*
const numere = [1, 2, 3, 4];
let afiseaza = "";
numere.forEach(Aduna);

function Aduna(value, index, array) {
    afiseaza += value + "<br>";
}
*/
// Trebuiei tinut cont de faptul ca functia trebuie sa contina 3 argumente, si anume "value", "index" si "array".

// ! -- Mutator Methods -- !
// Cele mai cunoscute metode care pot schimba continutul unui tablou sunt: Unshift(), Shift(), Push(), Pop(), Reverse(), Sort() and Splice().

// Prima dintre metode( UnShift() ), adauga date noi la inceputul tabloului.
/*
const numere = [1, 2, 3, 4];
numere.unshift(6); //Va adauga numarul 6 la inceputul sirului.
*/

// A doua metoda ( Shift() ) sterge primul element din tablou.
/*
const numere = [1, 2, 3, 4];
numere.shift(); //Va sterge primul numar din tablou.
*/

// A treia metoda ( Push() ) adauga elemente la sfarsitul tabloului.
/*
const numere = [1, 2, 3, 4];
numere.push(5); //Va adauga la sfarsitul tabloului numarul 5.
*/

// A patra metoda ( Pop() ) sterge ultimul element al tabloului.
/*
const numere = [1, 2, 3, 4];
numere.pop(); //Va sterge ultimul element al tabloului.
*/

// A cincea metoda ( Reverse() ) schimba ordinea numerelor din tablou, iar primul numar din sir devine ultimul.
/*
const numere = [1, 2, 3, 4];
numere.reverse(); //Va rasturna ordinea elementelor din tablou.
*/

// A sasea metoda ( Sort() ) ordoneaza datele din tablou.
/*
const numere = [1, 3, 2, 4];
numere.sort(); //Va sorta numerle din interiorul tabloului.
*/

// Ultima metoda ( Splice() ) modifica continutul unui tablou prin eliminarea sau inlocuirea elementelor existente.

/*
const numere = [1, 2, 3, 4];
numere.splice(1, 0, 5);
// Adauga la indexul 1 numarul 5.
console.log(numere);
// O sa apara 1 5 2 3 4

numere.splice(3, 1, 6);
// Schimba 1 element la indexul 3.
console.log(nunmere);
// O sa apara 1 2 3 4 6
*/
