const PORT = require('../app.js');

const allowedCors = ['https://practicum.yandex.ru', 'https://students-projects.ru', `localhost:${PORT}`];

function cors(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', '*');
  }
  next();
}

app.use(cors, bodyParser.json(), express.static(path.join(__dirname, 'public')), mainRoute, gamesRouter);

module.exports = cors;
