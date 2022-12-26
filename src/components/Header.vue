<template>
  <div class="head-panle">
    <!-- <div class="header-logo">
      <img class="logo" src="@/assets/header/logo.jpg" />
    </div> -->
    <Menu
      v-model:selectedKeys="current"
      @click="selectMenu"
      theme="light"
      mode="horizontal"
    >
      <MenuItem key="home"> 物料 </MenuItem>
      <!-- <SubMenu key="github">
        <template #title>
          <a
            href="https://github.com/danhuaxiansheng?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
          >
            项目
          </a>
        </template>
        <menu-item-group title="Item 1">
          <MenuItem key="setting:1">Option 1</MenuItem>
          <MenuItem key="setting:2">Option 2</MenuItem>
        </menu-item-group>
        <menu-item-group title="Item 2">
          <MenuItem key="setting:3">Option 3</MenuItem>
          <MenuItem key="setting:4">Option 4</MenuItem>
        </menu-item-group>
      </SubMenu> -->
      <MenuItem key="npm">
        <a
          href="https://www.npmjs.com/~danhuaxiansheng"
          target="_blank"
          rel="noopener noreferrer"
        >
          组件
        </a>
      </MenuItem>
      <MenuItem key="blog"> 文章 </MenuItem>
    </Menu>
    <div class="header-side">
      <!-- <Input
        class="head-search-btn"
        enter-button="Search"
        v-model:value.trim="keywords"
        @keyup.enter.stop="searchDetails(keywords)"
        :maxLength="200"
      >
        <template #suffix>
          <span class="header-btn-group" @click="searchDetails(keywords)">
            <search-outlined />
          </span>
        </template>
      </Input> -->
      <a
        href="https://github.com/danhuaxiansheng?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        title="查看github"
        class="flex-box"
      >
        <github-outlined
      /></a>
      <a
        title="联系QQ"
        @click.stop="copyText('646042371', 'QQ')"
        class="flex-box"
      >
        <qq-outlined
      /></a>
      <a
        title="联系邮箱"
        @click.stop="copyText('646042371@qq.com', '邮箱')"
        class="flex-box"
      >
        <MediumOutlined
      /></a>

      <a title="登录" class="flex-box">
        <router-link to="/login" class="user-avatar">
          <Avatar :size="20"
            ><template #icon><UserOutlined /></template> </Avatar
        ></router-link>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
/**
 * Vue基础功能块
 */
import { Options, Vue } from "vue-class-component";
import { useRouter } from "vue-router";

/**
 * 引入工具方法
 */
import { copyText } from "@/utils/clipboard";

/**
 * 引入图标
 */
import {
  SearchOutlined,
  GithubOutlined,
  QqOutlined,
  MediumOutlined,
  UserOutlined,
} from "@ant-design/icons-vue";

/**
 * 引入三方组件
 */
import {
  Input,
  Menu,
  MenuItem,
  MenuItemGroup,
  SubMenu,
  Avatar,
} from "ant-design-vue";
import { MenuInfo } from "ant-design-vue/lib/menu/src/interface";

@Options({
  components: {
    Input,
    Menu,
    SubMenu,
    MenuItem,
    MenuItemGroup,

    QqOutlined,
    SearchOutlined,
    GithubOutlined,
    MediumOutlined,
    Avatar,
    UserOutlined,
  },
})
export default class Layout extends Vue {
  public current: string[] = ["plug"];
  public keywords = "";
  public notRouter: string[] = ["npm"];
  router = useRouter();
  /**
   * 菜单切换
   */
  public selectMenu(menuItem: MenuInfo) {
    !this.notRouter.includes(menuItem.key as string) &&
      this.router.push("/" + menuItem.key);
  }
  /**
   * 点击复制操作
   */
  public clickCopy = copyText;
}
</script>

<style lang="less" scoped>
@text-color: #fff;
.head-panle {
  text-align: left;
  width: 1200px;
  height: 72px;
  margin: 0px auto;
  .header-logo {
    width: 160px;
    padding-left: 32px;
    float: left;
  }
  .logo {
    width: 91px;
    height: 37px;
  }
  :deep(.ant-menu) {
    float: left;
    border-bottom: none;
    background: none;
    color: @text-color;
    font-size: 16px;
    font-weight: bold;
    opacity: 0.95;
    line-height: 72px;
    .ant-menu-item {
      margin-top: 0;
      a::before {
        display: none;
      }
    }
    .ant-menu-title-content {
      color: @text-color;
    }
    .ant-menu-submenu::after,
    .ant-menu-item:after {
      display: none;
    }
    a:hover,
    a {
      color: @text-color;
    }
  }
  .header-side {
    // width: 280px;
    float: right;
    margin-right: 32px;
    display: flex;
    align-items: center;
    height: 100%;
    a {
      width: 36px;
      height: 36px;
      transition: color 0.5s;
      color: @text-color;
      padding: 0px 6px;
      :deep(.anticon) {
        font-size: 20px;
        cursor: pointer;
      }
    }

    .head-search-btn {
      background-color: transparent;
      border: 1px solid rgb(0 0 0 / 8%);
      margin-right: 15px;
      line-height: 14px;
      :deep(.ant-input) {
        background-color: transparent;
      }
    }

    .user-avatar {
      display: contents;
    }
    .ant-avatar {
      background: @text-color;
      .anticon {
        color: rgb(0 0 0 / 85%);
        font-size: 14px;
      }
    }
  }
}
</style>
