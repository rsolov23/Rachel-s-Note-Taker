const router = require("express").Router();

const { notes } = require("../../db/db");

router.get("/notes", (req, res) => {
  let results = notes;
  if (req.query) {
    results = filterByQuery(req.query, results);
  }
  res.json(notes);
});

// get route for getting note by id
router.get("/notes/:id", (req, res) => {
  const result = findById(req.params.id, notes);
  if (result) {
    res.json(result);
  } else {
    res.send(404);
  }
});

router.post("/notes", (req, res) => {
  req.body.id = notes.length.toString();

  if (!validateNote(req.body)) {
    res.status(400).send("The note is not properly formatted");
  } else {
    const notes = createNewNote(req.body, notes);
    res.json(notes);
  }
});

// use req.params.id
//if err ... send send 404
//get  route for posting notes
//validate?
//create filterquery findbyid create new note
//lib folder?
// note fails validation send 404

module.exports = router;
