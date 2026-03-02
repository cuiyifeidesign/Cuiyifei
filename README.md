```markdown
# 项目名称

项目简短描述，说明这个项目是做什么的。

## 环境要求

- Node.js 16+
- pnpm 8+

## 安装依赖

```bash
pnpm install
```

## 本地开发

启动开发服务器（支持热更新）：

```bash
pnpm run dev
```

## 构建生产版本

```bash
pnpm run build
```

构建后的文件默认输出在 `dist` 目录（根据项目配置可能不同）。

## 预览生产构建

本地预览构建后的结果：

```bash
pnpm run preview
```

## 部署 / 发布

### 部署到托管平台（如 Vercel、Netlify）
通常平台会自动识别构建命令，或手动配置构建命令为 `pnpm run build`，输出目录为 `dist`。

### 发布 npm 包（如果项目是 npm 包）
```bash
pnpm publish
```

## 其他常用命令

- 添加依赖：`pnpm add <package>`
- 添加开发依赖：`pnpm add -D <package>`
- 移除依赖：`pnpm remove <package>`
- 更新依赖：`pnpm update`
- 检查过时依赖：`pnpm outdated`

## 许可证

[MIT](LICENSE) (或你使用的其他许可证)
```

复制以上内容到你的 `README.md` 文件中，替换 `项目名称` 和 `项目简短描述` 为实际信息即可。

#### 2️⃣ 提交并推送到 GitHub
```bash
git add README.md
git commit -m "添加 README 介绍文件"
git push