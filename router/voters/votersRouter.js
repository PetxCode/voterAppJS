const express = require("express");
const router = express.Router();
const {
  createVote,
  readVote,
  readYourVoters,
} = require("../../controller/voters/presidentVoters");

router.route("/:id/:voterID/create").post(createVote);
// router.route("/:id/:voterID").delete(deleteVote);
router.route("/view").get(readVote);

router.route("/:id/view").get(readYourVoters);

module.exports = router;
