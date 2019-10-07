let express = require('express');
let router = express.Router();
let exampleControllers = require('../controllers/example.controller');

router.get('/example', exampleControllers.example)

module.exports = router;
