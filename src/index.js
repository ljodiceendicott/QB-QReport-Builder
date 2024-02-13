// const app = require("./app");

// const port = "8888";

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}...`);
// });
// const express = require("express");
// const app = express();

// app.listen(3000, () => console.log("Connecting to Port: 3000"));
// app.use(express.static("public"));
// app.use(express.json()); //can add different options in the parameter, will do this later

// app.get("/", (req, res) => {
//   res.set("Content-Type", "text/html");
//   res.status(200).send(express.static("public"));
// });
const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'public' folder
// app.use(express.static("public"));

const publicFolderPath = path.join(__dirname, "public");
app.use(express.static(publicFolderPath));

//Route default

// app.get("/", (req, res) => {
//   res.sendFile(path.join(publicFolderPath, "index.html"));
// });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
