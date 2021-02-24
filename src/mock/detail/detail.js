import Mock from 'mockjs'
import { d1 } from './d1'
import { d2 } from './d2'

// 根据url获取query参数
function getQuery (url, name) {
  // console.log(url, name)
  const index = url.indexOf('?')
  if (index !== -1) {
    const queryStrArr = url.substring(index + 1).split('&')
    for (let i = 0; i < queryStrArr.length; i++) {
      const itemArr = queryStrArr[i].split('=')
      // console.log("itemArr:", itemArr)
      if (itemArr[0] === name) {
        return itemArr[1]
      }
    }
  }
  return null
}
export default Mock.mock(/\/detail/, 'get', (options) => {
  // console.log(options)
  // 获取传递的参数pageIndex pageSize
  const id = getQuery(options.url, 'iid')
  // console.log('id', id)
  const list = []
  switch (id) {
    case '1mu76te':
      list.push(d1)
      // console.log(list)
      break
    case '1mfwbl6':
      list.push(d2)
      // console.log(list)
      break
    default:
      break
  }
  return {
    status: 200,
    message: '获取成功',
    list: list
  }
})
