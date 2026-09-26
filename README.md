# Nahomi Learning

Nahomi Learning es una mini aplicación fullstack educativa orientada a niños.

La plataforma permite consultar y gestionar cursos básicos relacionados con tecnología, programación, Internet, inteligencia artificial, creatividad digital y ciberseguridad.

El proyecto ha sido desarrollado como parte de la PEC 5 de Desarrollo Web Fullstack.


## Objetivo

El objetivo principal de Nahomi Learning es desarrollar una aplicación fullstack sencilla, funcional y organizada que permita gestionar cursos mediante un CRUD completo.

La aplicación permite:

- Crear cursos.
- Consultar cursos.
- Visualizar el contenido completo de un curso.
- Editar cursos.
- Eliminar cursos.

Los datos se almacenan de forma persistente en MongoDB Atlas.


## Tecnologías utilizadas

### Frontend

- React
- JavaScript
- Vite
- Tailwind CSS

### Backend

- Node.js
- Express.js
- Mongoose

### Base de datos

- MongoDB Atlas

### Herramientas

- Visual Studio Code
- Git
- GitHub
- REST Client
- Postman / Thunder Client
- ChatGPT
- Vercel


## Arquitectura

El proyecto está dividido en frontend y backend.

```text
PEC5-IA/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── app.js
│   │   └── server.js
│   ├── tests/
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   └── package.json
│
├── docs/
│   ├── PLAN.md
│   ├── AGENTS.md
│   ├── SKILLS.md
│   └── TASKS.md
│
├── .gitignore
└── README.md