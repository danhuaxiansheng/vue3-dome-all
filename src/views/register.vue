<template>
  <div class="login-container">
    <div class="form-panle">
      <Form
        :model="formState"
        :wrapper-col="{ span: 24 }"
        name="basic"
        autocomplete="off"
        class="login-form"
        @finish="onFinish"
      >
        <FormItem
          name="account"
          :labelCol="{ span: 24 }"
          :rules="[{ required: true, message: '请输入您的账户！' }]"
        >
          <Input
            placeholder="账户名称"
            v-model:value.trim="formState.account"
          />
        </FormItem>
        <FormItem
          name="password"
          :rules="[{ required: true, message: '请输入您的密码！' }]"
        >
          <InputPassword
            placeholder="登录密码"
            v-model:value.trim="formState.password"
          />
        </FormItem>
        <FormItem
          name="password"
          :rules="[{ required: true, message: '请确认密码！' }]"
        >
          <InputPassword
            placeholder="确认密码"
            v-model:value.trim="formState.password"
          />
        </FormItem>
        <FormItem class="login-btn">
          <Button type="primary" html-type="submit">注册</Button>
        </FormItem>
        <FormItem class="register-btn">
          返回
          <a>
            <router-link to="/login">登录</router-link>
          </a>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import type { Rule } from "ant-design-vue/es/form";
/**
 * 引入三方组件
 */
import {
  Form,
  FormItem,
  Input,
  Button,
  Col,
  Row,
  InputPassword,
} from "ant-design-vue";

import { isPassword } from "@/utils/validate";
@Options({
  components: {
    Input,
    Col,
    Row,
    Form,
    Button,
    FormItem,
    InputPassword,
  },
})
export default class HomeView extends Vue {
  formState = {
    account: "",
    password: "",
  };
  onFinish = (values: object) => {
    console.log("Success:", values);
  };

  /**
   * 验证用户名
   */
  validateusername = async (_rule: Rule, value: string) => {
    if ("" == value) {
      return Promise.reject("用户名不能为空!");
    } else {
      return Promise.resolve();
    }
  };
  /**
   * 验证用户密码
   */
  validatePassword = async (_rule: Rule, value: string) => {
    if (!isPassword(value)) {
      return Promise.reject("密码不能少于6位!");
    } else {
      return Promise.resolve();
    }
  };

  // 登录成功后系统名提示
  sysTitle = "系统";

  rules = {
    account: [
      {
        required: true,
        trigger: "blur",
        validator: this.validateusername,
      },
    ],
    password: [
      {
        required: true,
        trigger: "blur",
        validator: this.validatePassword,
      },
    ],
  };
  loading = false;
  passwordType = "password";

  handlePassword() {
    this.passwordType === "password"
      ? (this.passwordType = "")
      : (this.passwordType = "password");
    // this.$nextTick(() => {
    //   this.$refs.password.focus();
    // });
  }
  handleLogin() {
    this.$refs;
    // .formRef.validate((valid) => {
    //   if (valid) {
    //     this.loading = true;
    //     this.$store
    //       .dispatch("user/login", {
    //         account: this.form.account,
    //         password: this.form.password, // md5(this.form.password),
    //       })
    //       .then(() => {
    //         this.$router.push("/");
    //         this.loading = false;
    //       })
    //       .catch(() => {
    //         this.loading = false;
    //       });
    //   } else {
    //     return false;
    //   }
    // });
  }
}
</script>

<style lang="less" scoped>
.login-container {
  height: 100vh;
  background: url("~@/assets/backgroud/backgroud.jpg") center center fixed
    no-repeat;
  background-size: cover;
  .form-panle {
    overflow: hidden;
    position: absolute;
    bottom: 20vh;
    right: 16vh;
    width: 310px;
    padding: 16px;
    .login-btn {
      &:hover {
        opacity: 0.9;
      }
      :deep(.ant-btn) {
        width: 100%;
        height: 40px;
      }
    }
    .register-btn {
      text-align: end;
      a {
        color: #1890ff;
      }
    }

    .ant-form-item :deep(.ant-input) {
      line-height: 32px;
      font-size: 14px;
    }
  }
}
</style>
