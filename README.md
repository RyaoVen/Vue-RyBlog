

# RyBlog使用教程🚀
## 一、项目概述📋
RyBlog 是一个基于 Vue3 与 Java SpringBoot 构建的博客框架，配备完整的前后台系统，采用 MySQL 数据库存储博客数据，并引入 element-Plus 组件库提升前端交互体验🎉。目前项目仅完成前端部分开发，后续将逐步完善后端功能🔧。

## 二、环境准备🛠️
### （一）前端环境💻
1. **Node.js**：确保本地已安装 Node.js，建议使用 LTS 长期支持版本。可通过在命令行输入 `node -v` 检查安装版本，若未安装，请前往 [Node.js 官网](https://nodejs.org/) 下载对应系统的安装包进行安装📥。
2. **npm/yarn/pnpm**：Node.js 安装完成后，会自带 npm（Node Package Manager）。也可以选择安装 yarn 或 pnpm 作为包管理工具。
    - 安装 yarn：在命令行输入 `npm install -g yarn`。
    - 安装 pnpm：在命令行输入 `npm install -g pnpm`。

### （二）后端环境（暂未开放，后续补充⏳）
1. **Java JDK**：安装 Java 开发工具包，建议使用 JDK 11 及以上版本。可通过在命令行输入 `java -version` 检查安装情况，若未安装，前往 [Oracle 官网](https://www.oracle.com/java/technologies/downloads/) 或 [OpenJDK 官网](https://adoptium.net/) 下载安装📦。
2. **Maven**：用于项目构建和依赖管理。可通过在命令行输入 `mvn -v` 检查是否安装，若未安装，前往 [Maven 官网](https://maven.apache.org/download.cgi) 下载解压，并配置环境变量⚙️。
3. **MySQL**：安装 MySQL 数据库，建议使用 8.0 及以上版本。安装完成后，可通过 MySQL 客户端工具（如 Navicat、DBeaver 等）创建数据库及相关表结构（后续提供详细 SQL 脚本📄）。

## 三、项目获取🔍
打开命令行工具，进入你想要存放项目的目录，执行以下命令克隆项目：
```bash
git clone [项目仓库地址]
```
克隆完成后，进入项目的前端目录：
```bash
cd ryblog/front-end  # 假设前端代码在 front-end 目录下，具体路径根据实际项目结构调整
```

## 四、前端启动🔥
### （一）安装依赖📦
在前端项目目录下，根据你选择的包管理工具，执行相应命令安装项目依赖：
- 使用 npm：
```bash
npm install
```
- 使用 yarn：
```bash
yarn install
```
- 使用 pnpm：
```bash
pnpm install
```

### （二）启动项目🚀
依赖安装完成后，使用以下命令启动项目：
```bash
npm run dev  # npm 启动方式
# 或
yarn dev  # yarn 启动方式
# 或
pnpm dev  # pnpm 启动方式
```
启动成功后，在浏览器中访问 `http://localhost:5173`（默认端口为 5173，若端口被占用，vite 会自动提示可用端口🕵️），即可预览 RyBlog 前端页面👀。

## 五、后续计划📅
1. **后端开发**：逐步完善基于 SpringBoot 的后端系统，实现博客数据的增删改查、用户管理、权限控制等功能🔧。
2. **数据库对接**：完成后端与 MySQL 数据库的整合，提供完整的数据库初始化脚本和数据操作接口📄。
3. **前后端联调**：实现前后端数据交互，打通整个博客系统的业务流程🌐。
4. **功能扩展**：添加更多实用功能，如博客评论、点赞、分类标签管理等💡。

## 六、贡献指南（待完善⏳）
如果你对 RyBlog 项目感兴趣，欢迎参与开发和贡献👏。后续将提供详细的贡献指南，包括代码规范、开发流程、提交 PR 等内容📝。
