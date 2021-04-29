const { User, Friend, Items } = require("../../models");
const { Op } = require("sequelize");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const user = await User.create(req.body);
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    console.log(user);
    if (!user) {
      throw new Error("User not found.");
    }
    const isValidPassword = await user.checkPassword(req.body.password);
    if (!isValidPassword) {
      throw new Error("Invalid password");
    }
    req.session.isLoggedIn = true;
    req.session.userId = user.id;
    req.session.save((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Internal server error." });
      }
      res.json({ id: user.id });
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid username or password." });
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
      return;
    }
    res.end();
  });
});

router.post("/addfriend", async (req, res) => {
  try {
    const user = await User.findOne({ where: { friendcode: req.body.friendcode, id: {[Op.ne]: req.session.id} } });
    console.log(user);
    if (!user || (user.username !== req.body.friendUsername)) {
      throw new Error("Username and friendcode did not match.");
    }
    const id1= user.id
    const id2 = req.session.userId
    // const id2 = 3
    console.log(id1 + "-----------\n")
    // need to actually add the friend relationship to the the friend table.
    await Friend.create({lister: id1, follower: id2})
    await Friend.create({lister: id2, follower: id1})
    res.status(200).json({ message: "Friend added successfully!"})
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "Invalid username or password." });
  }
});

module.exports = router;
