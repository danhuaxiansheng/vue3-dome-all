<template>
  <svg width="100" height="100">
    <rect x="10" y="10" width="80" height="80" />
  </svg>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<style lang="less" scoped></style>
