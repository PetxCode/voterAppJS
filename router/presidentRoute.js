const express = require("express");
const {
  createPresident,
  readPresident,
  readPresidentFromUsers,
  readCandidate,
} = require("../controller/presidentController");

const router = express.Router();

router.route("/:id/create").post(createPresident);
router.route("/view").get(readPresident);
router.route("/view/candidate").get(readCandidate);
router.route("/:id/view").get(readPresidentFromUsers);

module.exports = router;
