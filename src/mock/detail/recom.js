import Mock from 'mockjs'
import { recommend1 } from './recommend1'

export default Mock.mock(/\/recommend/, 'get', () => {
  const list = []
  list.push(recommend1)
  return {
    status: 200,
    message: '获取成功',
    list: list
  }
})
