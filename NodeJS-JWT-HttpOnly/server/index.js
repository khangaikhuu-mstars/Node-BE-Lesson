const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.get('/', (req, res) => {
  res.status(202).cookie('myCat', 'Pacman', {sameSite: 'strict', path: '/', expires: new Date(new Date().getTime() + 30 * 1000), httpOnly: true}).send('cookie is being initialized');
});

app.get('/deleteCookie', (req, res) => {
  res.status(202).clearCookie('myCat').send('cookie is being deleted');
});
app.listen(3002, () => {
  console.log('App is started on PORT: ' + 3002);
});
