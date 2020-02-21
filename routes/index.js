var express = require('express');
var router = express.Router();
const ejs = require('ejs')
// var {
//   mongoose,
//   User
// } = require("../common/mongoose")

router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    list: '1234'
  });
});

/* GET home page. */
// User.find({}, function (err, docs) {
//   if (err) {
//     console.log('err:', err);
//     res.json(docs)
//     return;
//   }
//   console.log(docs)
//   // res.json(docs)
//   router.get('/', function (req, res, next) {
//     res.render('index', {
//       title: 'Express',
//       list: docs
//     });
//   });
// })


// router.get("/getuser", function (req, res) {
//   User.find({}, function (err, docs) {
//     if (err) {
//       console.log('err:', err);
//       res.json(docs)
//       return;
//     }
//     console.log(docs, 'index')
//     res.json(docs)
//     ejs.renderFile('./views/index.ejs', {
//       title: '123',
//       list: docs
//     }, (err, str) => {
//       if (err) {
//         console.log(err)
//         return
//       }
//       res.send(str)
//     })
//   })
// })

// router.get("/addUser", function (req, res) {
//   let data = {
//     name: req.query.myinput
//   }
//   console.log(data)
//   var addUser = new User(data)
//   addUser.save()
//   // res.send(JSON.stringify(data))
//   data.success = true
//   res.json(data)
// })

module.exports = router;