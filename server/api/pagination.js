/*
* @Author: Administrator
* @Date:   2018-01-29 08:55:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-29 09:27:04
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

router.post('/pagination', function (req, res, next) {
	var page=req.body.page
	var pagesize=req.body.pagesize
	var start=(page-1)*pagesize
	col.find({}).toArray(function(err, items) {
    	var count =items.length

	    col.find({}).skip(start).limit(pagesize).toArray(function(err, items) {
	    	let params={"items":items,"count":count}
	    	console.log(params)
	      res.json(params)
	    })
    })
});

});

export default router
