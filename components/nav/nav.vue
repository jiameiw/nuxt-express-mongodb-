<template>
	<div class="nav">
		<div class="nav__list clr">
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon1"></i>
				<span>HOME</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon2"></i>
				<span>CODE</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon3"></i>
				<span>PROJECT</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon4"></i>
				<span>THINK</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon5"></i>
				<span>MUSIC</span>
			</nuxt-link>
			<nuxt-link to="/about" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon6"></i>
				<span>ABOUT</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon7"></i>
				<span>SERVICE</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon8"></i>
				<span>GUESTBOOK</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon9"></i>
				<span>TAOBAO</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon10"></i>
				<span>ALIYUN</span>
			</nuxt-link>
			<nuxt-link to="/" class="nav__list__item">
				<i class="nav__list__item--icon nav__list__item--icon11"></i>
				<span>ERREND.IO</span>
			</nuxt-link>
		</div>
	</div>
</template>
<script type="text/javascript">

</script>
<style scoped>
	.nav{
		position: fixed;
		/*width: 160px;*/
		left:160px;
		top:100px;
	}
	.nav__list__item{
		display: block;
		width: 150px;
		height: 40px;
		background: rgba(255,255,255,0.6);
		font-size: 14px;
		padding: 0 10px 0 10px;
		margin-bottom: 10px;
		border-radius: 5px;
	}
	.nav__list__item span{
		display: inline-block;
		vertical-align: middle;
		height: 40px;
		line-height: 40px;
		/*padding-left: 40px;*/
	}
	.nav__list__item--icon{
		display: inline-block;
		height: 40px;
		width: 40px;
		background: no-repeat 7px 11px;
		background-size: 40%;
		vertical-align: middle;
	}
	.nav__list__item:hover{
		color: #0088F5;
	}
	.nav__list__item--icon1{
		background-image: url("./img/nav_home.png");
	}
	.nav__list__item:hover .nav__list__item--icon1{
		background-image: url("./img/nav_home1.png");
	}
	.nav__list__item--icon2{
		background-image: url("./img/nav_code.png");
	}
	.nav__list__item:hover .nav__list__item--icon2{
		background-image: url("./img/nav_code1.png");
	}
	.nav__list__item--icon3{
		background-image: url("./img/nav_project.png");
	}
	.nav__list__item:hover .nav__list__item--icon3{
		background-image: url("./img/nav_project1.png");
	}
	.nav__list__item--icon4{
		background-image: url("./img/nav_think.png");
	}
	.nav__list__item:hover .nav__list__item--icon4{
		background-image: url("./img/nav_think1.png");
	}
	.nav__list__item--icon5{
		background-image: url("./img/nav_music.png");
	}
	.nav__list__item:hover .nav__list__item--icon5{
		background-image: url("./img/nav_music1.png");
	}
	.nav__list__item--icon6{
		background-image: url("./img/nav_about.png");
	}
	.nav__list__item:hover .nav__list__item--icon6{
		background-image: url("./img/nav_about1.png");
	}
	.nav__list__item--icon7{
		background-image: url("./img/nav_service.png");
	}
	.nav__list__item:hover .nav__list__item--icon7{
		background-image: url("./img/nav_service1.png");
	}
	.nav__list__item--icon8{
		background-image: url("./img/nav_guestbook.png");
	}
	.nav__list__item:hover .nav__list__item--icon8{
		background-image: url("./img/nav_guestbook1.png");
	}
	.nav__list__item--icon9{
		background-image: url("./img/nav_taobao.png");
	}
	.nav__list__item:hover .nav__list__item--icon9{
		background-image: url("./img/nav_taobao1.png");
	}
	.nav__list__item--icon10{
		background-image: url("./img/nav_aliyun.png");
	}
	.nav__list__item:hover .nav__list__item--icon10{
		background-image: url("./img/nav_aliyun1.png");
	}
	.nav__list__item--icon11{
		background-image: url("./img/nav_errend.png");
	}
	.nav__list__item:hover .nav__list__item--icon11{
		background-image: url("./img/nav_errend1.png");
	}
</style>