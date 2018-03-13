<template>
	<div class="tag">
	<a :href="'/tag/'+item.name" class="tag__item" v-for="(item,index) in tag">
		<span>{{item.name}}</span>
		<span>({{item.count}})</span>
	</a>
		<!-- <a class="tag__item" :href="'/tag/'+item.name" v-for="(item,index) in tag">
			<span>{{item.name}}</span>
			<span>({{item.count}})</span>
		</a> -->
	</div>
</template>
<script type="text/javascript">
import {tag} from '~/pages/api/article.js'

	export default{
		data(){
			return{
				tag:[]
			}
		},
		created(){
			this.getData()
			// console.log("ddddd"+this.tag)
		},
		// watch:{
		// 	articles:()=>{
		// 		console.log("sdgfsd"+this.articles)
		// 		// this.getData()
		// 	}
		// },
		methods:{
			getData(){
				tag().then(res=>{
	  			this.tag=res
	  		})
				}
			}
		}
</script>
<style scoped>
	.tag{
		width: 235px;
	    height: 400px;
	    background-color: white;
	    position: relative;
	    left: 970px;
	    margin-bottom: 20px;
	    overflow: auto;
	}
	.tag__item{
		display: inline-block;
	    height: 25px;
	    line-height: 25px;
	    background-color: #E4E4E4;
	    padding: 0 10px;
	    margin: 10px;
	    color: #555;
	    font-size: 14px;
	}
</style>