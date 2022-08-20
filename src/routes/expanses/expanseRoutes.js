const express = require('express');
const {createExpCtrl,fetchAllExpCtrl,fetchExpDetailCtrl,updateExpCtrl, deleteExpCtrl} = require('../../contorllers/expanses/expanseCtrl');
const authMiddleware = require('../../middleware/authMiddleware');

const expanseRoutes = express.Router();

expanseRoutes.post('/',authMiddleware,createExpCtrl)
expanseRoutes.get('/',authMiddleware,fetchAllExpCtrl)
expanseRoutes.get('/:id',authMiddleware,fetchExpDetailCtrl) //api/income/id
expanseRoutes.put('/:id',authMiddleware,updateExpCtrl)
expanseRoutes.delete('/:id',authMiddleware,deleteExpCtrl)

module.exports = expanseRoutes;