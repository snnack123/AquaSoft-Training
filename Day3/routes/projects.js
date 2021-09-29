const express = require("express");
const router = express.Router();
const db = require("../config/database"); // Legatura cu baza de date
const Project = require("../models/Project"); //Preluam datele pe care am vrut sa le afisam. Date selectate in Project.js
module.exports = router;
// Afiseaza toate proiectele
router.get("/", (req, res) =>
    Project.findAll() // Incercam sa gasim datele din tabela Proiecte
    .then((projects) => {
        console.log(projects); //In cazul in care se reuseste gasirii datelor, le v-om afisa in consola
        res.sendStatus(200); //In cazul in care totul decurge ok, v-om afisa pe pagina web mesajul "OK"
    })
    .catch((err) => console.log(err))
);

// Adaugare proiect
router.post("/add", (req, res) => {
    // Ce date vrem sa adaugam
    const adaugare = {
        Project_name: req.body.project_name,
        Start_date: req.body.start_date,
        Planned_end_date: req.body.planned_end_date,
        Description: req.body.description,
        Project_code: req.body.project_code,
    };

    // Adaugarea datelor in baza de date
    Project.create(adaugare)
        .then((projects) => {
            res.send(projects);
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
   "project_name": "Test",
   "start_date": "01.01.2020",
   "planned_end_date": "01.01.2020",
   "description": "test",
   "project_code": "4315"
}
*/

// Update date proiect prin id
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Project.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Informatiile au fost actualizate cu succes.",
                });
            } else {
                res.send({
                    message: `Nu pot actualiza informatiile pentru proiectul cu id=${id}.`,
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
   "Project_name": "Frontend",
   "Start_date": "01.01.2020",
   "Planned_end_date": "01.01.2020",
   "Description": "usor",
   "Project_code": "4315"
}
*/
// Stergere date proiect prin id
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Project.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Proiectul a fost sters cu succes!",
                });
            } else {
                res.send({
                    message: `Nu pot sterge proiectul cu id=${id}.`,
                });
            }
        })
        .catch((err) => {
            res.status(500).send({
                message: "Eroare la stergere proiect cu id=" + id,
            });
        });
});