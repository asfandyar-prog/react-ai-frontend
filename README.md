<div align="center">

<!-- Animated Header SVG -->
<svg width="800" height="200" viewBox="0 0 800 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#3b82f6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0.2" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0.2" />
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
    <style>
      .title { font-family: 'Courier New', monospace; font-weight: 900; }
      .sub { font-family: 'Courier New', monospace; font-weight: 400; }
      .pulse { animation: pulse 2s infinite; }
      .float { animation: float 3s ease-in-out infinite; }
      @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
      @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
    </style>
  </defs>

  <!-- Background -->
  <rect width="800" height="200" rx="16" fill="#0f172a"/>
  <rect width="800" height="200" rx="16" fill="url(#grad2)"/>

  <!-- Grid lines -->
  <line x1="0" y1="40" x2="800" y2="40" stroke="#1e293b" stroke-width="1"/>
  <line x1="0" y1="80" x2="800" y2="80" stroke="#1e293b" stroke-width="1"/>
  <line x1="0" y1="120" x2="800" y2="120" stroke="#1e293b" stroke-width="1"/>
  <line x1="0" y1="160" x2="800" y2="160" stroke="#1e293b" stroke-width="1"/>
  <line x1="160" y1="0" x2="160" y2="200" stroke="#1e293b" stroke-width="1"/>
  <line x1="320" y1="0" x2="320" y2="200" stroke="#1e293b" stroke-width="1"/>
  <line x1="480" y1="0" x2="480" y2="200" stroke="#1e293b" stroke-width="1"/>
  <line x1="640" y1="0" x2="640" y2="200" stroke="#1e293b" stroke-width="1"/>

  <!-- Decorative circles -->
  <circle cx="720" cy="40" r="60" fill="none" stroke="url(#grad1)" stroke-width="0.5" opacity="0.4"/>
  <circle cx="720" cy="40" r="40" fill="none" stroke="url(#grad1)" stroke-width="0.5" opacity="0.3"/>
  <circle cx="80" cy="160" r="50" fill="none" stroke="url(#grad1)" stroke-width="0.5" opacity="0.3"/>

  <!-- Floating dots -->
  <circle class="pulse" cx="40" cy="40" r="3" fill="#06b6d4"/>
  <circle class="pulse" cx="760" cy="160" r="3" fill="#8b5cf6" style="animation-delay:0.5s"/>
  <circle class="pulse" cx="400" cy="20" r="2" fill="#3b82f6" style="animation-delay:1s"/>

  <!-- Main Title -->
  <text x="400" y="90" text-anchor="middle" class="title" font-size="42" fill="url(#grad1)" filter="url(#glow)">⚛ REACT AI FRONTEND</text>

  <!-- Subtitle -->
  <text x="400" y="125" text-anchor="middle" class="sub" font-size="14" fill="#94a3b8">Modern React + Tailwind CSS — AI Agent Chat Interface</text>

  <!-- Bottom bar -->
  <rect x="150" y="150" width="500" height="2" rx="1" fill="url(#grad1)" opacity="0.6"/>

  <!-- Tags -->
  <rect x="230" y="162" width="80" height="20" rx="10" fill="#06b6d420"/>
  <text x="270" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#06b6d4">React 19</text>

  <rect x="320" y="162" width="80" height="20" rx="10" fill="#3b82f620"/>
  <text x="360" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#3b82f6">Tailwind v4</text>

  <rect x="410" y="162" width="80" height="20" rx="10" fill="#8b5cf620"/>
  <text x="450" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#8b5cf6">Vite 8.0</text>

  <rect x="500" y="162" width="80" height="20" rx="10" fill="#f59e0b20"/>
  <text x="540" y="176" text-anchor="middle" font-family="monospace" font-size="10" fill="#f59e0b">FastAPI</text>
</svg>

<br/>

[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES2025-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-22C55E?style=for-the-badge)](LICENSE)

*The React frontend powering a full-stack AI agent application — streaming chat UI, file upload, and real-time LLM responses, connected to a FastAPI backend.*

</div>

---

## 🧠 What This Is

This is the **frontend half** of a full-stack AI engineer portfolio project. It provides a production-grade chat interface that connects to my [FastAPI AI Backend](https://github.com/asfandyar-prog/fastapi-ai-backend), enabling users to interact with AI agents, upload PDFs, and receive streaming LLM responses in real time.

Built during an intensive 2-week sprint — learning React from zero and shipping a deployable product.

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  REACT FRONTEND (This Repo)             │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                  src/                           │   │
│  │                                                 │   │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────┐  │   │
│  │  │   App    │  │  Pages   │  │  Components  │  │   │
│  │  │  .jsx    │  │          │  │              │  │   │
│  │  └────┬─────┘  └────┬─────┘  └──────┬───────┘  │   │
│  │       └─────────────┼───────────────┘          │   │
│  │                     ▼                           │   │
│  │  ┌──────────────────────────────────────────┐  │   │
│  │  │              hooks/ + api/               │  │   │
│  │  │   useChat │ useStream │ axios calls      │  │   │
│  │  └──────────────────────────────────────────┘  │   │
│  └─────────────────────────────────────────────────┘   │
│                          │                              │
└──────────────────────────┼──────────────────────────────┘
                           │ HTTP / SSE
                           ▼
┌─────────────────────────────────────────────────────────┐
│           FASTAPI AI BACKEND                            │
│   POST /chat  │  POST /stream  │  POST /upload         │
│   github.com/asfandyar-prog/fastapi-ai-backend         │
└─────────────────────────────────────────────────────────┘
```

---

## 📁 Project Structure

```
react-ai-frontend/
│
├── 📂 src/
│   ├── App.jsx                  # Root component, routing
│   ├── main.jsx                 # React DOM entry point
│   ├── index.css                # Global styles + Tailwind imports
│   │
│   ├── 📂 components/           # Reusable UI components
│   │   ├── ChatWindow.jsx       # Main chat interface
│   │   ├── MessageBubble.jsx    # Individual message display
│   │   ├── FileUpload.jsx       # PDF upload component
│   │   └── StreamingText.jsx    # Real-time token stream display
│   │
│   ├── 📂 pages/                # Page-level components
│   │   ├── Home.jsx             # Landing / chat page
│   │   └── Upload.jsx           # Document upload page
│   │
│   ├── 📂 hooks/                # Custom React hooks
│   │   ├── useChat.js           # Chat state management
│   │   └── useStream.js         # SSE streaming hook
│   │
│   └── 📂 api/                  # API call functions
│       └── client.js            # Axios instance + endpoints
│
├── 📂 public/                   # Static assets
├── index.html                   # HTML entry point
├── vite.config.js               # Vite + Tailwind config
├── package.json
└── README.md
```

---

## 🚀 Features

| Feature | Status | Description |
|---------|--------|-------------|
| 💬 Chat UI | 🔧 Building | Send messages, receive AI responses |
| ⚡ Streaming | 🔧 Building | Real-time token-by-token SSE display |
| 📄 File Upload | 🔧 Building | Upload PDFs to RAG pipeline |
| 🎨 Tailwind Styling | ✅ Done | Utility-first responsive design |
| 🔗 FastAPI Connected | 🔧 Building | Axios calls to backend |
| 🚀 Deployed | 🔧 Building | Vercel deployment |

---

## ⚙️ Local Setup

```bash
# 1. Clone
git clone https://github.com/asfandyar-prog/react-ai-frontend.git
cd react-ai-frontend

# 2. Install dependencies
npm install

# 3. Set environment variables
cp .env.example .env
# Add your FastAPI backend URL:
# VITE_API_URL=http://localhost:8000

# 4. Start dev server
npm run dev

# Visit: http://localhost:5173
```

---

## 🔗 Environment Variables

Create a `.env` file:

```env
VITE_API_URL=http://localhost:8000
```

For production (Vercel), set `VITE_API_URL` to your deployed Railway/Render backend URL.

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| **React** | 19 | UI component framework |
| **Tailwind CSS** | v4 | Utility-first styling |
| **Vite** | 8.0 | Dev server + build tool |
| **Axios** | latest | HTTP requests to FastAPI |
| **ESLint** | latest | Code quality |
| **Vercel** | - | Deployment (free tier) |

---

## 📈 Development Roadmap

- [x] Vite + React project setup
- [x] Tailwind CSS integration
- [x] GitHub repo initialized
- [ ] Component architecture setup
- [ ] Chat UI (input + message display)
- [ ] Axios API client setup
- [ ] Connect to FastAPI `/chat` endpoint
- [ ] Streaming response display (SSE)
- [ ] File upload component
- [ ] Connect upload to FastAPI `/upload`
- [ ] Deploy to Vercel
- [ ] Full-stack live demo URL

---

## 🔗 Connected Repository

| Repo | Role |
|------|------|
| [fastapi-ai-backend](https://github.com/asfandyar-prog/fastapi-ai-backend) | REST API backend serving AI agents |

---

## 👤 Author

**Asfand Yar** — AI Engineer | BSc Computer Science, University of Debrecen (2027)

Specializing in Generative AI, Agentic Systems, and Full-Stack AI Applications.

[![GitHub](https://img.shields.io/badge/GitHub-asfandyar--prog-181717?style=flat&logo=github)](https://github.com/asfandyar-prog)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Asfand_Yar-0A66C2?style=flat&logo=linkedin)](https://linkedin.com/in/asfand-yar-3966b8291)
[![Email](https://img.shields.io/badge/Email-asfandyar%40mailbox.unideb.hu-EA4335?style=flat&logo=gmail)](mailto:asfandyar@mailbox.unideb.hu)

---

<div align="center">

<!-- Bottom SVG decoration -->
<svg width="600" height="60" viewBox="0 0 600 60" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="linegrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#06b6d4;stop-opacity:0" />
      <stop offset="30%" style="stop-color:#06b6d4;stop-opacity:1" />
      <stop offset="70%" style="stop-color:#8b5cf6;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8b5cf6;stop-opacity:0" />
    </linearGradient>
  </defs>
  <rect x="0" y="28" width="600" height="1" fill="url(#linegrad)"/>
  <circle cx="300" cy="28" r="4" fill="#3b82f6"/>
  <circle cx="280" cy="28" r="2" fill="#06b6d4" opacity="0.6"/>
  <circle cx="320" cy="28" r="2" fill="#8b5cf6" opacity="0.6"/>
  <text x="300" y="52" text-anchor="middle" font-family="monospace" font-size="11" fill="#475569">
    research → agents → APIs → deployed products
  </text>
</svg>

</div>
