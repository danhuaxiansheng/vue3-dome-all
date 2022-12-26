/**
 * 引入三方组件
 */
import { message } from "ant-design-vue";

/**
 * 点击复制操作
 */
export function copyText(text: string, type: string) {
  // 创建输入框元素
  const oInput = document.createElement("input");
  // 将想要复制的值
  oInput.value = text;
  // 页面底部追加输入框
  document.body.appendChild(oInput);
  // 选中输入框
  oInput.select();
  // 执行浏览器复制命令
  document.execCommand("Copy");
  // 弹出复制成功信息
  message.success(type + "已复制");
  // 复制后移除输入框
  oInput.remove();
}
