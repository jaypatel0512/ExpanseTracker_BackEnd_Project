const express = require("express");
const {
  createIncCtrl,
  fetchAllIncCtrl,
  fetchIncDetailCtrl,
  updateIncCtrl,
  deleteIncCtrl,
} = require("../../contorllers/income/incomeCtrl");
const authMiddleware = require("../../middleware/authMiddleware");

const incomeRoutes = express.Router();

incomeRoutes.post("/",authMiddleware, createIncCtrl);
incomeRoutes.get("/",authMiddleware, fetchAllIncCtrl);
incomeRoutes.get("/:id",authMiddleware, fetchIncDetailCtrl); //api/income/id
incomeRoutes.put("/:id",authMiddleware, updateIncCtrl);
incomeRoutes.delete("/:id",authMiddleware, deleteIncCtrl);

module.exports = incomeRoutes;
