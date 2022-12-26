import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
/**
 * 三方组件样式
 */
import "ant-design-vue/dist/antd.css";

/**
 * 界面自定义样式
 */
import "@/assets/css/base.less";

createApp(App).use(store).use(router).mount("#app");
