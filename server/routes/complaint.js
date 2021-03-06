const express = require("express");

const router = express.Router();

const isAuth = require("../middleware/is-auth");

const complaintController = require("../controllers/complaint");

router.get(
  "/getWorkerComplaint",
  isAuth,
  complaintController.getWorkerComplaint
);

router.get(
  "/getCitizenComplaint",
  isAuth,
  complaintController.getCitizenComplaint
);

router.get(
  "/getResolvedWorkerComplaint",
  isAuth,
  complaintController.getResolvedWorkerComplaint
);

router.get(
  "/getResolvedCitizenComplaint",
  isAuth,
  complaintController.getResolvedCitizenComplaint
);

router.get("/getTechnician", isAuth, complaintController.getTechnican);

router.put(
  "/delegateTechnician",
  isAuth,
  complaintController.delegateTechnican
);

module.exports = router;
