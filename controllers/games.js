const sendAllGames = (req, res) => {
  res.send(req.games);
};

const sendUpdatedGames = (req, res) => {
  res.send({
    games: req.games,
    updated: req.updatedObject
  });
};

module.exports = { sendAllGames, sendUpdatedGames };