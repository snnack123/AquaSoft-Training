! - - TASKUL NUMARUL 2 - - !

La nivelul acestui task, s-a creat un nou proiect Express care respecta urmatoarele cerinte:

1. Instalare node, npm, express, mysql si toate pachetele conexe
2. Crearea unei baze de date formata cu un tabel
3. Inserarea unor date de test in baza de date
4. Crearea proiectului EXPRESS care sa acceseze baza de date utilizand modulul SEQUELIZE.
6. Crearea serviciilor REST pentru tabelul "Employees":
   -1 ruta GET pentru extragerea tuturor elementelor din tabela de angajati
   -1 ruta GET pentru extragerea unui singur angajat dupa nume
   -1 ruta POST pentru inserarea unui nou angajat
   -1 ruta PUT (update pe un angajat dupa primary key)
   -1 ruta DELETE (remove dupa primary key)
8. Testarea serviciilor REST folosind POSTMAN

Tabelul "Employees" are urmatoarea structura:
nume: Employees
Coloane/ Campuri:
  Id 
  Name varchar
  Adress varchar
  Email varchar
  Hire_date datetime
  Salary int
  Job_Title varchar
