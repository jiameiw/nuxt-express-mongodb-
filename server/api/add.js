/*
* @Author: Administrator
* @Date:   2018-01-17 16:55:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-25 16:41:33
*/
/*
* @Author: Administrator
* @Date:   2018-01-17 15:13:51
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-17 15:14:27
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
// Connection urlhttps://www.baidu.com/link?url=kbR-Le1LCBidcSh_uEaYfGev42FG5aYxwQTmzPvW1Iti11Fz31Qm7b-zzm34VP-yp5t3ubL78bJ4nNOefIMsJq&wd=&eqid=cd6a10670003be35000000025a61408b
const url = 'mongodb://localhost:27017';
// Database Name
const dbName = 'surmon';
// Connect using MongoClient
MongoClient.connect(url, function(err, client) {
  // Create a collection we want to drop later
  const col = client.db(dbName).collection('article');
  // Show that duplicate records got dropped
  // 

router.post('/add', function (req, res, next) {
        var id = parseInt(req.body.id)
        if(req.body.change=="watched")
          col.update({id:id},{$inc:{watched:1}})
        // .toArray(function(err, items) {
        //   console.log(items)
        //   res.json(items)
        // })
        if(req.body.change=="like")
          col.update({id:id},{$inc:{like:1}})
});
});

export default router
