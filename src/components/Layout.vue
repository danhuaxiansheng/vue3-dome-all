<template>
  <layout>
    <layout-header class="layout-head">
      <Header />
    </layout-header>
    <layout-content> <router-view /></layout-content>
    <layout-footer>
      <Footer />
    </layout-footer>
  </layout>
</template>

<script lang="ts">
import Header from "./Header.vue";
import Footer from "./Footer.vue";

import { Options, Vue } from "vue-class-component";
import {
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFooter,
} from "ant-design-vue";
@Options({
  components: {
    Header,
    Footer,
    Layout,
    LayoutFooter,
    LayoutContent,
    LayoutHeader,
  },
})
export default class PageLayout extends Vue {}
</script>

<style lang="less" scoped>
.layout-head {
  padding: 0px;
  z-index: 1;
  height: auto;
  width: 100%;
  transform: translateZ(10px);
  transition: all 0.5s;
  background-color: transparent;
}
</style>
