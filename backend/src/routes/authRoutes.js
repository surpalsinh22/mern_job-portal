const express = require("express");

const {
  signup,
  login,
  logout,
  getMe
} = require("../controllers/authController");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me", protect, getMe);

// TEST COOKIE ROUTE
router.get("/test", (req, res) => {

  res.cookie("token", "hello123", {
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/"
  });

  res.json({
    msg: "Cookie set successfully"
  });

});

module.exports = router;