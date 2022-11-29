const express = require("express");
const cors = require("cors");
const { Client } = require("pg");

const client = new Client({
  host: "localhost",
  port: 5432,
  user: "agustin_alice",
  database: "postgres",
});
const insertMessage = async (body) => {
  const text =
    "INSERT INTO messages (id,text,creator_by_id,channel_id) VALUES ($1, $2, $3, $4) returning *";
  const values = [body.id, body.text, body.creator_by_id, body.channel_id];
  try {
    await client.query(text, values);
  } catch (e) {
    console.error(e.stack);
  }
  return "ok";
};

const selectAllChannels = async () => {
  const text = "SELECT * FROM channel";
  let channels = "";
  try {
    channels = await client.query(text);
  } catch (e) {
    console.error(e.stack);
  }
  return channels.rows;
};

// const selectChannel = (channel_id) => {
//   const text = "SELECT * FROM message WHERE channel_id = ($1)";
//   const id = [channel_id];
//   client
//     .query(text, id)
//     .then((res) => res.send(res.rows))
//     .catch((e) => console.error(e.stack))
//     .then(() => client.end());
// };

client
  .connect()
  .then(() => console.log("connected"))
  .then(() => {
    const app = express();
    const PORT = 3002;
    const corsOptions = {
      origin: "http://localhost:3000",
      optionsSuccessStatus: 200,
    };

    app.use(cors(corsOptions));
    app.use(express.json());

    app.post("/messages", async (req, res) => {
      await insertMessage(req.body);
      res.send();
    });
    app.get("/channels", async (req, res) => {
      const channels = await selectAllChannels();
      res.json(channels);
    });
    // app.get("/channels:id", (req, res) => {
    //   selectChannel(req.params.id);
    //   res.send();
    // });

    app.listen(PORT, () => console.log("server is listening on port " + PORT));
  })
  .catch((err) => console.error("connection error", err.stack));
