const express = require("express");
const router = express.Router();
const db = require("../models");
const Account = db.account; //Preluam datele pe care am vrut sa le afisam. Date selectate in Account.js
const bcrypt = require("bcryptjs");
module.exports = router;
// Afiseaza toate conturile
router.get("/", (req, res) =>
    Account.findAll() // Incercam sa gasim datele din tabela Conturi
    .then((data) => {
        res.send(data); //In cazul in care se reuseste gasirii datelor, le v-om afisa in consola
        res.sendStatus(200); //In cazul in care totul decurge ok, v-om afisa pe pagina web mesajul "OK"
    })
    .catch((err) => console.log(err))
);

// Adaugare cont
router.post("/add", async(req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    // Ce date vrem sa adaugam
    const adaugare = {
        Name: req.body.name,
        Username: req.body.username,
        Password: hashedPassword,
        Email: req.body.email,
        Adress: req.body.adress,
    };

    // Adaugarea datelor in baza de date
    Account.create(adaugare)
        .then((accounts) => {
            res.send(accounts);
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
   "name": "Adrian",
   "username": "admin",
   "password": "admin1234",
   "email": "lungu@yahoo.com",
   "adress": "Ghencea"
}
*/

// Update date cont prin id
router.put("/update/:id", (req, res) => {
    const id = req.params.id;
    Account.update(req.body, {
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Informatiile au fost actualizate cu succes.",
                });
            } else {
                res.send({
                    message: `Nu pot actualiza informatiile pentru contul cu id=${id}.`,
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
   "Name":"Adrian"
   "Username": "admin",
   "Password": "admin12345",
   "Email": "lungu1@yahoo.com",
   "Adress": "Ghencea"
}
*/
// Stergere date cont prin id
router.delete("/delete/:id", (req, res) => {
    const id = req.params.id;

    Account.destroy({
            where: { id: id },
        })
        .then((num) => {
            if (num == 1) {
                res.send({
                    message: "Contul a fost sters cu succes!",
                });
            } else {
                res.send({
                    message: `Nu pot sterge proiectul cu id=${id}.`,
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
});