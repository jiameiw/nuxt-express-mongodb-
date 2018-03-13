/*
* @Author: Administrator
* @Date:   2018-01-24 11:24:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-26 11:09:29
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
  const col = client.db(dbName).collection('comment');
  // Show that duplicate records got dropped
  // 

router.post('/commentInsert', function (req, res, next) {
	console.log(req.body)
	let params={
	    "name" : req.body.name,
	    "email" : req.body.email,
	    "content" : req.body.content,
	    "support" : 0,
	    "publishtime" : req.body.publishtime,
	    "aid" : parseInt(req.body.aid),
	    "isreply":req.body.isreply,
	    "replyname":req.body.replyname
	}
    col.insert(params)
});

});

export default router
