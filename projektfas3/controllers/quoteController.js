const db = require('../models/db');

exports.getAllQuotes = (req, res) => {
    db.all('SELECT * FROM quotes', (err, rows) => {
        if (err) return res.status(500).send('DB error');
        res.render('index', { quotes: rows });
    });
};

exports.createQuote = (req, res) => {
    const { author, text } = req.body;
    if (!author || !text) return res.status(400).send('Alla fält krävs');
    db.run('INSERT INTO quotes (author, text) VALUES (?, ?)', [author, text], () => {
        res.redirect('/');
    });
};

exports.deleteQuote = (req, res) => {
    db.run('DELETE FROM quotes WHERE id = ?', [req.params.id], () => {
        res.redirect('/');
    });
};

exports.editQuoteForm = (req, res) => {
    db.get('SELECT * FROM quotes WHERE id = ?', [req.params.id], (err, row) => {
        if (err) return res.status(500).send('DB error');
        res.render('edit', { quote: row });
    });
};

exports.updateQuote = (req, res) => {
    const { author, text } = req.body;
    db.run('UPDATE quotes SET author = ?, text = ? WHERE id = ?', [author, text, req.params.id], () => {
        res.redirect('/');
    });
};
