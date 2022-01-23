import axios from 'axios'

import config from "./request"

const  http=axios.create(config)
http.interceptors.request.use((request)=>{
  return request
},(error)=>{
  return Promise.reject(error)
})
http.interceptors.response.use((response)=>{
  return response
},(error)=>{
  return Promise.reject(error)
})
/**
 * home 轮播图
 */
export const gethomepagebanner=()=>{
  return http.get
  ('/homepage/block/page')
}

/**
 * 获取华语歌单
 */
export const getrecommendresource=()=>{
  return http.get('/related/playlist?id=5001')
}

/**
 * 最新专辑
 */
export const getalbumnewest=()=>{
  return http.get('/album/newest')
}


      /**
 * 获取音乐 url
 */
       export const getsongurl=(params)=>{
        return http.get('/song/url',{params})
 }
