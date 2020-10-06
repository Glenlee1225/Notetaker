const noteArray = require("../db/noteDB.js");
var noteData = require("../db/noteDB.js");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    res.json(noteData);
  });

  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
  });

  app.post("/api/clear", function (req, res) {
    noteArray.length = 0;
  });
};
