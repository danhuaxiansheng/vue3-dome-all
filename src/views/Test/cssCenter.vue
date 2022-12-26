<template>
  <div class="panle grid-panle">
    <div class="content">我是子元素</div>
  </div>
  <!-- <table class="panle grid-panle">
    <tr class="content">
      <td>内容</td>
    </tr>
  </table> -->
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped>
/**
* 垂直居中的方法
 */
.panle {
  height: 600px;
  width: 100%;
  background-color: aqua;

  .content {
    text-align: center;
    height: 300px;
    width: 200px;
    background-color: red;
  }
}
.position-panle {
  position: relative;
}
.position-content {
  position: relative;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: -100px;
  margin-top: -150px;
}

.flex-panle {
  display: flex;
  align-items: center;
  justify-content: center;
}

.grid-panle {
}
</style>
