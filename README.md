# 🎓 Inventory Management System (TypeScript)

This **Inventory Management System** is a full-stack application built using **TypeScript**, providing functionalities for managing products and inventory. The project leverages modern TypeScript features along with Express.js for routing, validation, and authentication. It demonstrates real-world usage of **CRUD operations**, **authentication**, and **role-based access** in an **Admin-only** environment.

---

## ✨ Features  
- **Admin Panel**: Admin can manage products, including adding, editing, deleting, and viewing product details.  
- **Authentication**: Admin login with session management.  
- **Responsive Layout**: Custom admin interface layout for managing the inventory.  
- **Error Handling**: Consistent error handling across the application.

---

## 🛠️ Tech Stack  
- **TypeScript**: Strongly-typed JavaScript for better scalability and maintainability.  
- **Express.js**: Web framework for Node.js, used for handling HTTP requests.  
- **MongoDB**: NoSQL database to store product and inventory data.  
- **EJS**: Templating engine for rendering views with dynamic data.  
- **bcryptjs**: For hashing and securing passwords.  
- **Express-Session**: For handling user sessions and login states.

---

## 📂 Project Structure

```plaintext
inventory-management-typescript/
├── public/
│   ├── css/
│   │   ├── admin.css          # Admin-specific styles
│   │   └── index.css          # General styles
│   └── ts/
│       └── authValidation.ts   # Admin authentication validation
├── src/
│   ├── config/
│   │   └── db.config.ts       # Database configuration
│   ├── controllers/
│   │   ├── adminControllers.ts # Admin controllers for product management
│   │   └── indexControllers.ts # General controllers
│   ├── middlewares/
│   │   └── authMiddlewares.ts  # Middleware for admin authentication
│   ├── models/
│   │   └── productModels.ts   # Mongoose models for Product
│   ├── routes/
│   │   ├── adminRoutes.ts     # Admin-specific routes
│   │   └── indexRoutes.ts     # General routes
│   ├── types/
│   │   ├── env.d.ts           # Environment variables
│   │   └── global.d.ts        # Global type declarations
│   ├── utils/
│   │   ├── httpStatusCodes.ts # Standard HTTP status codes
│   │   └── messageUtils.ts    # Utility for sending messages
│   └── app.ts                 # Main application entry point
├── views/
│   ├── admin/
│   │   ├── add.ejs            # Add product page
│   │   ├── adminLogin.ejs     # Admin login page
│   │   ├── dashboard.ejs      # Admin dashboard
│   │   ├── edit.ejs           # Edit product page
│   │   ├── search.ejs         # Product search page
│   │   └── view.ejs           # View product details
│   ├── layouts/
│   │   ├── adminLayout.ejs    # Layout for Admin panel
│   │   └── authLayout.ejs     # Layout for authentication pages
│   ├── partials/
│   │   ├── admin/
│   │   │   ├── sidebar.ejs    # Admin sidebar
│   │   │   └── header.ejs     # Admin header
│   └── index/
│       └── home.ejs           # Landing page (optional)
├── package.json              # Project metadata and dependencies
├── tsconfig.json             # TypeScript configuration
├── tsConfig.client.json      # Client-side TypeScript configuration
├── .gitignore                # Git ignore rules
├── package-lock.json         # Package lock file for npm
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v14 or later)
- **npm** (v6 or later)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/inventory-management-typescript
   cd inventory-management-typescript
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
1. Set up your **MongoDB** connection in `src/config/db.config.ts`.

2. Create a `.env` file and add your environment variables, such as database URI and session secrets.

### Build and Run the Project
1. To build the server:
   ```bash
   npm run build:server
   ```

2. To build the client-side TypeScript:
   ```bash
   npm run build:client
   ```

3. To build both the server and client:
   ```bash
   npm run build
   ```

4. To start the server:
   ```bash
   npm start
   ```

5. To build and serve the project:
   ```bash
   npm run serve
   ```

---

## 🔍 Usage

- **Admin Panel**: Admin can login, add, edit, delete, and view product records, and manage the dashboard.
- **Authentication**: Admins can securely log in and maintain sessions.
- **Error Handling**: Clear and structured error pages for invalid routes and other issues.

---

## 🧩 Learning Outcomes
- Master **TypeScript fundamentals** and **OOP** principles.
- Work with **MongoDB** and **Mongoose** for data management.
- Learn how to structure a full-stack **Node.js** application with **Express**.
- Apply **session management** and **authentication** in a real-world project.

---

## 📜 License
This project is licensed under the **MIT License**.

---

## 🌟 Acknowledgements
Special thanks to the **TypeScript** community and **Express** team for their documentation and open-source resources.

Happy Coding! 💻