<template>
  <radio-group
    v-model:value="checkValue"
    class="header-check-group"
    @change="change"
  >
    <radio-button :value="-1">全部</radio-button>
    <radio-button v-for="item in data" :value="item.value" :key="item.value">{{
      item.title
    }}</radio-button>
  </radio-group>
</template>

<script lang="ts">
/**
 * Vue基础功能块
 */
import { Vue, Options, prop } from "vue-class-component";
import type { PropType } from "vue";
/**
 * 引入外部组件
 */
import { RadioButton, RadioChangeEvent, RadioGroup } from "ant-design-vue";

/**
 * 引入基础类型
 */
import { SelectModel } from "@/models/BaseModel";

// Define props in a class
class Props {
  data = prop({
    type: Array as PropType<SelectModel[]>,
    required: true,
  });
  modelValue = prop({
    type: Number,
    required: true,
  });
}

@Options({
  components: {
    RadioButton,
    RadioGroup,
  },
})
export default class Layout extends Vue.with(Props) {
  checkValue = this.modelValue;
  /**
   * 更改选中
   */
  change(changeValue: RadioChangeEvent) {
    this.$emit("update:modelValue", changeValue.target.value);
  }
}
</script>

<style lang="less" scoped>
.header-check-group {
  width: 100%;
  margin-bottom: 25px;
  label {
    border-radius: 15px;
    height: 28px;
    line-height: 25px;
    border-left-width: 1px;
    margin-bottom: 10px;
  }
  label::before {
    display: none;
  }
  label {
    margin-right: 10px;
  }
}
</style>
