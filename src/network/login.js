import axios from 'axios'

import config from "./request"

const  http=axios.create(config)
/**
 * 检测手机号码是否注册
 */
export const getcellphone=(params)=>{
  return http.get
  ('/cellphone/existence/check',{params})
}

