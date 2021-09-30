const express = require("express");
const router = express.Router();
const db = require("../models");
const Employee = db.employee; //Preluam datele pe care am vrut sa le afisam. Date selectate in Employee.js
const Project = db.project;

// Afiseaza toti angajatii
router.get("/", (req, res) =>
    Employee.findAll() // Incercam sa gasim datele din tabela Angajati
    .then((employees) => {
        console.log(employees); //In cazul in care se reuseste gasirii datelor, le v-om afisa in consola
        res.sendStatus(200); //In cazul in care totul decurge ok, v-om afisa pe pagina web mesajul "OK"
    })
    .catch((err) => console.log(err))
);

// Afiseaza 1 singur angajat pe baza de nume
router.get("/profile/:Name", (req, res) => {
    const empName = req.params.Name;
    Employee.findOne({ where: { Name: empName } })
        .then((employees) => {
            console.log(employees);
            res.sendStatus(200);
        })
        .catch((err) => console.log(err));
});

// Adaugare angajat
router.post("/add", (req, res) => {
    // Ce date vrem sa adaugam
    const adaugare = {
        Name: req.body.name,
        Adress: req.body.adress,
        Email: req.body.email,
        Hire_date: req.body.hire_date,
        Salary: req.body.salary,
        Job_Title: req.body.job_title,
        projects_Id: req.body.projects_id,
    };

    // Adaugarea datelor in baza de date
    Employee.create(adaugare)
        .then((employees) => {
            res.send(employees);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Nu am putut adauga datele in tabel.",
            });
        });
});

/*
Exemplu:
{
   "name": "Robert",
   "adress": "Buzau",
   "email": "robert@yahoo.com",
   "hire_date": "2020-01-01",
   "salary": "3500",
   "job_title": "middle",
   "projects_id: 1"
}
*/

// Update date angajat prin id
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Employee.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Informatiile au fost actualizate cu succes.",
                });
            } else {
                res.send({
                    message: `Nu pot actualiza informatiile pentru angajatul cu id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Eroare actualizare date pentru id=" + id,
            });
        });
});

/* 
Exemplu:
{
   "Name": "Robert",
   "Adress": "Buzau",
   "Email": "robert@yahoo.com",
   "Hire_date": "2020-01-01",
   "Salary": "1500",
   "Job_title": "middle",
   "projects_Id": "2"
}
*/
// Stergere date angajat prin id
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Employee.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Angajatul a fost sters cu succes!",
                });
            } else {
                res.send({
                    message: `Nu pot sterge angajatul cu id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Eroare la stergere angajat cu id=" + id,
            });
        });
});

router.get("/emp_projects", (req, res) => {
    Employee.findAll({
            include: [{
                model: Project,
            }, ],
        })
        .then((data) => {
            res.send(data);
        })
        .catch((err) => console.log(err));
});
module.exports = router;