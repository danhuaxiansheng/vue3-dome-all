/*
 * @Description:
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export enum ProjectType {
  // 前端基础
  Html,
  Css,
  JavaScript,

  // 前端框架
  Vue2,
  Vue3,
  React,

  // CSS框架
  Sass,
  Less,

  // 代码打包工具
  WebPack,

  // 类型检查 架构
  TypeScript,

  // 后端服务器框架
  NodeJS,
  ASP_NetCore,

  // 数据库
  Redis,
  MySql,

  //  其他工具
  Express,
}

/*
 * @Description:基础下拉类型
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export interface SelectModel {
  // 名称
  title?: string;
  // 值
  value?: string | number;
}

/*
 * @Description:项目类型列表
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export const ProjectTypeList: Array<SelectModel> = [
  { title: "NodeJS", value: ProjectType.NodeJS },
  { title: "WebPack", value: ProjectType.WebPack },
  { title: "Express", value: ProjectType.Express },
  { title: "Redis", value: ProjectType.Redis },
  { title: "MySql", value: ProjectType.MySql },
  { title: "ASP_NetCore", value: ProjectType.ASP_NetCore },
  { title: "Vue3", value: ProjectType.Vue3 },
  { title: "Vue2", value: ProjectType.Vue2 },
  { title: "React", value: ProjectType.React },
  { title: "JavaScript", value: ProjectType.JavaScript },
  { title: "TypeScript", value: ProjectType.TypeScript },
  { title: "Sass", value: ProjectType.Sass },
  { title: "Less", value: ProjectType.Less },
];

/*
 * @Description:技术框架类型
 * @Autor: zhp
 * @Date: 2022年7月13日10点26分
 * @LastEditTime: 2022年7月13日10点26分
 */
export const FrameTypeList: Array<SelectModel> = [
  { title: "Html", value: ProjectType.Html },
  { title: "Css", value: ProjectType.Css },
  { title: "JavaScript", value: ProjectType.JavaScript },
  { title: "Vue3", value: ProjectType.Vue3 },
  { title: "Vue2", value: ProjectType.Vue2 },
  { title: "WebPack", value: ProjectType.WebPack },
  { title: "TypeScript", value: ProjectType.TypeScript },
  { title: "Sass", value: ProjectType.Sass },
  { title: "Less", value: ProjectType.Less },
];
