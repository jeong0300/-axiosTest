const express = require("express");
const router = express.Router();
const careerController = require("../controllers/careerController");

router.get("/", careerController.getActors);
router.get("/manActors", careerController.getManActor);
router.get("/womanActor", careerController.getWomanActor);
router.get("/movie", careerController.getMovie);
router.get("/drama", careerController.getDrama);
router.get("/sameWork", careerController.getSameTitle);

module.exports = router;
