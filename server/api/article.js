import { Router } from 'express'
const router = Router()

// Mock article
// const article = [
//   { name: 'Alexandre' },
//   { name: 'Pooya' },
//   { name: 'Sébastien' },
// ]

//连接数据库
const MongoClient = require('mongodb').MongoClient;
// const test = require('assert');
// Connection url
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'surmon';
// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  // Create a collection we want to drop later
  const col = client.db(dbName).collection('article');
  var count;
  // Show that duplicate records got dropped
  // 
 router.get('/article/:id', function (req, res, next) {
        const id = parseInt(req.params.id)
        col.find({"id":id}).toArray(function(err, items) {
          // console.log(items)
          res.json(items)
        })
});

router.post('/article', function (req, res, next) {
      let param=req.body
      if(param.slug){
         col.find({"tag":param.slug}).toArray(function(err, items) {
          var params={"items":items,"count":items.length};
          res.json(params)
        })
        }else if(param.keywords){
          // {$or[{title.tolowerCase():{$regex:param.keywords}},{content:{$regex:param.keywords}}]}
          col.find({$or:[{title:{$regex:param.keywords,$options:'i'}},{content:{$regex:param.keywords,$options:'i'}}]}).toArray(function(err, items) {
          var params={"items":items,"count":items.length};
          res.json(params)
        })
        // }else if(param.id){
        //   const id = parseInt(param.id)
        //   col.find({"id":id}).toArray(function(err, items) {
        //     res.json(items)
        // })
        }else{
          col.find({}).limit(10).toArray(function(err, items) {
          col.find({}).toArray(function(err, items) {
          count=items.length;
        })
          var params={"items":items,"count":count};
          res.json(params)
        }) 
        }

      
});
});
/* GET user by ID. */
// router.get('/article/:id', function (req, res, next) {
//   const id = parseInt(req.params.id)
//   if (id >= 0 && id < article.length) {
//     res.json(article[id])
//   } else {
//     res.sendStatus(404)
//   }
// })

export default router
