var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toUTCString(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toUTCString(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res, next) => {
  res.render("form");
});

router.post("/new", (req, res, next) => {
  messages.push({
    text: req.body.messageText,
    user: req.body.messageUser,
    added: new Date().toUTCString(),
  });
  res.redirect("/");
});

module.exports = router;
