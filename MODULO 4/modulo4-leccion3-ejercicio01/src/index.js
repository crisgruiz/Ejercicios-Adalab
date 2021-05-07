//EJERCICIO 1

const express = require("express");
const cors = require("cors");

// create server
const app = express();

// set express middleware
app.use(express.json());
app.use(cors());

// create app server
const serverPort = 3000;
app.listen(serverPort, () => {
  console.log(`App listening at http://localhost:${serverPort}`);
});

// endpoints, more info about express response: https://expressjs.com/es/api.html#res

app.get("/response-a", (req, res) => {
  res.json({ result: "ok" });
});

app.get("/response-b", (req, res) => {
  const date = new Date();
  const htmlCode = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>Express</title>
        <link rel="stylesheet" href="http://beta.adalab.es/resources/stylesheets/all.css" >
      </head>
      <body class="page">
        <header>
          <h1>Esta es una página de prueba.</h1>
        </header>
      </body>
    </html>`;
  res.send(htmlCode);
});

app.get("/response-c", (req, res) => {
  const num = Math.floor(Math.random() * 10);
  console.log(num);
  if (num % 2 === 0) {
    res.json({ result: "https://www.youtube.com" });
  } else {
    res.json({ result: "https://www.instagram.com/" });
  }
});

app.get("/response-d", (req, res) => {
  //console.log(req.query.name === "user=1" || req.query.name === "user=2");
  if (req.query.user === "1" || req.query.user === "2") {
    res.status(200).json({ result: "ok" });
  } else {
    res.status(404).json({ result: "error: invalid query param" });
  }
});
