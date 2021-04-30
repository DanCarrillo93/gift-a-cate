const router = require("express").Router();
const { User, Items, Friend } = require("../models");
const withAuth = require("../util/withAuth");
// const { route } = require("./api/users-router");

// use withAuth middleware to redirect from protected routes.
// const withAuth = require("../util/withAuth");

// example of a protected route
// router.get("/users-only", withAuth, (req, res) => {
//   // ...
// });

router.get("/", async (req, res) => {
  try {
    let user;
    if (req.session.isLoggedIn) {
      user = await User.findByPk(req.session.userId, {
        exclude: ["password"],
        raw: true,
      });
    }
      res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
      user,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", { title: "Log-In Page" });
});

router.get("/signup", (req, res) => {
  res.render("signup", { title: "Sign-Up Page" });
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId, {
    exclude: ["password"],
    include: [{
      model: Items
    },
    {
      model: User,
      through: Friend,
      as: "lister"
    }
  ]
  })
  const userGet = user.get({plain: true});
  res.render("dashboard", {user: userGet, isLoggedIn: req.session.isLoggedIn});
} catch (error) {
  console.log(error);
}
});

// route.get("/friend/:id");

module.exports = router;
