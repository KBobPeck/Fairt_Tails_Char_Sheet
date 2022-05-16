const express = require("express");
const router = express.Router();
const userModel = require("../models/user");
const CharModel = require("../models/Char");
const defaultChar = require("../uti/baseCharModel");

const getList = async (req, res) => {
  const { username } = req.params;

  // const user = await userModel.findById(userId).populate("chars");
  const user = await userModel
    .findOne({ username: username })
    .populate("chars");

  return res.json({ chars: user.chars });
};

const createChar = async (req, res) => {
  const { charInfo, userId } = req.body;
  const char = new CharModel(defaultChar);
  char.background = { ...char.background, ...charInfo };
  await char.save();

  const user = await userModel.findById(userId);
  user.chars.push(char._id);
  await user.save();

  res.json({ char });
};

const deleteChar = async (req, res) => {
  const { id, userId } = req.body;

  await CharModel.findByIdAndDelete(id);
  const user = await userModel.findById(userId);

  user.chars = user.chars.filter((each) => each.toString() !== id);
  await user.save();

  res.json({ msg: "success", id });
};

const getChar = async (req, res) => {
  const { id } = req.params;
  const char = await CharModel.findById(id);

  if (!char)
    return res.json({ err: "404", msg: "There is no character with that ID" });
  return res.json(char);
};

router.route("/getChar/:id").get(getChar);
router.route("/createchar").post(createChar);
router.route("/deletechar").post(deleteChar);
router.route("/:username").get(getList);

module.exports = router;
