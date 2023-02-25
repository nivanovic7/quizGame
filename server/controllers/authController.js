const path = require("path");

const pagesFolder = '../../public/pages';

module.exports.home_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'index.html'));
}

module.exports.game_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'game.html'));
  }

  module.exports.login_get = (req, res) => {
    res.sendFile(path.join(__dirname, pagesFolder, 'login.html'));
  }