/*
* @Author: Administrator
* @Date:   2018-01-24 11:24:42
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-26 14:32:50
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
  const col = client.db(dbName).collection('comment');
  // Show that duplicate records got dropped
  // 

router.post('/comment', function (req, res, next) {
	if(req.body.type==0){
		const id = parseInt(req.body.id)
	    col.find({"aid":id}).toArray(function(err, items) {
	      res.json(items)
	    })
	}else{
		//把字符串id转成数据库里的存的objectid类型
		var mongoose = require('mongoose');
		var cid = mongoose.Types.ObjectId(req.body.id);
		col.update({"_id":cid},{"$inc":{"support":1}})
	}
});

});

export default router
