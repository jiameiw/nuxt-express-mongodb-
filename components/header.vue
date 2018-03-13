<template>
	<header class="header clr">
		<div class="header__wrap">
			<img src="~/static/logo.png">
			<h1 class="fl">SURMON</h1>
			<span class="header__wrap--desc">Talk is cheap.Show me the code</span>
		</div>
	</header>
</template>
<script type="text/javascript">
	
</script>
<style scoped>
.header{
	width: 100%;
	height: 65px;
	color: #0088F5;
	position: fixed;
	background-color: rgba(255,255,255,0.6);
	z-index: 888;
}
.header__wrap{
	padding:10px 0 0 165px;
}
.header img{
	width: 60px;
	height: 39px;
	float: left;
}

.header h1{
	font-size: 20px;
	font-weight: normal;
	padding: 9px;
}
.header__wrap--desc{
	padding: 10px 0 0 57px;
    display: inline-block;
    font-size: 15px;
}
</style>