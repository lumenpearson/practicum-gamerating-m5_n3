const fs = require('fs').promises;
const mainRouter = require('express').Router();

mainRouter.get('/', (req, res) => {
  fs.readFile('./public/index.html', 'utf-8').then((data) => {
    res.header('Content-Type', 'text/html').send(data);
  });
});
module.exports = mainRouter;
