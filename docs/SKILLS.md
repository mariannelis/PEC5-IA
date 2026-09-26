\# SKILLS.md — Nahomi Learning



\## 1. Objetivo



Este documento registra las habilidades, técnicas y prompts utilizados

con herramientas de inteligencia artificial durante el desarrollo de

Nahomi Learning.



El objetivo es documentar de forma clara cómo se utilizó la IA como

herramienta de apoyo, qué decisiones se tomaron y qué partes fueron

revisadas manualmente.



\---



\## 2. Herramienta de IA utilizada



Herramienta principal:



\- ChatGPT



Uso principal:



\- Planificación del proyecto.

\- Definición de arquitectura.

\- Organización de archivos.

\- Generación de propuestas de código.

\- Revisión de código.

\- Resolución de errores.

\- Creación de pruebas.

\- Documentación.

\- Reflexión final.



\---



\## 3. Técnica: planificación antes de programar



\### Objetivo



Definir claramente el proyecto antes de crear código.



\### Prompt utilizado



> Quiero crear una plataforma educativa de tecnología básica para niños.

> Debe cumplir con una PEC fullstack usando React, Node.js, Express y

> MongoDB. Quiero que el proyecto sea sencillo, ordenado y tenga un CRUD

> completo.



\### Resultado



Se definió:



\- Nombre del proyecto.

\- Objetivo.

\- Público objetivo.

\- Alcance.

\- Entidad principal.

\- Campos de Course.

\- CRUD.

\- Stack tecnológico.

\- Fases de trabajo.



\### Decisión personal



Se decidió utilizar una sola entidad principal, Course, para mantener el

alcance del proyecto adecuado a una PEC de una semana.



\---



\## 4. Técnica: limitar el alcance



\### Objetivo



Evitar que el proyecto creciera demasiado.



\### Prompt utilizado



> Ayúdame a reducir la idea de una plataforma educativa completa a un MVP

> que cumpla con el CRUD requerido.



\### Resultado



Se decidió no incluir en la primera versión:



\- Usuarios.

\- Login.

\- Pagos.

\- Certificados.

\- Progreso del alumno.

\- Roles.

\- Paneles complejos.



\### Aprendizaje



Un proyecto pequeño pero completo es más adecuado que una aplicación

grande e incompleta.



\---



\## 5. Técnica: organización del proyecto



\### Objetivo



Mantener una estructura clara de carpetas y archivos.



\### Prompt utilizado



> Organiza el proyecto Nahomi Learning con frontend y backend separados.

> Quiero modelos, controladores, rutas, middleware y configuración en el

> backend; y components, pages y services en React.



\### Resultado



Se propuso una arquitectura separada por responsabilidades.



\### Decisión personal



Se mantuvo la separación porque facilita la lectura, el mantenimiento y

la explicación del código.



\---



\## 6. Técnica: orden interno del código



\### Objetivo



Mantener los archivos JavaScript organizados.



\### Prompt utilizado



> Quiero que todo el código siga un orden consistente:

> imports, constantes, variables, funciones, handlers y exports.

> Los booleanos deben usar nombres como isLoading o hasError.



\### Resultado



Se definieron reglas de orden y nomenclatura en AGENTS.md.



\### Aprendizaje



El orden del código facilita encontrar errores y comprender mejor la

responsabilidad de cada bloque.



\---



\## 7. Técnica: diseño del modelo de datos



\### Objetivo



Definir la estructura del curso.



\### Prompt utilizado



> Diseña una entidad Course para una plataforma educativa infantil de

> tecnología. Debe tener campos útiles pero no demasiados.



\### Resultado



Campos elegidos:



\- title

\- description

\- category

\- recommendedAge

\- level

\- duration

\- content

\- image



\### Decisión personal



No se añadieron campos innecesarios para mantener el modelo sencillo.



\---



\## 8. Técnica: generación de modelo Mongoose



\### Prompt reutilizable



> Crea un modelo Mongoose para la entidad Course con los campos definidos

> en PLAN.md. Añade validaciones básicas, timestamps y mensajes claros.

> No añadas funcionalidades fuera del alcance del proyecto.



\### Qué revisar manualmente



\- required

\- trim

\- enum

\- maxlength

\- valores por defecto

\- timestamps

\- nombres de campos



\---



\## 9. Técnica: generación de controladores CRUD



\### Prompt reutilizable



> Genera los controladores CRUD de Course para Express y Mongoose:

> getCourses, getCourseById, createCourse, updateCourse y deleteCourse.

> Usa async/await, respuestas JSON coherentes y gestión de errores.



\### Qué revisar manualmente



\- Códigos HTTP.

\- Manejo de IDs inválidos.

\- Curso inexistente.

\- Validación.

\- Mensajes de error.

\- Respuestas JSON.



\---



\## 10. Técnica: creación de rutas



\### Prompt reutilizable



> Crea las rutas REST de Course usando Express Router y conecta cada ruta

> con su controlador correspondiente.



\### Endpoints esperados



```text

GET    /api/courses

GET    /api/courses/:id

POST   /api/courses

PUT    /api/courses/:id

DELETE /api/courses/:id


