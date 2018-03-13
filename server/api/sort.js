/*
* @Author: Administrator
* @Date:   2018-01-17 15:13:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-03-03 09:18:32
*/
import { Router } from 'express'
const router = Router()

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
  // Show that duplicate records got dropped
  // 

router.get('/sort', function (req, res, next) {
        col.find({}).sort({"watched":-1}).limit(10).toArray(function(err, items) {
          // console.log("items:"+items)
          res.json(items)
        })
});

});

export default router
