/*
* @Author: Administrator
* @Date:   2018-01-16 16:21:09
* @Last Modified by:   Administrator
* @Last Modified time: 2018-01-29 08:53:31
*/
import axios from '~/plugins/axios'
export const articlesofAll=()=>{
	return axios.post('/api/article')
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}


//获取某一篇文章
export const article=(params)=>{
	return axios.post('/api/article',params)
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}

export const articlesAftersort=()=>{
	return axios.get('/api/sort')
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}
export const tag=()=>{
	return axios.get('/api/tag')
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}
export const articleAdd=(params)=>{
	return axios.post('/api/add',params)
	// .then((res) => {
	//     return res.data
	//   })
	//   .catch((e) => {
	//     error({ statusCode: 404, message: 'User not found' })
	//   })
    // return { data }
}
export const loadmore=(params)=>{
	return axios.post('/api/loadmore',params)
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}
export const comment=(params)=>{
	return axios.post('/api/comment',params)
	.then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
    // return { data }
}
export const commentInsert=(params)=>{
	return axios.post('/api/commentInsert',params)
}
export const pagination=(params)=>{
	return axios.post('/api/pagination',params)
    .then((res) => {
	    return res.data
	  })
	  .catch((e) => {
	    error({ statusCode: 404, message: 'User not found' })
	  })
}