const express = require("express");
const { Client } = require("pg");
//fix eslintrc
const client = new Client({
  host: "localhost:3001",
  port: 3001,
  user: "admin",
  password: "password",
});

client
  .connect()
  .then(() => console.log("connected"))
  .catch((err) => console.error("connection error", err.stack));

const app = express();
const PORT = 3002;

let messages = [
  {
    id: 0,
    text: "Hello Word",
    creator_by_id: 2,
    channel_id: 5,
    created_at: 54,
  },
];
app.use(express.json());

app.post("/api/messages", (req, res) => {
  const message = req.body;
  res.json(message);
});
app.get("/api/messages", (req, res) => {
  // recibe json responde con json
  res.json(messages);
});

app.listen(PORT, () => console.log("server is listening on port " + PORT));
