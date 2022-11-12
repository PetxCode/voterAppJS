const express = require("express");
const router = express.Router();

const {
  createVote,
  readVote,
  readYourVoters,
  // deleteVote,
} = require("../../controller/voters/proVoter");

router.route("/:id/:voterID/create").post(createVote);
// router.route("/:id/:voterID").delete(deleteVote);
router.route("/view").get(readVote);

router.route("/:id/view").get(readYourVoters);

module.exports = router;
