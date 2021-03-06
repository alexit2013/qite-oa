import { request, config } from '../utils'
const { api } = config
const { useCar,employee,dictionary } = api

export async function query (params) {
  return request({
    url: useCar.query,
    method: 'get',
    data: params,
  })
}

export async function queryById (params) {
  return request({
    url: useCar.queryById,
    method: 'get',
    data: params,
  })
}
export async function getDic (params) {
  return request({
    url: dictionary.getList,
    method: 'get',
    data: params,
  })
}
export async function save (params) {
  return request({
    url: useCar.save,
    method: 'post',
    data: params,
  })
}
export async function deleteById (params) {
  return request({
    url: useCar.deleteById,
    method: 'post',
    data: params,
  })
}
export async function submit (params) {
  return request({
    url: useCar.submit,
    method: 'post',
    data: params,
  })
}
export async function queryEmployee (params) {
  return request({
    url: employee.query,
    method: 'get',
    data: params,
  })
}


