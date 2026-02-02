# skills-copilot-codespaces-vscode
My clone repository

## 个人网页 (Personal Website)

这是一个使用HTML、CSS和JavaScript创建的个人网页。

### 功能特点

- 📱 响应式设计，适配各种设备
- 🎨 现代化的渐变色设计
- ✨ 平滑滚动和动画效果
- 📝 包含关于、技能、项目和联系部分

### 如何查看

1. **本地查看**：
   - 直接在浏览器中打开 `index.html` 文件
   - 或使用本地服务器（推荐）

2. **使用 VS Code Live Server**：
   - 安装 Live Server 扩展
   - 右键点击 `index.html`，选择 "Open with Live Server"

3. **使用 Python 简单服务器**：
   ```bash
   python -m http.server 8000
   ```
   然后在浏览器中访问 `http://localhost:8000`

4. **使用 Node.js http-server**：
   ```bash
   npx http-server
   ```

### 文件结构

```
.
├── index.html    # 主HTML文件
├── style.css     # 样式表
├── script.js     # JavaScript交互脚本
└── README.md     # 项目说明
```

### 技术栈

- HTML5
- CSS3 (Flexbox, Grid, Gradients, Animations)
- JavaScript (ES6+)

### 自定义

您可以轻松自定义网站内容：

1. **编辑个人信息**：修改 `index.html` 中的文本内容
2. **更改颜色主题**：修改 `style.css` 中的渐变色值
3. **添加更多功能**：在 `script.js` 中添加新的交互功能
