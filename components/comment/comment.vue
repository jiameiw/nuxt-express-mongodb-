<template>
	<div class="comment">
		<div class="comment__sort">
			<a href="javascript:;" >最新</a>
			<a href="javascript:;">最热</a>
		</div>
		<dl class="comment__list" v-for="(comment,index) in comments">
			<img src="" class="comment__list__img">
			<dt>
				{{comment.name}}
				<span v-if="comment.isreply==1">回复@{{comment.replyname}}:</span>
			</dt>
			<dd>{{comment.content}}</dd>
			<dd class="comment__list__others"><span>{{comment.publishtime}}</span><a href="javascript:;" @click="replycomment(comment.name,comment.email)">回复</a><a href="javascript:;" @click="ding(comment._id,index)">顶({{comment.support}})</a></dd>
		</dl>
		<!-- <myPagination></myPagination> -->
		<div class="comment__insert">
			<div class="comment__insert__personinfo">	
				<transition name="fade">
					<div class="comment__insert__personinfo--zhshwrap" v-show="showzhsh">
						<span>{{name}}</span>
						<a href="javascript:;">账户设置</a>
						<ul class="comment__insert__zhsz">
							<li @click="bjxx()">编辑信息</li>
							<li @click="qkxx()">清空信息</li>
						</ul>
					</div>
				</transition>
				<transition name="fade">
					<div class="comment__insert__personinfo--bjxx" v-show="showbjxx">
						<input type="text" name="" placeholder="name" v-model="name">
						<input type="text" name="" placeholder="email" v-model="email">
						<input type="submit" name="" value="" class="comment__insert__personinfo--bjxx--submit" @click="submit()">
					</div>
				</transition>
			</div>
			<div class="comment__insert__content">
				<p v-if="replyname!=''">回复@{{replyname}}:</p>
				<textarea placeholder="show me the code" v-model="commentcontent"></textarea>
				<a @click="submitComment()" href="">发布</a>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
import {comment,commentInsert,pagination} from '~/pages/api/article.js'

import myPagination from '~/components/pagination.vue'

	export default{
		data(){
		    return{
		    	id:'',
		    	showzhsh:false,
		    	showbjxx:true,
		    	name:'',
		    	email:'',
		    	commentcontent:'',
		    	comments:[],
		    	replyname:'',
		        standardemail: /\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/,
		    }
		},
		mounted(){
			this.getData()
		},
		updated(){
			this.$emit("commentlength",this.comments.length)
		},
		components:{
			myPagination
		},
		methods:{
			getData(){
				if(window.localStorage['name']!=undefined){
					this.name=window.localStorage['name'];
					this.email=window.localStorage['email'];
					this.showzhsh=true;
					this.showbjxx=false;
				}
				// console.log("articleid:"+this.articleid)
				this.id=location.pathname.split("/").pop();
				let params={id:this.id,type:0}
				comment(params).then(res=>{
					this.comments=res
				})
				// console.log(this.comments)
				// this.$emit("commentlength",this.comments.length)
			},	
			bjxx(){
				this.showzhsh=false;
				this.showbjxx=true;
			},
			qkxx(){
				var storage=window.localStorage
		           storage['name']=''
		           storage['email']=''
		           this.name=''
		           this.email=''
		           this.showzhsh=false;
					this.showbjxx=true;
			},
			ding(data,index){
				let params={id:data,type:1}
				comment(params)
				this.comments[index].support++
			},
			submit(){
				if (!this.standardemail.test(this.email)) return alert('邮箱不合法')
				this.showzhsh=true;
				this.showbjxx=false;
				var storage=window.localStorage
		           storage['name']=this.name
		           storage['email']=this.email
			},
			submitComment(){
				if(this.name==''||this.email==''){
					alert('请先编辑个人信息！')
					return
				}
					let date=new Date()
					let time=date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()
					// let formData=new FormData();
					// formData.append("name",this.name)
					// formData.append('email',this.email)
					// formData.append('content',this.content)
					// formData.append('publishtime',time)
					// console.log(formData.name)
					let params={name:this.name,email:this.email,content:this.commentcontent,publishtime:time,aid:this.id,isreply:this.isreply?1:0,replyname:this.replyname}
					commentInsert(params)
					this.isreply=false
			},
			replycomment(name,email){
				this.replyname=name
				this.isreply=true
			}
		}
	}
</script>
<style scoped>
	.comment__insert__content p{
		margin-left: 90px;
	    padding-left: 5px;
	    background-color: #ddd;
	    text-align: left;
	    height: 30px;
	    line-height: 30px;
	    margin-top: 15px;
	}
	.comment__insert__content a{
		width: 100px;
    	height: 30px;
    	display: block;
    	float: right;
    	text-align: center;
    	line-height: 30px;
    	background-color: #aaa;
    	border-radius: 2px;
	}
	.fade-enter-active, .fade-leave-active {
	 transition: opacity .4s
	}
	.fade-enter, .fade-leave-to{
	 opacity: 0;
	}
	.comment__insert__personinfo--zhshwrap{
		display: inline-block;
	}
	.comment__insert__personinfo--zhshwrap:hover .comment__insert__zhsz{
		display: block;
	}
	.comment{
		margin-top: 15px;
		background-color: white;
		padding-bottom: 30px;
	}
	.comment__sort{
		height: 90%;
		margin: 0 3%;
		padding: 10px;
		text-align:right;
		font-weight:bold;
		font-size: 14px;
		border-bottom:1px #ddd solid;
	}
	.comment__sort a{
		display: inline-block;
		margin-left: 10px;
		color: #555;
	}
	.comment__list{
    	margin: 15px 3% 0 7%;
		background-color: #D9D9D9;
		padding-left: 45px;
		position: relative;
	}
	.comment__list__img{
		position: absolute;
	    top: 30px;
	    left: -29px;
	    width: 60px;
	    height: 60px;
	    background-color: blue;
	}
	.comment__list dt{
		font-size: 14px;
		font-weight: bold;
		padding:15px 0 17px 0;
	}
	.comment__list dd{
		padding: 0 10px 12px 0;
	}
	.comment__list__others{
		font-size: 12px;
	}
	.comment__list__others span,.comment__list__others a{
		margin-right: 20px;
		transition: 0.2s;
	}
	.comment__list__others a:hover{
		font-weight: bold;
	}
	.comment__insert{
		border-top: 1px #ddd dashed;
	    margin: 30px 3% 0 3%;
	    padding: 15px 0;
	    font-size: 14px;
	}
	.comment__insert__personinfo{
		text-align: right;
		position: relative;
		height: 20px;
    	padding-bottom: 5px;

	}
	.comment__insert__personinfo a{
		padding-left: 15px;
	}
	.comment__insert__zhsz{
		/*display: none;*/
		padding-top: 10px;
		position: absolute;
		right: 0px;
		display: none;
	}
	.comment__insert__zhsz li{
		padding-bottom: 5px;
		cursor: pointer;
	}
	.comment__insert__content{
		text-align: right;

	}
	.comment__insert__content textarea{
		width: 80%;
	    height: 130px;
	    margin-top: 15px;
	    outline: none;
	    background-color: #ddd;
	    transition: 0.2s;
	    font-size: 14px;
	    padding: 10px;
	}
	.comment__insert__content textarea:hover{
		background-color: #ccc
	}
	.comment__insert__personinfo--bjxx{
		position: absolute;
	    top: 0px;
	    right: 0px;
	}
	.comment__insert__personinfo--bjxx input{
		background-color: #ddd;
		width: 200px;
		height: 30px;
		outline: none;
		border:2px;
		margin-left:11px;
		text-indent:5px;
	}
	.comment__insert__personinfo--bjxx .comment__insert__personinfo--bjxx--submit{
		width: 50px;
		vertical-align: middle;
		cursor:pointer;
		background:url('img/submit.png') no-repeat 16px 8px #ddd;
		background-size:40%; 
	}
</style>