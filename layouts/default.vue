<template>
  <div>
   <div class="background"></div> 
    <my-header/>
    <my-nav/>
    <transition name="content">
    <nuxt/>
    </transition>
    <!-- <div class="article__aside">
      <mySearch></mySearch>
      <myHotnews></myHotnews>
      <myCalendar></myCalendar>
      <myTag></myTag>
    </div> -->
  </div>
</template>

<script>
import myHeader from '~/components/header.vue'
import myNav from '~/components/nav/nav.vue'
import mySearch from '~/components/search/search.vue'
import myHotnews from '~/components/hotnews/hotnews.vue'
import myCalendar from '~/components/calendar/calendar.vue'
import myTag from '~/components/tag/tag.vue'

export default {
  head () {
    return {
      title: 'Users'
    }
  },
  data(){
    return{
      showaside:true
    }
  },
  created(){
    // this.getData()
  },
  methods:{

  },
  components: {
    myNav,
    myHeader,
    mySearch,
    myHotnews,
    myCalendar,
    myTag
  }
}
</script>

<style>
.container
{
  margin: 0;
  width: 100%;
  padding: 100px 0;
}

.button, .button:visited
{
  display: inline-block;
  color: black;
  letter-spacing: 1px;
  background-color: #fff;
  border: 2px solid #000;
  text-decoration: none;
  text-transform: uppercase;
  padding: 15px 45px;
}

.button:hover, .button:focus
{
  color: #fff;
  background-color: #000;
}

.title
{
  color: #000;
  font-weight: 300;
  font-size: 2.5em;
  margin: 0;
}
.background{
  background:url("~/static/background.png");
  width: 100%;
  height: 100%;
  position: fixed;
}
.article__aside{
  top: 100px;
  position: absolute;
  width: 0;
}
</style>
