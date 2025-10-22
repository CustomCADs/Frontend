# 🎨 CustomCADs — Frontend

The frontend of CustomCADs, built with **TanStack Start+ React + TypeScript + Vite**, provides a dynamic, responsive interface for exploring, purchasing, and commissioning 3D CAD models.  
It’s designed to integrate seamlessly with the [**CustomCADs Backend**](https://github.com/NinjataWRLD/CustomCADs-Backend), offering real-time updates, notifications, and a polished user experience.

## 🚀 Setup

Follow these steps to get the **CustomCADs Frontend** running locally:

1. **Install dependencies**
```bash
npm install
```

2. **Generate a local HTTPS certificate**
For example, using OpenSSL:
```bash
mkdir certs
openssl req -x509 -newkey rsa:4096 -nodes \
  -keyout certs/key.pem \
  -out certs/cert.pem \
  -days 365 \
  -subj "/CN=localhost" \
  -addext "subjectAltName = DNS:localhost, IP:127.0.0.1"
```

3. **Trust the certificate in your browser**

* **Chrome / Edge:** Go to `chrome://settings/certificates` → Import `certs/cert.pem` under "Trusted Root Certification Authorities".
* **Firefox:** Preferences → Privacy & Security → Certificates → View Certificates → Import `certs/cert.pem`.

4. **Run the development server**

```bash
npm run dev
```

Your frontend should now be accessible at [https://localhost:5173](https://localhost:5173) with HTTPS enabled.

---

## 🏗️ Architecture & Design

- **Framework:** TanStack Start
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Shadcn
- **Linting & Formatting:** ESLint + Prettier
- **Testing:** Vitest

---

## 🧰 Core Libraries

| Purpose                   | Library           |
| ------------------------- | ----------------- |
| Routing                   | TanStack Router   |
| Translations              | i18n + react-i18n |
| Reactive Store            | TanStack Store    |
| 3D Rendering              | THREE.js          |
| State Management          | TanStack Query    |
| HTTP / API                | Axios             |
| Infinite Scroll           | TanStack Virtual  |
| Notifications & Real-Time | SignalR           |
| Forms                     | TanStack Form     |
| Validation Schema         | zod               |
| Throttler                 | TanStack Pacer    |
| Payment                   | stripe-js         |

---

## 🔑 Features

- Dynamic product pages and gallery
- Filtering & search capabilities
- Real-time notifications & updates via SignalR
- Full integration with backend API
- Internationalization-ready
- SEO-friendly page titles & meta

---

## 📂 Directory Structure

```plaintext
CustomCADs-Frontend/
├── eslint-cofnigs/     # ESLint
├── public/             # SEO & Assets
├── src/
│   ├── api/              # API calls & request/response DTOs
│   ├── app/              # Pages & Components
│   │   ├── constants/        # Validation/Global Constants
│   │   ├── contexts/         # React Contexts
│   │   ├── hooks/            # App-specific Hooks
│   │   ├── stores/           # TanStack Stores
│   │   ├── utils/            # App-specific Utility functions
│   │   ├── locales/          # i18n configs & translation resources
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Toolbox with generic helpers
│   ├── routes/           # TanStack Router routes
│   ├── types/            # Global TS types
│   └── index.css         # Global styles
│   ├── router.tsx        # TanStack Router
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```
