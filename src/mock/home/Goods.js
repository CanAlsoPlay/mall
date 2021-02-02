import Mock from 'mockjs'
import { pop1 } from './pop/pop1'
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
  const page = getQuery(options.url, 'page')
  console.log(page)
  const list = []
  list.push(pop1)
  console.log(list)
  return {
    status: 200,
    message: '获取成功',
    list: list
  }
})
