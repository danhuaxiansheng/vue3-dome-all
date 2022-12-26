<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {
    // Layout,
    // Footer,
    // Content,
    // Header,
  },
})
export default class HomeView extends Vue {}
</script>
