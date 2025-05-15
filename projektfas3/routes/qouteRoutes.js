const express = require('express');
const router = express.Router();
const db = require('../db');

// Visa alla citat
router.get('/', (req, res) => {
    db.all('SELECT * FROM quotes', (err, rows) => {
        if (err) {
            return res.status(500).send('Databasfel');
        }
        res.render('index', { quotes: rows });
    });
});

// Lägg till nytt citat
router.post('/add', (req, res) => {
    const { content, author } = req.body;
    if (!content || !author) {
        return res.status(400).send('Fyll i alla fält');
    }
    db.run('INSERT INTO quotes (content, author) VALUES (?, ?)', [content, author], (err) => {
        if (err) {
            return res.status(500).send('Kunde inte spara citatet');
        }
        res.redirect('/');
    });
});

// Redigera citat
router.post('/edit/:id', (req, res) => {
    const { id } = req.params;
    const { content, author } = req.body;
    db.run('UPDATE quotes SET content = ?, author = ? WHERE id = ?', [content, author, id], (err) => {
        if (err) {
            return res.status(500).send('Kunde inte uppdatera citatet');
        }
        res.redirect('/');
    });
});

// Ta bort citat
router.post('/delete/:id', (req, res) => {
    const { id } = req.params;
    db.run('DELETE FROM quotes WHERE id = ?', id, (err) => {
        if (err) {
            return res.status(500).send('Kunde inte ta bort citatet');
        }
        res.redirect('/');
    });
});

module.exports = router;
