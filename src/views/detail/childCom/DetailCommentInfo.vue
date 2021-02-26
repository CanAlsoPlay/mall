<template>
  <div v-if="commentInfo.list !== undefined && commentInfo.list !== null
    && Object.keys(commentInfo.list).length !== 0" class="comment-info">
    <div class="info-header">
      <div class="header-title">用户评价</div>
      <div class="header-more">更多
        <i class="arrow-right"></i>
      </div>
    </div>

    <div class="info-user">
      <img :src="commentInfo.list[0].user.avatar" alt="">
      <span>{{commentInfo.list[0].user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.list[0].content}}</p>
      <div class="info-other">
        <span>{{commentInfo.list[0].created | showDate}}</span>
        <span>{{commentInfo.list[0].style}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { formateDate } from '@/common/utils'
export default {
  name: 'DetailCommentInfo',
  props: {
    commentInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    showDate (value) {
      // 1.将时间戳转成date对象
      const date = new Date(value * 1000)
      return formateDate(date, 'yyyy-MM-dd hh:mm')
    }
  }
}
</script>

<style scoped>
.comment-info {
  padding: 5px 15px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.info-header {
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.header-title {
  float: left;
  font-size: 15px;
}
.header-more {
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.info-user {
  padding: 10px 5px ;
}
.info-user img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.info-user span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.info-detail {
  padding: 5px;
}
.info-detail p {
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
</style>
