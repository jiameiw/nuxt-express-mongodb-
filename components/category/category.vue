<template>
	<div class="category">
		<div class="category__imagechange">
			<div v-swiper:mySwiper="swiperOption">
		    	<div class="swiper-wrapper">
		      		<div class="swiper-slide" v-for="(article,index) in articles.items" v-if="index<10">
		       			<img :src="article.img">
		      		</div>
    	</div>
    		<div class="swiper-pagination swiper-pagination-bullets"></div>
  			</div>
		</div>
		<ul>
			<li class="category__list" v-for="(article,index) in articles.items">
				<img :src="article.img?article.img:'./img/article_noimage.jpg'" class="category__list__img">
				<div class="category__list__content">
					<nuxt-link class="category__list__content--title" :to="'/article/'+article.id">{{ article.title }}</nuxt-link>
					<p>{{article.content}}</p>
					<div class="category__list__others">
						<span class="category__list__others--time">{{article.publishtime}}</span>
						<span class="category__list__others--watched">{{article.watched}}</span>
						<span class="category__list__others--comment">{{article.watched}}</span>
						<span class="category__list__others--like">{{article.like}}</span>
						<span class="category__list__others--think"><a href="">think</a></span>
					</div>
				</div>
			</li>
		</ul>
		<a href="javascript:;" class="category__loadmore" @click="loadmoreArticles()" v-if="!isBottom&&articles.count>10&&!istag">加载更多</a>
		<span href="javascript:;" class="category__loadmore" v-else>这是底线</span>
	</div>
</template>
<script type="text/javascript">
import {articlesofAll,loadmore,comment} from '~/pages/api/article.js'
	export default{
		props:["articles","slug"],
		data () {
      return {
      	page:1,
      	articles2:[],
      	isBottom:false,
      	istag:false,
      	pagecount:0,
        // banners: [ require('~/assets/img/article_1.jpg'), require('~/assets/img/article_2.jpg') ],
        swiperOption: {
        	autoplay: {
            delay: 3500,
            disableOnInteraction: false
          },
          pagination: {
            clickable: true,
            el: '.swiper-pagination'
          },
          setWrapperSize: true,
          autoHeight: true,
          mousewheel: true,
          observeParents: true,
          grabCursor: true,
          preloadImages: false,
          lazy: true
        }
      }
    },
    created(){
    	this.getData()
    },
    methods:{
    	getData(){
   //  		console.log("href")
			// console.log(location.pathname.indexOf('tag'))
			// if(location.pathname.indexOf("tag")==1){
			// 	istag=true
			// }
			if(this.slug!=undefined){
				console.log(this.slug)
				this.istag=true
			}
			// if(this.slug=="search"){

			// }
      		// this.articles2=this.articles.items
      		// this.pagecount=this.articles.count
    	},
    	loadmoreArticles(){
	    		this.page++
	    		let params={page:this.page}
	    		loadmore(params).then(res=>{
	      				this.articles.items.push(res[0])
		      			if(10*this.page>this.articles.count){
		      				this.isBottom=true;
	      			}
	      		})
    	}
    }
  }


</script>
<style scoped>
.category{
	/*background-color: blue;*/
	width: 600px;
	position: absolute;
	left: 350px;
	top:100px;
}
.category__imagechange{
	margin-bottom: 15px;
}
.swiper-slide{
	width: 100%;
	height: 200px;
	overflow: hidden;
}
.category__imagechange img{
	width: 100%;
	height: auto;

}
.category__list__img{
	width: 170px;
    height: 115px;
    float: left;
    border-radius: 5px;
    margin: 5px;
}
.category__list{
	background-color: white;
	height: 130px;
	margin-bottom: 15px;
}
.category__list:hover,.category__loadmore:hover{
	background-color: #ddd;
	transition: 0.3s;
}
.category__list__content{
	margin:10px 0 0 10px;
	float: left;
}
.category__list__content--title{
	font-weight: bold;
	color:#555;
	font-size:16px;
	max-width: 400px;
	white-space:nowrap;
	display: inline-block;
	transition: 0.5s;
}
.category__list__content--title:hover{
		transform: translate(7px,0);
		text-decoration:underline ;
	}
.category__list__content p{
	color: #666;
	width: 400px;
	height: 60px;
	font-size: 14px;
	margin-top: 10px;
	overflow: hidden;
    text-overflow: ellipsis;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
}
.category__list__others{
	font-size: 12px;
	color: #666;
	margin-top: 2px;
}
.category__list__others span{
	margin-right: 20px;
	padding-left: 20px;
	display: inline-block;
}
.category__list__others--time{
	background:url("img/time.png") no-repeat 2px 1px;
	background-size: 16%;
}
.category__list__others--watched{
	background:url("img/eye.png") no-repeat 0 -1px;
	background-size: 45%;
}
.category__list__others--comment{
	background:url("img/comment.png") no-repeat 0 1px;
	background-size: 40%;
}

.category__list__others--like{
	background:url("img/like.png") no-repeat 0 -1px;
	background-size: 60%;
}
.category__list__others--think{
	background:url("img/think.png") no-repeat 0 1px;
	background-size: 23%;
}
.category__loadmore{
	display: inline-block;
	width: 100%;
	height: 35px;
	background-color: white;
	margin-bottom: 15px;
	text-align: center;
	line-height: 35px;
	font-size: 14px;
	color:#555;
}
</style>