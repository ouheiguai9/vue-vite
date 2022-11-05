<template>
  <div class="page">
    <div class="banner"></div>
    <div class="top">
      <div class="call-box">
        <div class="icon-box icon-font">&#xe94f;</div>
        <div class="txt-box">
          <div><span>立即问律师</span>8元/分钟</div>
          <div>24小时专业一对一律师服务</div>
        </div>
        <div class="btn-box">去咨询 ></div>
      </div>
      <div class="white-bg">
        <div class="news-box">服务动态<i class="icon-font">&#xe607;</i><span>189****3030</span>刚刚完成了一次电话咨询</div>
      </div>
    </div>
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
          <i class="icon-font">&#xe621;</i>
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
      <div class="item-box"><i class="icon-font">&#xe65c;</i> 实名认证</div>
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
            <div>服务态度: {{ rateValue }}</div>
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

.banner {
  width: 375px;
  height: 169px;
  background: url('assets/banner.jpg') no-repeat;
  background-size: cover;
}

.top {
  position: relative;
  width: 375px;
  height: 130px;
  padding-top: 40px;
  background-color: var(--main-color);

  .call-box {
    display: flex;
    position: absolute;
    left: $padding-lr;
    top: 0;
    width: 341px;
    height: 80px;
    align-items: center;
    justify-content: space-between;
    padding: 16px;
    border-radius: 16px;
    background-color: #fff;
    box-shadow: 0 5px 20px 3px rgb(0 0 0 / 30%);
    cursor: pointer;

    .icon-box {
      width: 48px;
      height: 48px;
      line-height: 48px;
      text-align: center;
      color: #fff;
      font-size: 24px;
      border-radius: 50%;
      background-color: var(--main-color);
    }

    .txt-box {
      font-weight: 700;
      line-height: 24px;

      span {
        margin-right: 8px;
        font-size: 16px;
      }
    }

    .btn-box {
      width: 80px;
      height: 24px;
      line-height: 24px;
      font-size: 12px;
      text-align: center;
      color: #fff;
      border-radius: 12px;
      background-color: var(--main-color);
    }
  }

  .white-bg {
    width: 375px;
    height: 90px;
    padding: 0 5px;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #fff;

    .news-box {
      height: 90px;
      padding: 57px 12px 0;
      font-size: 13px;
      line-height: 30px;
      border-bottom: 3px solid #e0e0e0;

      span,
      i {
        margin: 0 12px;
      }

      i {
        color: #b0b0b0;
      }
    }
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
    height: 32px;
    justify-content: space-between;
    align-items: center;
    line-height: 32px;

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
        font-size: 45px;
        color: var(--main-color);
      }

      div {
        margin-top: 8px;
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
