import { request } from "./request";

export function getMusiclist() {
  return request({
    url:'/comment/music?id=186016&limit=1',
    method:'get'
  })
}



