const router = require("express").Router();
const {
  User,
  Items,
  Friend
} = require("../models");
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
    res.render("home", {
      title: "Home Page",
      isLoggedIn: req.session.isLoggedIn,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("⛔ Uh oh! An unexpected error occurred.");
  }
});

router.get("/login", (req, res) => {
  res.render("login", {
    title: "Log-In Page"
  });
});

router.get("/signup", (req, res) => {
  res.render("signup", {
    title: "Sign-Up Page"
  });
});

router.get("/dashboard", withAuth, async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId, {
      attributes: {
        exclude: ['password', 'email']
      },
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
    const userGet = user.get({
      plain: true
    });
    res.render("dashboard", {
      user: userGet,
      isLoggedIn: req.session.isLoggedIn
    });
  } catch (error) {
    console.log(error);
  }
});

// router.get("/friend/:id");
router.get("/friend/:id", withAuth, async (req, res) => {
  try {
    // find the relationship in friend using params.id and session.id. If we get something back then use the route logic from dashboard but with the params.id instead of session.id 
    const relation = await Friend.findOne({
      where: {
        lister: req.params.id,
        follower: req.session.userId
      }
    })
    if (!relation) {
      throw new Error("No Friend Found")
    } else {
      const friend = await User.findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ['password', 'email', 'friendcode']
        },
        include: [{
          model: Items
        }, ]
      })
      const friendGet = friend.get({
        plain: true
      });
      console.log(friendGet)
      res.render("friend", {
        friend: friendGet,
        isLoggedIn: req.session.isLoggedIn
      })
    };
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Friend not found."
    });
  }
});

module.exports = router;