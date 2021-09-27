// "Var" a fost foarte utilizat inainte sa apara ES6 (EcmaScript 6).
// Utilizand un tip de date "var", putem declara o variabila careia ii putem schimba oricand valoarea, respectand cateva conditii.

//Una dintre diferentele intre "var" si "let", este ca o variabila de tip "var" poate sa fie redefinita de mai multe ori si fara restrictii, pe cand o variabila "let" poate sa fie declarata o singura data.

//Alta diferenta este faptul ca daca intr-un bloc declari o variabila de tip "var" si una de tip "let", prima o sa supravietuiasca in momentul in care iesim din blocul respectiv.

/*
function test() {
    var nr1 = 1;
    let nr2 = 2;
    console.log(`${nr1} + ${nr2} = ${nr1 + nr2}`);

    {
        var nr3 = 3;
        let nr4 = 4;
        console.log(`${nr3} + ${nr4} = ${nr3 + nr4}`);
    }
    console.log(nr3); // Variabila declarata cu "var" in blocul creat anterior, a supravietuit iesirii din bloc.
    console.log(`${nr3} + ${nr4} = ${nr3 + nr4}`); //Genereaza o eroare, deoarece nu recunoaste cine este nr4. Nr4 este o variabila de tip "let" din ES6 si care dispare atunci cand iesim din blocul in care a fost creata.
}
test();
*/

//Variabilele declarate cu "const" nu isi pot schimba valoarea dupa ce au fost deja declarate.
//Totodata, "const" respecta aceeasi conditie pe care o respecta si "let", si anume faptul ca daca ea a fot declarata intr-un bloc, la iesirea din blocul respectiv nu o sa supravietuiasca.

/*
const incercare = "da";
incercare = "nu"; //Va aparea o eroare in consola care ne va indica faptul ca incercam sa atribuim o alta valoare unei constante care a fost deja declarata anterior.
*/