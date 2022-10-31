const express = require("express");
const { Client } = require("pg");
//fix eslintrc
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "agustin_alice",
  database: "postgres",
});

let message = [
  {
    id: 1,
    text: "Hello Word",
    creator_by_id: 2,
    channel_id: 5,
    created_at: " ", // aca iria la hora o el dia? ambos despues de que pase mas de un dia aparce la fecha y fue
  },
];

const messageRequest = (req) => {
  // client.query("INSERT INTO messages () ");
};
// console.log("hasta aca corre");
client
  .connect()
  // client.query()
  .then(() => console.log("connected"))
  .then(() => {
    const app = express();
    const PORT = 3002;

    app.use(express.json());

    // app.get("/api/messages/:id", (req, res) => {});

    app.post("/api/messages", (req, res) => {
      console.log(req);
      // const message = req.body;
      const result = messageRequest(req.body);
      res.json(result);
      // res.json(message);
    });

    app.get("/", (req, res) => {
      // recibe json responde con json
      res.json(message);
    });

    app.listen(PORT, () => console.log("server is listening on port " + PORT));
  })
  .catch((err) => console.error("connection error", err.stack));
console.log("console final funcionando");
