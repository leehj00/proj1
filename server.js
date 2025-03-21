const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/blog', (req, res) => {
  res.render('blog');
});

app.get('/review', (req, res) => {
  res.render('review');
});

app.get('/faq', (req, res) => {
  res.render('faq');
});

app.get('/cake-menu', (req, res) => {
  res.render('cake-menu');
});

app.get('/gallery', (req, res) => {
  res.render('gallery');
});

app.get('/customCake', (req, res) => {
  res.render('customCake');
});

app.get('/orderOnline', (req, res) => {
  res.render('orderOnline');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
