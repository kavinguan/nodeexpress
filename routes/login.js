var express = require('express');
var router = express.Router();
var {
  mongoose,
  User
} = require("../common/mongoose")

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

User.find({
  name: '1111'
}, function (err, docs) {
  if (err) {
    console.log('err:', err);
    res.json(docs)
    return;
  }
  console.log(docs, 111111)
  // res.json(docs)
  router.get('/', function (req, res, next) {
    res.render('login', {
      title: '用户登录',
      list: docs
    });
  });
})

module.exports = router;