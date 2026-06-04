# How to Use This Todo App

This project is a simple Todo app using an MVC-style structure.

## 1. Install dependencies

Run this command in the project folder:

```bash
npm install
```

## 2. Start the app

Run:

```bash
npm start
```

The app will start on:

```text
http://localhost:3000
```

## 3. API Endpoints

### Get all todos

```http
GET /api/todos
```

### Create a todo

```http
POST /api/todos
```

Example JSON body:

```json
{
  "title": "Learn MVC structure"
}
```

### Update a todo

```http
PATCH /api/todos/:id
```

Example JSON body:

```json
{
  "completed": true
}
```

### Delete a todo

```http
DELETE /api/todos/:id
```

## 4. Project Structure

```text
.
├── app.js
├── package.json
├── controllers/
│   └── todoController.js
├── models/
│   └── todoModel.js
├── routes/
│   └── todoRoutes.js
└── views/
    ├── index.html
    └── style.css
```

## 5. MVC Flow

- **Model** handles todo data.
- **Controller** handles request logic.
- **Routes** define API endpoints.
- **Views** contain frontend files.
- **app.js** connects everything and starts the server.
