import Mock from 'mockjs'
import { pop1 } from './pop/pop1'
import { pop2 } from './pop/pop2'
import { pop3 } from './pop/pop3'
import { sell1 } from './sell/sell1'
import { new1 } from './new/new1'
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
export default Mock.mock(/\/home\/data/, 'get', (options) => {
  // console.log(options)
  // 获取传递的参数pageIndex pageSize
  const page = parseInt(getQuery(options.url, 'page'))
  const type = getQuery(options.url, 'type')
  // console.log(page, type)
  // console.log(pop3, pop2)
  const list = []
  switch (type) {
    case 'pop':
      // console.log(type, typeof page)
      switch (page) {
        case 1:
          list.push(pop1)
          break
        case 2:
          list.push(pop2)
          break
        case 3:
          list.push(pop3)
          break
        default:
          break
      }
      break
    case 'sell':
      list.push(sell1)
      // console.log(list)
      break
    case 'new':
      list.push(new1)
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
