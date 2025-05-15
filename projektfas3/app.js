const express = require('express');
const app = express();
const quoteRoutes = require('./routes/quoteRoutes');
app.use('/routes', quoteRoutes);

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

module.exports = app;

if (require.main === module) {
    app.listen(3000, () => console.log('Servern körs på http://localhost:3000'));
}
