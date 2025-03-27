# Koa.js Backend

This is the backend service for the application, built with **Koa.js** and **Drizzle ORM**.

---

## 🚀 **Running Locally**

### **1️⃣ Prerequisites**

- Install **Node.js**
- Install **Docker** (for running PostgreSQL locally)

### **2️⃣ Install Dependencies**

```bash
npm install
```

### **3️⃣ Set Up Environment Variables**

Create a .env file in the root of /backend and add:

```
DATABASE_URL=postgres://postgres:librarysecretpassword@localhost:5432/library
PORT=4000
```

### **4️⃣ Start the Database (PostgreSQL)**

```
npm run setup:up
```

### **4️⃣.1️⃣ (Optional) Seed the Database (PostgreSQL)**

If it is the first time running the project, you need to seed the database with the fixtures available at /src/db/db/fixtures, modify as needed.

```
npm run seed
```

### **5️⃣ Start the Backend**

```
npm run start:debug
```

## 🚀 **DB Migrations**

Once the schema has been modified at /src/db/schema, run:

```
npm run generate-migration
npm run migrate
```

The first one will generate the files related to the migration changes, the second one is the one to be executed in order to apply the migration into the database.
