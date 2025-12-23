### 🔐 Login and Registration forms built with React using **Formik** and **Yup** for schema-based validation.  
The forms feature a clean, modern glassy UI with inline validation and improved UX.

---

## Table of Contents
- [Demo](#demo)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Mock API Setup](#mock-api-setup)
- [Frontend](#frontend)
- [License](#license)

---

## Demo
**Registration Page** ![Register Page](https://github.com/user-attachments/assets/68668787-d80a-4bf6-9c27-a5657eaac1df)  
**Login Page** ![Login Page](https://github.com/user-attachments/assets/7a26be8b-59a0-4166-b1d1-bd2e176c3624)



---
## About Formik & Yup

- **Formik**: A React library to manage form state, submission, and helpers with less boilerplate.  
- **Yup**: A schema-based validation library to define rules and show inline errors automatically.  

Together, they make building login & registration forms clean and easy.

## Features
- Login & Registration forms  
- Form validation using **Yup** schemas  
- Inline error messages  
- Disabled submit button while submitting  
- Glassmorphic UI with smooth transitions & animations  
- Built using **React**, **Formik**, **TailwindCSS**, and **Framer Motion**

---

## Tech Stack
- **Frontend:** React, Formik, Yup, TailwindCSS, Framer Motion  
- **Mock Backend:** JSON Server

---

## Installation

1. Clone the repository
```bash
git clone https://github.com/Miss-prachi-guptaa/react-formik-yup-auth.git
cd react-formik-yup-auth
npm install
```

## Mock API Setup

1. We are using JSON Server as a mock API.
  Install JSON Server globally (if not installed)
```bash(terminal)
npm install -g json-server
```
## Start the mock server:
```bash(terminal)
json-server --watch db.json --port 5000
```
## Frontend
Start the React development server:
```bash(terminal)
npm run dev
