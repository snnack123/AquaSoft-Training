//Operatorul "spread" permite o prescurtare in cod atunci cand vrem de exemplu sa afisam ceva in consola, sa facem o suma, sa unim doua siruri, etc.

//Sintaxa folosita: ...cod;

//Acest operator este extrem de folosit la nivelul sirurilor.

//const numbers = [1, 3, 4];
//console.log(sum(...numbers));

//Practic, ceea ce am facut prin acele trei puncte a fost sa ii spun sa ia toate numerele din sirul respectiv. Acest lucru ajuta foarte mult atunci cand aducem update codului, deoarece la doar trei numere am fi foarte tentati sa procedam in acest fel:


//const numbers = [1, 3, 4];
//console.log(numbers[0] + numbers[1] + numbers[2]);

// Singura problema apare atunci cand vrem sa mai adaugam un numar in sir sau sa il scoatem. Cand facem aceasta schimbare, trebuie sa schimbam si codul unde se afiseaza suma numerelor din sirul respectiv.

//Utilizand operatorul "spread", acesta va stii exact cate numere sunt in sir, iar noi nu trebuie sa ne mai batem capul cu vechea metoda de adunare a numerelor din sir.