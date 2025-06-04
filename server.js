// server.js
require("dotenv").config();
const express = require("express");
const Mux = require("@mux/mux-node");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const { Video } = new Mux(
  process.env.MUX_TOKEN_ID,
  process.env.MUX_TOKEN_SECRET
);

// Upload a video and return the playback ID
app.post("/upload", async (req, res) => {
  try {
    const { videoUrl } = req.body;

    const asset = await Video.Assets.create({
      input: videoUrl, // You can use a public file URL or direct upload method
      playback_policy: "public",
    });

    const playbackId = asset.playback_ids[0].id;
    res.json({ playbackId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
});

app.listen(5000, () => {
  console.log("Mux backend running on http://localhost:5000");
});
