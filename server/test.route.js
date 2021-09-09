const { Router } = require("express");

const router = Router();

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ hello: "world" }).status(200);
});

module.exports = router;
