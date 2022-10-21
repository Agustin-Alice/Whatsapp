const express = require("express");
const { Client } = require("pg");
//fix eslintrc
const client = new Client({
  host: "localhost",
  port: 5432,
  user: "postgres",
  password: "Elogse04dn",
  database: "messages",
});

let messages = [
  {
    id: 1,
    text: "Hello Word",
    creator_by_id: 2,
    channel_id: 5,
    // created_at: " ", // aca iria la hora o el dia?
  },
];

client
  .connect()
  .then(() => console.log("connected"))
  .then(() => {
    const app = express();
    const PORT = 3002;

    app.use(express.json());

    // app.get("/api/messages/:id", (req, res) => {});

    // app.post("/api/messages", (req, res) => {
    //   const message = req.body;
    //   res.json(message);
    // });

    const querys = "INSERT INTO messages VALUES($1, $2)";
    const values = messages;
    app.post("/", (req, res) => {
      const result = client.query(querys, values).then((res) => {
        console.log(res.rows[0]);
      });
      console.log(result);
      res.json(messages);
    });

    app.get("/", (req, res) => {
      // recibe json responde con json
      res.json(messages);
    });

    app.listen(PORT, () => console.log("server is listening on port " + PORT));
  })
  .catch((err) => console.error("connection error", err.stack));
