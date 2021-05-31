const express = require("express");
const { notes } = require("./db/db");

const apiRoute = require("./routes/apiRoute/noteRoute");
const htmlRoutes = require("./routes/htmlRoute");
const PORT = process.env.PORT || 3001;
const app = express();

// const apiRoute = require("./routes/apiRoute/noteRoute");
// const htmlRoute = require("./routes/htmlRoute/htmlRoute");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
//app.use
app.use("/api", apiRoute);
app.use("/", htmlRoutes);
//parse incoming string or array
//parse incoming json data
// app.get("/api/notes", (req, res) => {
//   res.send(notes);
// });

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
