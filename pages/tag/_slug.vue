<template>
  <div class="pagetag">
    <myCategory v-if="categoryShow" :articles="article" :slug="name"></myCategory>
    <div class="article__aside">
      <mySearch></mySearch>
      <myHotnews></myHotnews>
      <myCalendar></myCalendar>
      <myTag></myTag>
    </div>
  </div>
</template>

<script>
import axios from '~/plugins/axios'

import myNav from '~/components/nav/nav.vue'
import {articlesAftersort,articlesofAll,loadmore} from '~/pages/api/article.js'
import myCategory from '~/components/category/category.vue'
import mySearch from '~/components/search/search.vue'
import myHotnews from '~/components/hotnews/hotnews.vue'
import myCalendar from '~/components/calendar/calendar.vue'
import myTag from '~/components/tag/tag.vue'

export default {
  data(){
    return{
      hotnews:[],
      articles:[],
      categoryShow:true,
      name:'tag'
    }
  },
   asyncData ({ params, error }) {
    let paramstag={slug:params.slug}
      return axios.post('/api/article/',paramstag)
        .then((res) => {
          return { article: res.data }
        })
        .catch((e) => {
          error({ statusCode: 404, message: 'User not found' })
        })
    },
  methods:{
    // getData(){
    //   // console.log("params:"+params.slug)
    //   articlesofAll().then(res=>{
    //       this.articles=res
    //     })
    // }
    
  },
  // asyncData ({ params, error }) {
  //     return axios.get('/api/article/' + params.id)
  //       .then((res) => {
  //         return { article: res.data }
  //       })
  //       .catch((e) => {
  //         error({ statusCode: 404, message: 'User not found' })
  //       })
  //   },
  head () {
    return {
      title: 'Users'
    }
  },
  components: {
    myCategory,
     mySearch,
    myHotnews,
    myCalendar,
    myTag
  }
}
</script>

<style scoped>
.title
{
  margin: 30px 0;
}
.users
{
  list-style: none;
  margin: 0;
  padding: 0;
}
.user
{
  margin: 10px 0;
}
.pagetag{
  margin: 0 auto;
  
}
.article{
  background-color: blue;
  width: 600px;
  height: 500px;
  position: absolute;
  left: 350px;
}
</style>
