# 🗳️ E-Voting System — Frontend (React + Vite)

A modern, fast, and secure frontend for the E-Voting System.
Built with **React + Vite**, this app provides separate interfaces for **admins** and **voters**, and communicates with the backend API.

---

## 🚀 Features

✔️ User authentication (register / login)
✔️ Role-based dashboards (Admin / Voter)
✔️ Create and manage elections (Admin)
✔️ View election details
✔️ Secure voting flow
✔️ Protected routes
✔️ API communication via Axios
✔️ Environment-based configuration

---

### Prerequisites

* Node.js (14+)
* npm or yarn

---

## Quickstart (Windows)

1. Clone the repository

```bash
git clone https://github.com/bibeksamantray/e-voting-system-frontend.git
```

2. Install & Run

```bash
cd frontend
npm install
npm run dev
```

### Build & Preview

```bash
npm run build
npm run preview
```

---

## ⚙️ Environment Variables

Create `.env` or `.env.local` inside `frontend/`.

> ⚠️ Vite requires variables to start with **VITE_**

```
VITE_API_URL=http://localhost:5000/api
```

The value is read inside:

```
src/api/axios.js
```

---

## 🗂️ Project Structure

```
frontend/
├─ package.json
├─ index.html
├─ vite.config.js
├─ public/
├─ src/
│  ├─ main.jsx
│  ├─ index.css
│  ├─ App.jsx
│  ├─ api/
│  │  └─ axios.js
│  ├─ assets/
│  ├─ components/
│  │  ├─ Navbar.jsx
│  │  └─ ProtectedRoute.jsx
│  ├─ context/
│  │  └─ AuthContext.jsx
│  ├─ pages/
│  │  ├─ AdminDashboard.jsx
│  │  ├─ CreateElectionPage.jsx
│  │  ├─ ElectionDetailsPage.jsx
│  │  ├─ ElectionsPage.jsx
│  │  ├─ HomePage.jsx
│  │  ├─ LoginPage.jsx
│  │  ├─ NotFoundPage.jsx
│  │  ├─ RegisterPage.jsx
│  │  ├─ UpdateStatusPage.jsx
│  │  ├─ VoterDashboard.jsx
│  │  └─ welcome.jsx
│  └─ router/
│     └─ AppRouter.jsx
└─ eslint.config.js
```

---

## 🔧 Developer Notes

* Auth state is handled in **AuthContext**
* Tokens are typically persisted in `localStorage`
* `ProtectedRoute.jsx` prevents unauthorized access
* Ensure your backend is running and matches:

```
VITE_API_URL=http://localhost:5000/api
```

---

## 🧰 Tech Stack

* React
* Vite
* React Router
* Context API
* Axios
* ESLint

---

## 📄 License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so.

---

## 🙌 Acknowledgements

Thanks to the open-source community and reference docs from React + Vite.

---

## 👨‍💻 Author
**Bibek Samantray**
<br>AI / ML Enthusiast | Full-Stack Developer

---

