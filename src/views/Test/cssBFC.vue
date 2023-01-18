<template>
  <!-- 根元素 -->
  <!-- <html>
    <head>
      <style>
        /* 根元素产生BFC */
        html {
          overflow: hidden;
        }
      </style>
    </head>
    <body>
      <div>Hello World!</div>
    </body>
  </html> -->
  <!-- 浮动元素 -->
  <!-- <div>
  <div style="float: left; width: 50%; height: 100px; background-color: blue;">box1</div>
  <div style="clear: both; height: 50px; background-color: yellow;">box2</div>
</div> -->
  <!-- 绝对定位元素 -->
  <div>
    <div
      style="
        position: absolute;
        width: 50%;
        height: 100px;
        background-color: blue;
      "
    >
      box1
    </div>
    <div style="height: 50px; background-color: yellow">box2</div>
  </div>

  <!-- display 为 inline-block、table-cell、table-caption、flex、grid 的元素 -->
  <!-- <div style="display: flex;">
  <div style="width: 50%; height: 100px; background-color: blue;">box1</div>
  <div style="height: 50px; background-color: yellow;">box2</div>
</div> -->
  <!-- overflow 不为 visible 的元素 -->
  <!-- <div style="overflow: hidden;">
  <div style="width: 50%; height: 100px; background-color: blue;">box1</div>
  <div style="height: 50px; background-color: yellow;">box2</div>
</div> -->
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped></style>
