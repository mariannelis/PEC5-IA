\# AGENTS.md — Nahomi Learning



\## 1. Contexto del proyecto



Nahomi Learning es una mini aplicación fullstack educativa orientada a niños.



La aplicación permite gestionar cursos básicos de tecnología mediante un CRUD completo.



El proyecto debe mantenerse sencillo, ordenado, comprensible y fácil de explicar.



\---



\## 2. Stack tecnológico



\### Frontend

\- React

\- JavaScript

\- Tailwind CSS



\### Backend

\- Node.js

\- Express.js

\- Mongoose



\### Base de datos

\- MongoDB Atlas



\### Otras herramientas

\- Git

\- GitHub

\- Postman / Thunder Client

\- Vercel



\---



\## 3. Entidad principal



La entidad principal es:



Course



Campos previstos:



\- title

\- description

\- category

\- recommendedAge

\- level

\- duration

\- content

\- image



\---



\## 4. Objetivo técnico



Implementar un CRUD completo de Course:



\- Crear curso.

\- Listar cursos.

\- Consultar un curso.

\- Editar curso.

\- Eliminar curso.



La conexión debe funcionar de extremo a extremo:



React → API Express → MongoDB



\---



\## 5. Reglas generales



La IA debe seguir estas reglas en todo momento:



1\. No crear funcionalidades fuera del alcance sin indicación expresa.

2\. No añadir autenticación, pagos o roles en esta versión.

3\. No mezclar frontend y backend.

4\. No mezclar responsabilidades entre archivos.

5\. Mantener nombres claros y descriptivos.

6\. Evitar archivos excesivamente grandes.

7\. Evitar funciones innecesariamente complejas.

8\. Priorizar claridad frente a soluciones demasiado avanzadas.

9\. Generar código que pueda ser explicado por el alumno.

10\. No introducir librerías innecesarias.



\---



\## 6. Orden del proyecto



La estructura debe mantenerse organizada por responsabilidad.



\### Backend



```text

backend/

└── src/

\&#x20;   ├── config/

\&#x20;   ├── controllers/

\&#x20;   ├── middleware/

\&#x20;   ├── models/

\&#x20;   ├── routes/

\&#x20;   ├── app.js

\&#x20;   └── server.js


