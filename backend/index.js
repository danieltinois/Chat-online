const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "01297c71-d0f6-47fa-bc45-29650d9938f8" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(r.response.status).json(r.response.data);
  }
});

app.listen(3001);
