/*
* @Author: Administrator
* @Date:   2018-01-18 14:11:20
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-25 16:41:33
*/
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
  // Show that duplicate records got dropped
  // 

router.post('/loadmore', function (req, res, next) {
	let page=req.body.page
	let pagesize=10
	let start=(page-1)*pagesize
    col.find({}).skip(start).limit(pagesize).toArray(function(err, items) {
      res.json(items)
    })
});

});

export default router
