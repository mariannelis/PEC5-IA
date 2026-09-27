# Nahomi Learning

Nahomi Learning es una mini aplicación educativa orientada a niños.

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

Despliegue
Frontend
https://frontend-kappa-nine-81.vercel.app/

Backend
https://backendpec5.vercel.app/

API de cursos
https://backendpec5.vercel.app/api/courses

Repositorio:
https://github.com/mariannelis/PEC5-IA


Instalación
Backend
cd backend
npm install
npm run dev

Crear un archivo .env utilizando .env.example 
como referencia:
PORT=3000
MONGODB_URI=

Frontend
cd frontend
npm install
npm run dev

Crear un archivo .env utilizando .env.example como referencia:
VITE_API_URL=

Para desarrollo local se puede utilizar:
VITE_API_URL=http://localhost:3000/api/courses

Endpoints de la API
- GET /api/courses
- GET /api/courses/:id
- POST /api/courses
- PUT /api/courses/:id
- DELETE /api/courses/:id

Uso de Inteligencia Artificial:
Durante el desarrollo se utilizó ChatGPT como herramienta de apoyo.
Se utilizó para:

- Revisar código.
- Resolver errores.
- Apoyar la conexión entre React, Express y MongoDB.
El código generado con ayuda deIA fue revisado, probado y modificado antes de incorporarlo al proyecto.

Ejemplos de prompts utilizados
- "Revisa este controlador CRUD."
- "¿Por qué MongoDB no conecta desde Vercel?"

Reflexión
El desarrollo de Nahomi Learning permitió aplicar frontend, backend, bases de datos y despliegue en un mismo proyecto.
Uno de los principales aprendizajes fue comprender cómo React se comunica con una API creada con Express y cómo Mongoose permite trabajar con MongoDB.

También fue necesario resolver diferencias entre el entorno local y el entorno de producción en Vercel, especialmente relacionadas con las rutas, las variables de entorno y la conexión con MongoDB Atlas.
La inteligencia artificial fue útil como herramienta de apoyo, pero fue necesario revisar, probar y corregir varias propuestas antes de incorporarlas al proyecto.
Como mejora futura, la aplicación podría incorporar autenticación y roles de usuario.

Documentación adicional
La carpeta docs/contiene:
- PLAN.md
- AGENTS.md
- SKILLS.md
- TASKS.md

Autora:
Marianne Lucena
Ingeniera en Informática