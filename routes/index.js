var express = require('express');
var router = express.Router();

//nueva variable
var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;

/* GET question. */
router.get('/question',quizController.question);

/* GET check. */
router.get('/check',quizController.check);
