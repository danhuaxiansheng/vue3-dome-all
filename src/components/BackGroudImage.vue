<template>
  <div class="header-backgroud-panle">
    <!-- 头部图片 -->
    <div class="header-backgroud margin-center">
      <div class="header-backgroud-img">
        <img class="margin-center" src="@/assets/backgroud/backgroud.jpg" />
      </div>
      <div class="left-mask mask-img"></div>
      <div class="right-mask mask-img"></div>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * Vue基础功能块
 */
import { Vue } from "vue-class-component";
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
@backgroud-color: #171717;

.header-backgroud-panle {
  background-color: @backgroud-color;
  .header-backgroud {
    width: @content-width;
    position: relative;
    height: 675px;
    .header-backgroud-img {
      position: relative;
      img {
        height: 100%;
        position: relative;
        width: 100%;
        overflow: hidden;
      }
    }
    .mask-img {
      background-image: linear-gradient(
        270deg,
        @backgroud-color 0%,
        transparent
      );
      width: 473px;
      pointer-events: none;
      position: absolute;
      top: 0;
      height: 100%;
    }
    .left-mask {
      left: -1px;
      transform: rotate(-180deg);
    }
    .right-mask {
      right: -1px;
    }
  }
}
</style>
