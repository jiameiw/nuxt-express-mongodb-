<template>
	<div class="hotnews">
		<div class="hotnews__title">热门文章</div>
		<ul>
			<li v-for="(article, index) in hotnews" :key="index" class="hotnews__list">
				<span class="hotnews__list--index">{{index+1}}</span>
				<nuxt-link class="hotnews__list--title" :to="'/article/'+article.id">{{ article.title }}</nuxt-link>
      		</li>
		</ul>
	</div>
</template>
<script>
import {articlesAftersort} from '~/pages/api/article.js'
export default {
  data(){
  	return{
  		hotnews:[]
  		// aftersortArticle:[]
  	}
  },
  created(){
  	this.getData();
  },
  methods:{
  	getData(){
	  		articlesAftersort().then(res=>{
	  			this.hotnews=res
	  		})
    }
  }

}
</script>
<style scoped>
	.hotnews{
		width: 235px;
	    height: 400px;
	    position: relative;
	    left: 970px;
	    margin-bottom: 20px;
	    font-size: 14px;
	    background-color: white;
	}
	.hotnews__title{
		height: 40px;
		line-height: 40px;
		padding-left: 36px;
	    background: url("img/hotnews.png") no-repeat 13px 13px white;
	    background-size: 6%;
	    border-bottom:1px #ddd solid;
	}
	.hotnews__list{
		/*margin-top: 2px;*/
		padding: 15px 0 0 10px;
		background-color: white;
		color: #555;

	}
	.hotnews__list--index{
		background-color: #ddd;
		width: 20px;
		height: 20px;
		display: inline-block;
		text-align: center;
		line-height: 20px;
		margin-right: 4px;
		vertical-align: middle;
	}
	.hotnews__list--title{
		max-width: 180px;
		overflow: hidden;
		text-overflow:ellipsis;
		white-space:nowrap;
		display: inline-block;
		vertical-align: middle;
		transition: 0.5s;
	}
	.hotnews__list--title:hover{
		transform: translate(7px,0);
		text-decoration:underline ;
	}
</style>