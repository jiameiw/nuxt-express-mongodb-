<template>
	<div class="pagination">
		<div class="pagination__list">
			<a href="javascript:;">&lt</a>
			<a href="javascript:;" @click="changepage(page)" class="pagination__list__item" v-for="(page,index) in pagination">{{page}}</a>			
			<a href="">&gt</a>
		</div>
	</div>
</template>
<script type="text/javascript">
import {pagination} from '~/pages/api/article.js'

	export default{
		data(){
			return{
				pagination:[1,2,3,4,5,6,7],
				pagesize:5,
				page:1,//current
				totalpages:7
			}
		},
		created(){
			this.getData()
		},
		methods:{
			getData(){
				let params={page:1,pagesize:5}
				pagination(params).then(res=>{
					this.pagination=res
					console.log("res:")
					console.log(res)
				})
			},
			changepage(index){
				console.log(index)
				let params={page:index}
				pagination(params).then({
					
				})
			}
		}
	}
</script>
<style scoped>
	.pagination{
		width: 90%;
	    height: 30px;
	    margin: 10px auto;
	    clear: both;
	}
	.pagination__list{
		float: right;
	}
	.pagination__list a{
		float: left;
	    display: inline-block;
	    width: 30px;
	    height: 30px;
	    line-height: 30px;
	    text-align: center;
	    border:1px solid #aaa;
	    color: #555;
	    margin-right: -1px;
	}
	.pagination__list a:hover{
		background-color: #ddd;
	}
</style>