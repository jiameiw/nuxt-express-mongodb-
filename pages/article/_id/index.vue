<template>
	<div class="article">
		<div class="article__box">
			<div class="article__box__wrap">
				<h1 class="article__box__title">{{article[0].title}}</h1>
				<div class="article__box__content">{{article[0].content}}</div>
			</div>
			<dl class="article__box__desc">
				<dd>本文于{{article[0].publishtime}}发布，当前已被围观{{article[0].watched}}次</dd>
				<dd>相关标签：<span v-for="(item,index) in article[0].tag" class="article__box__desc--tag">{{item}}</span></dd>
				<dd class="article__box__desc--others"><span >{{comlength}}条评论</span><span @click="like()" :class="islike?'article__box__desc--like1':'article__box__desc--like2'" :disabled="islike">{{article[0].like}}人喜欢</span></dd>
			</dl>
			<myComment @commentlength="clength"></myComment>
		</div>
		<!-- <myCategory :articles="articles"></myCategory> -->
		<div class="article__aside">
			<mySearch></mySearch>
		    <myHotnews></myHotnews>
		    <myCalendar></myCalendar>
		    <myTag></myTag>
		</div>
	</div>
</template>
<script type="text/javascript">
import axios from '~/plugins/axios'
import {articleAdd,article} from '~/pages/api/article.js'
import mySearch from '~/components/search/search.vue'
import myHotnews from '~/components/hotnews/hotnews.vue'
import myCalendar from '~/components/calendar/calendar.vue'
import myTag from '~/components/tag/tag.vue'
import myCategory from '~/components/category/category.vue'
import myComment from '~/components/comment/comment.vue'

	export default{
		  data(){
		  	return{
		  		islike:false,
		  		id:'',
		  		article:{},
		  		comlength:0
		  	}
		  },
	  async asyncData ({ params, error }) {
	  	// let param={id:params.id}
	    let {data}=await axios.get('/api/article/'+params.id)
	    return { article: data }
	      // .then((res) => {
	      //   return { article: res.data }
	      // })
	      // .catch((e) => {
	      //   error({ statusCode: 404, message: 'User not found' })
	      // })
	  },
	  mounted(){
		this.getData()
	  },
	  updated(){
	  	console.log("id"+this.id)
	  	this.id=location.pathname.split("/").pop();
	  	if(window.localStorage['like']&&window.localStorage['like'].includes(this.id.toString())){
	  			this.islike=true
	  		}
	  },
	  components: {
	    mySearch,
	    myHotnews,
	    myCalendar,
	    myTag,
	    myCategory,
	    myComment
	  },
	  methods:{
	  	getData(){
	  		 this.id=location.pathname.split("/").pop();
	  		//  let par={id:this.id}
	  		//  article(par).then(res=>{
	  		//  	console.log(res)
	  		// 	this.article=res
	  		// })
	  		let param={id:this.id,change:"watched"}
	  		articleAdd(param)
	  		// if(window.localStorage['like'].includes(this.id.toString())){
	  		// 	this.islike=true
	  		// 	console.log(this.islike)
	  		// }
	  	},
	  	like(){
	  		if(!this.islike){
		  		this.islike=true
		  		let params={id:this.id,change:"like"}
		  		articleAdd(params)
		  		this.article[0].like++;
		  		var storage=window.localStorage
		  		if(storage['like']==undefined){
		  			storage['like']=''
		  		}
			  		var likeOfAll=storage['like'].split(",")
			  		this.id=location.pathname.split("/").pop();
			  		likeOfAll.push(this.id)
			  		storage['like']=likeOfAll.toString()
				    console.log(storage['like'])
			}
	  	},
	  	clength(data){
	  		this.comlength=data
	  	}
	  }
	
	}
</script>
<style scoped>
.article__box{
	width: 600px;
	position: absolute;
	left: 350px;
	top: 100px;
	color: #555;
}
.article__box__wrap{
	background-color: white;
}
.article__box__title{
	font-size: 20px;
	width: 100%;
	text-align: center;
	padding-top: 50px;
}
.article__box__content{
	font-size: 16px;
	padding: 40px 0 30px 30px;
}
.article__aside{
	top: 100px;
	position: relative;
	width: 0;
}
.article__box__desc{
	margin-top: 15px;
	padding-top: 10px;
	background-color: white;
	font-size: 14px;
}
.article__box__desc dd{
	padding: 0 0 10px 20px;
}
.article__box__desc--tag{
	margin-right: 10px;
}
.article__box__desc--others span{
	display: inline-block;
    background-color: #ddd;
    width: 69px;
    height: 20px;
    line-height: 20px;
    margin-right:10px;
    text-align: center;
    transition:0.2s;
}
.article__box__desc--others .article__box__desc--like1{
	background-color: #F44336;
}
.article__box__desc--others .article__box__desc--like2{
	cursor: pointer;
}
.article__box__desc--others .article__box__desc--like2:hover{
	background-color: #ccc;
}
</style>
