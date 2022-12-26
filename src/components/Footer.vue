<template>
  <div class="footer-panle">
    <img src="@/assets/img/footer/icon-police.png" />
    网站备案号
    <a href="https://beian.miit.gov.cn/" target="_blank">
      （蜀ICP备2022009654号-1）</a
    >
  </div>
</template>

<script lang="ts">
/**
 * Vue基础功能块
 */
import { Options, Vue } from "vue-class-component";
@Options({})
export default class Layout extends Vue {}
</script>

<style lang="less" scoped>
@text-color: #fff;
.footer-panle {
  text-align: center;
  width: 1200px;
  margin: 0px auto;
}
</style>
