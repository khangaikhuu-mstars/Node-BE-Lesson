const express = require('express');
const port = 3000;
const app = express();
const router = express.Router();



router.get('/user', (req, res, next) => {
    console.log(req.params);
    res.send('user is done')
    next();
})

app.use('/', router);
app.listen(port, () => {
    console.log('Application is running on ' + port);
})