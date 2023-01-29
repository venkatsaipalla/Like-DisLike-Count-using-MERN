const { response } = require("express");
const express = require("express");

const router = express.Router();
const LikeDisLikeCountTable = require("../../models/countSchema");

router.post("/add", (req, res) => {
  const { id, likes_count, dislikes_count } = req.body;
  add = new LikeDisLikeCountTable({
    id,
    likes_count,
    dislikes_count,
  });
  add.save().then((data) => res.send(data));
});
// routes @GET api/user/test
// desc Tests the user routes
// @access Public
router.get("/all", (req, res) => {
  LikeDisLikeCountTable.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => console.log(err));
});

router.put("/update/:userId", async (req, res) => {
  try {
    const item = await LikeDisLikeCountTable.find({ id: req.params.userId });
    const {
      likes_count = item[0].likes_count,
      dislikes_count = item[0].dislikes_count,
    } = req.body;
    let CountDetails = await LikeDisLikeCountTable.findByIdAndUpdate(
      { _id: item[0]._id },
      { likes_count, dislikes_count },
      { new: true }
    );
    res.json(CountDetails);
  } catch (err) {
    console.log(err);
    res.send(400).send("Server Error");
  }
});

module.exports = router;
