<template>
  <div class="homeIndex-panle">
    <!-- 头部图片 -->
    <BackGroudImage />
    <back-top>
      <div class="ant-back-top-inner">回到顶部</div>
    </back-top>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { BackTop } from "ant-design-vue";

// 引入界面组件
import BackGroudImage from "@/components/BackGroudImage.vue";

@Options({
  components: {
    BackTop,
    BackGroudImage,
  },
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped>
.homeIndex-panle {
  margin-top: -@header-height;
}
</style>
