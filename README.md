# 📦 Structured API – TypeScript + Node.js

A clean and scalable boilerplate for building robust RESTful APIs using **Node.js**, **TypeScript**, and **Express.js**. Designed with best practices for maintainability, modularity, and productivity in backend development.

---

## 🚀 Features

- ✅ Fully Typed with TypeScript
- ⚙️ Modular Project Structure (Controller → Service → Model)
- 🌱 Environment-Based Configuration
- 🔐 JWT-based Authentication Ready
- 📚 Sequelize ORM for SQL Database Management
- 📦 Built-in Middleware Support
- 📁 Includes `.env` Example and Sample Scripts

---

## 🏁 Getting Started

### Clone the Repo

```bash
git clone https://github.com/anujnainwal/structured-api-ts-node.git
cd structured-api-ts-node
```

### Install Dependencies

```bash
npm install
```

### Setup Environment Variables

Create a `.env` file in the root directory and configure as shown:

```ini
#BASIC CONFIGURATION
# This file contains environment variables for the application
NODE_ENV="DEVELOPMENT"
PORT=8080
DEVELOPMENT_BACKEND_URL="http://localhost"
SERVER_URL=""
# DATABASE CONFIGURATION For MYSQL
DB_HOST=localhost
DB_PORT=3307
DB_USER=root
DB_PASSWORD=nainwal           # or your password if not empty
DB_DATABASE=schools
DB_DIALECT=mysql

# DATABASE CONFIGURATION For MONGODB
MONGODB_URI="mongodb://localhost:27017/my_database"
# JWT CONFIG
JWT_SECRET="your_jwt_secret"
JWT_EXPIRATION="1h"
JWT_ISSUER="your_jwt_issuer"
JWT_AUDIENCE="your_jwt_audience"
#REFRESH TOKEN CONFIG IF NEEDED
REFRESH_TOKEN="your_refresh_token_secret"
REFRESH_TOKEN_EXPIRATION="7d"

# EMAIL CONFIGURATION
EMAIL_SERVICE="gmail"
EMAIL_USER="your_email@gmail.com"
EMAIL_PASSWORD="your_email_password"
```

### Run in Development

```bash
npm run dev
```

---

## 📂 Project Structure

```
├── docs/ # Project documentation
├── logs/ # App logs
├── node_modules/
├── src/
│ ├── config/ # Configuration files
│ ├── constants/ # Constant values
│ ├── controllers/ # Route controllers
│ ├── cron-job/ # Scheduled jobs
│ ├── helpers/ # Utility helper functions
│ ├── interfaces/ # TypeScript interfaces
│ ├── middlewares/ # Express middlewares
│ ├── migrations/ # Sequelize migrations
│ ├── models/ # Sequelize models
│ ├── routes/ # API route definitions
│ ├── scripts/ # Custom scripts
│ ├── services/ # Business logic
│ ├── types/ # Global TypeScript types
│ ├── utils/ # Reusable utilities
│ └── validations/ # Request validation schemas
├── .env # Environment variables
├── .gitignore # Git ignore file
├── .sequelizerc # Sequelize config path resolver
├── app.ts # Express app instance
├── server.ts # Entry point to start the server
├── nodemon.json # Nodemon config
├── package.json # Project metadata and scripts
├── package-lock.json
└── tsconfig.json # TypeScript configuration
```

---

## 📜 Available NPM Scripts

| Command         | Description                                         |
| --------------- | --------------------------------------------------- |
| `npm start`     | Run the app using `ts-node`                         |
| `npm run dev`   | Start dev server with `nodemon` and TS path support |
| `npm run build` | Transpile TypeScript to JavaScript (`dist/`)        |
| `npm run test`  | Placeholder for future tests                        |

---

## 🧩 Sequelize CLI Scripts

| Command               | Description                          |
| --------------------- | ------------------------------------ |
| `npm run db:init`     | Initialize Sequelize configuration   |
| `npm run db:model`    | Generate a new model                 |
| `npm run db:mig`      | Generate a new migration             |
| `npm run db:up`       | Run all migrations                   |
| `npm run db:seed`     | Generate a new seed file             |
| `npm run db:seed:all` | Run all seeds                        |
| `npm run db:reset`    | Drop, recreate, migrate, and seed DB |

---

## ✅ Future Enhancements

- [ ] Swagger/OpenAPI Documentation
- [ ] Role-based Authorization
- [ ] Centralized Error Handling
- [ ] CI/CD Integration
- [ ] Docker Support

---

## 🙌 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

---

## 📄 License

MIT © [Anuj Nainwal](https://github.com/anujnainwal)

```

```
