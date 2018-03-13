<template>
	<div class="search">
		<input type="" name="" class="search__input" placeholder="search..." v-model="keywords" @keyup.enter="toSearch">
		<a class="search__btn" :href="'/search/'+keywords"></a>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				keywords:''
			}
		},
		methods:{
			toSearch(){
				if(event.keyCode == 13){
					console.log(this.keywords)
                    window.open("/search/"+this.keywords,"_self")
                }
			}
		}

	}
</script>
<style scoped>
	.search{
		width: 235px;
	    height: 40px;
	    background-color: white;
	    position: relative;
	    left: 970px;
	    margin-bottom: 20px;
	}
	.search__input{
		height: 27px;
		/*line-height: 100px;*/
		background-color: #ddd;
		border:1px;
		width: 80%;
		text-indent:7px;
		margin: 7px 0 7px 10px;
		transition: 0.2s;
		outline: none;
	}
	.search__input:hover{
		background-color: #ccc;
	}
	.search__btn{
		display: inline-block;
	    width: 27px;
	    height: 27px;
	    /* margin: 7px 10px; */
	    background: url("img/search.png") no-repeat 7px 6px #aaa;
	    background-size:55%; 
	    vertical-align: middle;
	}
</style>