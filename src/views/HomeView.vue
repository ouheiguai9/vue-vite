<template>
  <div class="page">
    <div class="btn-profile"><i class="icon-font">&#xe61e;</i></div>
    <div class="banner"></div>
    <div class="van-ellipsis news-box">服务动态<i class="icon-font">&#xe607;</i><span>189****3030</span>刚刚完成了一次电话咨询</div>
    <div class="card-box">
      <div class="title-box">
        <span class="txt">按分类去咨询</span>
      </div>
      <div class="grid-box">
        <div class="item-box">
          <i class="icon-font">&#xe605;</i>
          <div>婚姻财产</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe601;</i>
          <div>经济纠纷</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe60a;</i>
          <div>交通事故</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe620;</i>
          <div>房产土地</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe639;</i>
          <div>合同纠纷</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe811;</i>
          <div>劳动就业</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe694;</i>
          <div>刑事案件</div>
        </div>
        <div class="item-box">
          <i class="icon-font">&#xe610;</i>
          <div>其他咨询</div>
        </div>
      </div>
    </div>
    <div class="quality-box">
      <div class="item-box"><i class="icon-font">&#xe624;</i> 实名认证</div>
      <div class="item-box"><i class="icon-font">&#xeacc;</i> 真实律师</div>
      <div class="item-box"><i class="icon-font">&#xe608;</i> 执业职格</div>
      <div class="item-box"><i class="icon-font">&#xe629;</i> 平台担保</div>
    </div>
    <div class="card-box">
      <div class="title-box">
        <span class="txt">用户评价</span>
        <span class="btn">更多&nbsp; ></span>
      </div>
      <div class="tag-box">
        <van-badge :content="443" max="999" color="#1A6AFDBB">
          <van-tag type="warning">服务态度好</van-tag>
        </van-badge>
        <van-badge :content="523" max="999" color="#1A6AFDBB">
          <van-tag type="warning">律师非常专业</van-tag>
        </van-badge>
        <van-badge :content="346" max="999" color="#1A6AFDBB">
          <van-tag type="warning">分析问题透彻</van-tag>
        </van-badge>
      </div>
      <div class="comment-list">
        <div class="comment-card" v-for="item in list" :key="item">
          <div class="comment-card-row">
            <div><i class="icon-font">&#xe61e;</i>用户189****3030评价</div>
            <div>服务律师：张律师</div>
          </div>
          <div class="van-multi-ellipsis--l2 desc-row">{{ desc }}</div>
          <div class="comment-card-row">
            <van-rate v-model="rateValue" :size="16" color="#ffd21e" readonly allow-half />
            <div style="text-align: right">2022-10-11 13:14</div>
          </div>
        </div>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import AppFooter from 'components/AppFooter.vue'
const list = ['a', 'b', 'c']
const rateValue = ref(4.3)
const desc = ref('这是一段最多显示一行的文字，多余的内容会被省略这是一段最多显示一行的文字，多余的内容会被省略')
</script>

<style lang="scss" scoped>
$gold: #b0aa3c;
$padding-lr: 17px;

.btn-profile {
  position: fixed;
  right: $padding-lr;
  top: 50vh;
  width: 48px;
  height: 48px;
  text-align: center;
  background-color: $gold;
  border-radius: 50%;
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 50%);
  cursor: pointer;
  z-index: 99;

  .icon-font {
    display: block;
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
  }

  .icon-font::after {
    display: block;
    content: '我的';
    font-size: 12px;
  }
}

.banner {
  width: 375px;
  height: 316px;
  background: url('assets/banner.png') no-repeat;
  background-size: cover;
}

.news-box {
  height: 33px;
  padding: 0 $padding-lr;
  font-size: 12px;
  line-height: 30px;
  border-bottom: 3px solid #e0e0e0;

  span,
  i {
    margin: 0 6px;
  }

  i {
    color: #b0b0b0;
  }
}

.quality-box {
  display: flex;
  height: 48px;
  padding: 0 $padding-lr;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: $gold;
  background-color: #f2f2f2;

  .icon-font {
    margin-right: 5px;
    font-size: 16px;
    font-weight: bold;
    vertical-align: bottom;
  }
}

.comment-list {
  .comment-card {
    margin-top: 12px;
    font-size: 12px;
    line-height: 24px;
    padding-bottom: 5px;
    border-bottom: 1px solid #ccc;
  }

  .desc-row {
    line-height: 1.3;
    margin: 5px 0 3px;
  }

  .comment-card-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999;

    .icon-font {
      margin-right: 8px;
      font-size: 20px;
      vertical-align: bottom;
      color: $gold;
    }
  }
}

.card-box {
  width: 375px;
  padding: $padding-lr;

  .title-box {
    display: flex;
    padding-bottom: $padding-lr;
    justify-content: space-between;
    align-items: center;

    .txt {
      font-weight: 700;
    }

    .txt::before {
      display: inline-block;
      content: '';
      width: 5px;
      height: 15px;
      margin-right: 8px;
      vertical-align: text-bottom;
      background-color: var(--main-color);
    }

    .btn {
      font-size: 12px;
      color: #999;
    }
  }

  .grid-box {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: -18px;

    .item-box {
      width: 70px;
      margin-bottom: 18px;
      text-align: center;
      color: #666;
      font-size: 13px;
      cursor: pointer;

      .icon-font {
        font-size: 28px;
        color: var(--main-color);
      }

      div {
        margin-top: 8px;
        color: #1f1f1f;
      }
    }
  }
}

.tag-box {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .van-tag {
    font-size: 12px;
    padding: 5px 10px;
    border-radius: 8px;
  }
}
</style>
