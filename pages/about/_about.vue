<template>
	<div class="about clr">
		<ul class="about__info--left fl">
			<li class="about__info--left__list about__info--left__list1">
				I'm Surmon, a (95+) (小) Javascript (鲜) stack (肉) developer.
			</li>
			<li class="about__info--left__list about__info--left__list2">
				Taolu committee: 288325802.
			</li>
			<li class="about__info--left__list about__info--left__list3">
				Jazz-HipHop, Electronic, Disco, Rock, Punk.
			</li>
			<li class="about__info--left__list about__info--left__list4">
				code. beauty. life.
			</li>
			<li class="about__info--left__list about__info--left__list5">
				<a href="javascript:;" class="about__info--left__list--link1"></a>
				<a href="javascript:;" class="about__info--left__list--link2"></a>
				<a href="javascript:;" class="about__info--left__list--link3"></a>
				<a href="javascript:;" class="about__info--left__list--link4"></a>
			</li>
			<li class="about__info--left__list about__info--left__list6">
				Talk is cheap. 
			</li>
		</ul>
		<div class="about__info--right fr">
			<!-- <img src="./img/about_personbg.jpg" class="about__info--right--bg"> -->
			<img src="./img/about_person.jpg" class="about__info--right--img">
			<div class="about__info--right--name">Surmon
			<p>Developer</p>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
	}
</script>
<style scoped>
	.article__aside{
		display: none;
	}
	.about{
		  /*background-color: blue;*/
		  width: 855px;
		  /*height: 500px;*/
		  position: absolute;
		  left: 350px;
		  top: 100px;
	}
	.about__info--left{
		background-color: white;
		width: 560px;
		font-size: 14px;
		padding:50px 0 0 50px;
		color: #5F5F5F;
		height: 490px;
	}
	.about__info--right{
		background-color: white;
		width: 220px;
		height: 540px;
	}
	.about__info--left__list{
		padding-left: 50px;
		margin-bottom: 20px;
		height: 37px;
		line-height: 37px;
		background: no-repeat 7px 10px;
		background-size: 2.8%;
	}
	.about__info--left__list1{
		background-image: url("img/about_name.png");
	}
	.about__info--left__list2{
		background-image: url("img/about_contact.png");
	}
	.about__info--left__list3{
		background-image: url("img/about_music.png");
		background-position: 4px 10px;
	}
	.about__info--left__list4{
		background-image: url("img/about_heart.png");
		background-position: 3px 10px;
    	background-size: 3.5%;
	}
	.about__info--left__list5{
		background-image: url("img/about_link.png");
		background-size: 3.5%;
		background-position: 2px 12px;
	}
	.about__info--left__list5 a{
		display: inline-block;
		float: left;
		margin-right: 20px;
		height: 37px;
		width: 22px;
		background-size: 100%;
	}
	.about__info--left__list5 a:hover{
		opacity: 0.7;
	}
	.about__info--left__list6{
		background-image: url("img/about_code.png");
		background-position: 4px 12px;
	}
	.about__info--left__list--link1{
		background: url("img/about_message.png") no-repeat 0 10px;
	}
	.about__info--left__list--link2{
		background: url("img/about_git.png") no-repeat 0 10px;
	}
	.about__info--left__list--link3{
		background: url("img/about_zhihu.png") no-repeat 0 10px;
	}
	.about__info--left__list--link4{
		background: url("img/about_weibo.png") no-repeat 0 10px;
	}
	.about__info--left__list--link5{
		background: url("img/about_twitter.png") no-repeat 0 10px;
	}
	.about__info--left__list--link6{
		background: url("img/about_facebook.png") no-repeat 0 10px;
	}
	.about__info--right{
		background: url(/_nuxt/img/about_personbg.d3e410f.jpg) no-repeat white;
    	background-size: 100% 19%;
		
	}
	.about__info--right--img{
		width: 120px;
		height: auto;
		margin: 67px 50px 35px 50px;
		border-radius: 5px;

	}
	.about__info--right--name{
		font-weight: bold;
		font-size: 18px;
		text-align: center;
		color: #777;
	}
	.about__info--right--name p{
		margin-top: 20px;
		font-weight: normal;
		font-size: 14px;
		color:#5F5F5F;
	}
</style>