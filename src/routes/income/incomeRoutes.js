const express = require('express');
const {createIncCtrl,fetchAllIncCtrl,fetchIncDetailCtrl,updateIncCtrl, deleteIncCtrl} = require('../../contorllers/income/incomeCtrl');


const incomeRoutes = express.Router();

incomeRoutes.post('/',createIncCtrl)
incomeRoutes.get('/',fetchAllIncCtrl)
incomeRoutes.get('/:id',fetchIncDetailCtrl) //api/income/id
incomeRoutes.put('/:id',updateIncCtrl)
incomeRoutes.delete('/:id',deleteIncCtrl)

module.exports = incomeRoutes;