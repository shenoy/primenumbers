const express = require('express');
const numController = require('../controllers/numController');

const router = express.Router();

router
  .route('/')
  .post(numController.createNumbers)
  



module.exports = router;
