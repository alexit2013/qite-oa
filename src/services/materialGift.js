import { request, config } from '../utils'
const { api } = config
const { materialGift} = api

export async function query (params) {
  return request({
    url: materialGift.query,
    method: 'get',
    data: params,
  })
}

export async function queryById (params) {
  return request({
    url: materialGift.queryById,
    method: 'get',
    data: params,
  })
}
export async function save (params) {
  return request({
    url: materialGift.save,
    method: 'post',
    data: params,
  })
}
export async function deleteById (params) {
  return request({
    url: materialGift.deleteById,
    method: 'post',
    data: params,
  })
}



