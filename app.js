const path = require('path');
const express = require('express');
const qr = require('qrcode-terminal');
const bodyParser = require('body-parser');

const { cors } = require('./middlewares');
const mainRouter = require('./routes/main');
const gamesRouter = require('./routes/games');

const PORT = 3000;
const HOST = 'localhost';
const url = `http://${HOST}:${PORT}`;

const app = express();

function generateQRCode(url) {
  qr.generate(url, { small: true });
}

async function startServer() {
  let chalk;
  try {
    // Use dynamic import to import chalk as an ES Module
    const chalkModule = await import('chalk');
    chalk = chalkModule.default;
  } catch (error) {
    // If dynamic import fails, fallback to requiring chalk as a CommonJS module
    chalk = require('chalk');
  }

  app.use(cors, bodyParser.json(), express.static(path.join(__dirname, 'public')), mainRouter, gamesRouter);

  app.listen(PORT, () => {
    generateQRCode(url);
    console.log(
      chalk.whiteBright('Server is running on'),
      chalk.underline.cyan(PORT),
      chalk.whiteBright('port.'),
      chalk.yellow('\nJoin now ☞'),
      chalk.underline.green(`${url}\n`)
    );
  });
}

// Call the async function to start the server
startServer().catch((error) => {
  console.error('\nError starting server:', error);
  process.exit(1);
});
