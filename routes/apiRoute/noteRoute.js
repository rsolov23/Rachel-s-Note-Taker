const fs = require("fs");
const router = require("express").Router();
const { notes } = require("../../db/db");
const path = require("path");
const db = require("../../db/db.json");
//create random
const { v4: uuidv4 } = require("uuid");
//GET request
router.get("/notes", (req, res) => {
  res.json(db);
});
//POST request-write to file
router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  db.push(newNote);
  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(db, null, 2),
    (err) => {
      if (err) throw err;
      res.json(newNote);
    }
  );

  console.log(newNote);
});
//DELETE note
router.delete("/notes/:id", (req, res) => {
  const idToBeDeleted = req.params.id;

  for (i = 0; i < db.length; i++) {
    if (db[i].id == idToBeDeleted) {
      db.splice(i, 1);
    }
  }

  fs.writeFile(
    path.join(__dirname, "../../db/db.json"),
    JSON.stringify(db),
    (err) => {
      if (err) throw err;
      res.json("cats");
    }
  );
});
//module exports
module.exports = router;
