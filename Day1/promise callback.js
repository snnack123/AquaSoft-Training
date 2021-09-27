// ! -- Promise -- !
// Obiectul "promise" reprezinta reusita sau esecul unei operatii si valoarea rezultata. 
// Astfel, atunci cand aceasta functie este apelata, rezultatul poate sa fie doar unul pozitiv in cate totul a decurs conform planului, si altul in care a aparut o eroare si ne este intoarsa eroarea ca si valoare.
// Acest timp de operatie poate avea mai multe stari: "pending" care este statusul initial (care nu a fost niciodata acceptat sau respsins), "fulfilled" atunci cand operatia a fost efectuata cu succes si a returnat o valoare, si "rejected" atunci cand operatia nu a decurs asa cum trebuie si a aparut o eraore.

// ! -- Callback -- !
// Este o functie care este plasata ca si argument altei functii. Aceasta tehnica permite unei functii sa apeleze alte functii.

/*
function aduna(num1, num2) {
    let suma = num1 + num2;
}

function inmulteste() {
    let produs = num1 * num2;
}

console.log(aduna(2, 3), inmulteste(2, 3));
*/

// In acest cod, am incercat sa afisez suma si produsul a doua numere prin intermediul altei functii.