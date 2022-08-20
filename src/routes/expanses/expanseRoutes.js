const express = require('express');
const {createExpCtrl,fetchAllExpCtrl,fetchExpDetailCtrl,updateExpCtrl, deleteExpCtrl} = require('../../contorllers/expanses/expanseCtrl');


const expanseRoutes = express.Router();

expanseRoutes.post('/',createExpCtrl)
expanseRoutes.get('/',fetchAllExpCtrl)
expanseRoutes.get('/:id',fetchExpDetailCtrl) //api/income/id
expanseRoutes.put('/:id',updateExpCtrl)
expanseRoutes.delete('/:id',deleteExpCtrl)

module.exports = expanseRoutes;