import express from 'express';
import cookieParser from 'cookie-parser';
import { createId } from '@paralleldrive/cuid2';
import db from './database.js';
import sessions from './sessions.js';

const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    const stmt = db.prepare("INSERT INTO app_user (name, email, password) VALUES (?, ?, ?)");

    stmt.run(name, email, password, function (err) {
        if (err) return res.send("Registreringen misslyckades.");
        res.redirect('/login');
    });
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;

    db.get("SELECT * FROM app_user WHERE email = ? AND password = ?", [email, password], (err, user) => {
        if (user) {
            const sessionId = createId();
            sessions[sessionId] = { userId: user.id };
            res.cookie("sessionId", sessionId, { httpOnly: true });
            res.redirect('/dashboard');
        } else {
            res.send("Fel e-post eller lösenord.");
        }
    });
});

function requireLogin(req, res, next) {
    const session = sessions[req.cookies.sessionId];
    if (!session) return res.redirect('/login');
    req.session = session;
    next();
}

app.get('/dashboard', requireLogin, (req, res) => {
    const userId = req.session.userId;
    db.get("SELECT * FROM app_user WHERE id = ?", [userId], (err, user) => {
        if (!user) return res.redirect('/login');
        res.render('dashboard', { user });
    });
});

app.listen(3000, () => console.log("Servern körs på http://localhost:3000"));
