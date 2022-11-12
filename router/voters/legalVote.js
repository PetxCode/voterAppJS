const express = require("express");
const {
  createVote,
  readVote,
  readYourVoters,
  // deleteVote,
} = require("../../controller/voters/legalVote");

const router = express.Router();

router.route("/:id/:voterID/create").post(createVote);
// router.route("/:id/:voterID").delete(deleteVote);
router.route("/view").get(readVote);

router.route("/:id/view").get(readYourVoters);
module.exports = router;
