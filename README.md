# AI旅行规划师

基于OpenAI API的智能旅行规划助手，可根据目的地自动生成行程计划。

## 项目结构

```
.
├── frontend/             # React前端
│   ├── src/              # 源代码
│   │   ├── App.jsx       # 主组件
│   │   ├── App.css       # 样式
│   │   ├── main.jsx      # 入口文件
│   │   └── index.css     # 全局样式
│   ├── index.html        # HTML模板
│   ├── vite.config.js    # Vite配置
│   └── package.json      # 依赖配置
│
├── backend/              # FastAPI后端
│   ├── app.py            # API服务
│   ├── requirements.txt  # 依赖列表
│   └── .env              # 环境变量(需自行配置)
│
└── .github/workflows/    # GitHub Actions配置
    └── deploy.yml        # 自动部署到Cloudflare Pages
```

## 本地开发

### 前端

```bash
cd frontend
npm install
npm run dev
```

### 后端

```bash
cd backend
pip install -r requirements.txt
python app.py
```

## 部署

前端将自动部署到Cloudflare Pages。需要在GitHub仓库中设置以下Secrets:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

后端需要单独部署到支持Python的服务器，并配置环境变量`OPENAI_API_KEY`。
