//require path
const path = require("path");
//require router
const router = require("express").Router();
// route to file path index.html note.html
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../,,/public/index.html"));
});

router.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

// route for wildcard *
router.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});
//module exports
module.exports = router;
