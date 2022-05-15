const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const CharModel = require("../models/Char");

const getList = async (req, res) => {
  const { username } = req.params;
  console.log(username);

  // const user = await userModel.findById(userId).populate("chars");
  const user = await userModel
    .findOne({ username: username })
    .populate("chars");
  console.log(user);

  return res.json({ chars: user.chars });
};

const createChar = async (req, res) => {
  const { charInfo, userId } = req.body;
  const char = new CharModel({ background: { ...charInfo } });
  await char.save();

  const user = await userModel.findById(userId);
  user.chars.push(char._id);
  await user.save();

  res.json({ char });
};

router.route("/createchar").post(createChar);
router.route("/:username").get(getList);

module.exports = router;
