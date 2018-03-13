/*
* @Author: Administrator
* @Date:   2018-01-17 15:59:16
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-26 10:14:33
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

router.get('/tag', function (req, res, next) {
        col.find({}).toArray(function(err, items) {
         var tag=[];
        var arr=items.filter(item=>{

          if(tag.length==0){
            for(let i=0;i<item.tag.length;i++){
              tag.push({name:item.tag[i],count:1})
            }
          }else{
            for(let i=0;i<item.tag.length;i++){
            	var found=false;
              for(let j=0;j<tag.length;j++){
                if(item.tag[i] == tag[j].name){
                  tag[j].count++;
                  found=true;
                }
              }
            if(!found){
              tag.push({name:item.tag[i],count:1})
            }
            }
          return
          }
        })
          res.json(tag)
        })
});

});

export default router
