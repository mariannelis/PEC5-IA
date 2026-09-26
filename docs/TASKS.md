\# TASKS.md — Nahomi Learning



\## Estados



\- \[ ] Pendiente

\- \[\~] En curso

\- \[x] Hecho



\---



\# 1. Planificación



\- \[x] Definir nombre del proyecto: Nahomi Learning.

\- \[x] Definir objetivo general.

\- \[x] Definir público objetivo.

\- \[x] Definir alcance de la primera versión.

\- \[x] Definir entidad principal Course.

\- \[x] Definir campos del modelo Course.

\- \[x] Definir operaciones CRUD.

\- \[x] Definir stack tecnológico.

\- \[x] Crear PLAN.md.

\- \[x] Crear TASKS.md.

\- \[X ] Crear AGENTS.md.

\- \[X ] Crear SKILLS.md.



\---



\# 2. Preparación del repositorio



\- \[x ] Crear repositorio de GitHub.

\- \[x ] Crear estructura inicial de carpetas.

\- \[x ] Crear .gitignore.

\- \[x ] Crear primer commit.

\- \[x ] Comprobar que node\_modules y .env no se suben a GitHub.



\---



\# 3. Backend



\## 3.1 Configuración inicial



\- \[x ] Crear carpeta backend.

\- \[x ] Inicializar proyecto Node.js.

\- \[ x] Instalar Express.

\- \[x ] Instalar Mongoose.

\- \[x ] Instalar dotenv.

\- \[x ] Instalar cors.

\- \[x ] Instalar nodemon como dependencia de desarrollo.

\- \[x ] Configurar scripts de package.json.



\## 3.2 Estructura



\- \[x ] Crear carpeta src.

\- \[x ] Crear carpeta config.

\- \[x ] Crear carpeta models.

\- \[ x] Crear carpeta controllers.

\- \[x ] Crear carpeta routes.

\- \[x ] Crear carpeta middleware.



\## 3.3 MongoDB



\- \[x ] Crear proyecto en MongoDB Atlas.

\- \[x ] Crear cluster.

\- \[x ] Crear usuario de base de datos.

\- \[x ] Configurar acceso de red.

\- \[x ] Obtener URI de conexión.

\- \[x ] Crear archivo .env.

\- \[x ] Crear archivo .env.example.

\- \[x ] Crear configuración de conexión db.js.

\- \[x ] Comprobar conexión con MongoDB Atlas.



\## 3.4 Modelo Course



\- \[ x] Crear course.model.js.

\- \[x ] Definir campo title.

\- \[x ] Definir campo description.

\- \[x ] Definir campo category.

\- \[ x] Definir campo recommendedAge.

\- \[ x] Definir campo level.

\- \[ x] Definir campo duration.

\- \[ x] Definir campo content.

\- \[x ] Definir campo image.

\- \[x ] Añadir validaciones necesarias.



\## 3.5 Controladores



\- \[ x] Crear course.controller.js.

\- \[x ] Crear controlador getCourses.

\- \[x ] Crear controlador getCourseById.

\- \[x ] Crear controlador createCourse.

\- \[x ] Crear controlador updateCourse.

\- \[x ] Crear controlador deleteCourse.



\## 3.6 Rutas



\- \[ x] Crear course.routes.js.

\- \[x ] Crear ruta GET /api/courses.

\- \[x ] Crear ruta GET /api/courses/:id.

\- \[x ] Crear ruta POST /api/courses.

\- \[x ] Crear ruta PUT /api/courses/:id.

\- \[x ] Crear ruta DELETE /api/courses/:id.



\## 3.7 Middleware



\- \[x ] Crear middleware 404.

\- \[x ] Crear middleware general de errores.

\- \[x ] Comprobar respuestas JSON coherentes.



\## 3.8 Aplicación



\- \[x ] Crear app.js.

\- \[x ] Configurar express.json().

\- \[x ] Configurar cors.

\- \[x ] Registrar rutas.

\- \[x ] Registrar middleware 404.

\- \[x ] Registrar middleware de errores.

\- \[ x] Crear server.js.

\- \[x ] Probar servidor en local.



\---



\# 4. Pruebas del backend



\- \[x ] Crear courses.http.

\- \[x ] Probar GET de todos los cursos.

\- \[x ] Probar GET de un curso.

\- \[x ] Probar POST.

\- \[x ] Probar PUT.

\- \[ x] Probar DELETE.

\- \[x ] Probar errores con ID inexistente.

\- \[x ] Crear colección Postman.

\- \[x ] Exportar archivo .postman.json.



\---



\# 5. Frontend



\## 5.1 Configuración inicial



\- \[x ] Crear aplicación React.

\- \[x ] Instalar dependencias necesarias.

\- \[x ] Configurar Tailwind CSS.

\- \[x ] Crear estructura de carpetas del frontend.



\## 5.2 Componentes



\- \[ x] Crear Navbar.jsx.

\- \[x ] Crear CourseCard.jsx.

\- \[x ] Crear CourseForm.jsx.

\- \[x ] Revisar que los componentes sean reutilizables.



\## 5.3 Páginas



\- \[x ] Crear Home.jsx.

\- \[x ] Crear Courses.jsx.

\- \[x ] Crear CourseDetail.jsx.

\- \[x ] Crear CreateCourse.jsx.

\- \[x ] Crear EditCourse.jsx.



\## 5.4 Servicio de API



\- \[x ] Crear course.service.js.

\- \[x ] Crear función getCourses.

\- \[x ] Crear función getCourseById.

\- \[x ] Crear función createCourse.

\- \[x ] Crear función updateCourse.

\- \[x ] Crear función deleteCourse.



\---



\# 6. CRUD desde la interfaz



\- \[x ] Mostrar listado de cursos.

\- \[x ] Mostrar detalle de curso.

\- \[x ] Crear curso desde formulario.

\- \[x ] Editar curso desde formulario.

\- \[x ] Eliminar curso desde interfaz.

\- \[x ] Confirmar eliminación.

\- \[x ] Mostrar mensajes de error.

\- \[x ] Mostrar estados de carga.



\---



\# 7. Diseño



\- \[x ] Definir identidad visual de Nahomi Learning.

\- \[ x] Definir colores.

\- \[x ] Definir tipografía.

\- \[ x] Crear diseño de Navbar.

\- \[x ] Crear tarjetas de cursos.

\- \[x ] Diseñar formularios.

\- \[x ] Revisar versión móvil.

\- \[x ] Revisar tablet.

\- \[x ] Revisar escritorio.



\---



\# 8. Integración



\- \[x ] Conectar frontend con backend local.

\- \[x ] Comprobar GET desde React.

\- \[x ] Comprobar POST desde React.

\- \[x ] Comprobar PUT desde React.

\- \[x ] Comprobar DELETE desde React.

\- \[x ] Confirmar datos guardados en MongoDB.



\---



\# 9. Documentación del uso de IA



\- \[ x] Registrar herramientas de IA utilizadas.

\- \[x ] Registrar prompts importantes.

\- \[x ] Documentar código generado con IA.

\- \[ x] Documentar correcciones manuales.

\- \[ x] Documentar errores producidos por IA.

\- \[x ] Documentar decisiones personales.

\- \[x ] Documentar aprendizajes.



\---



\# 10. README



\- \[x ] Añadir descripción del proyecto.

\- \[x ] Añadir tecnologías utilizadas.

\- \[x ] Añadir estructura del proyecto.

\- \[x ] Añadir instrucciones de instalación.

\- \[x ] Añadir instrucciones de ejecución.

\- \[x ] Añadir variables de entorno.

\- \[ x] Añadir endpoints.

\- \[ x] Añadir uso de IA.

\- \[ x] Añadir prompts principales.

\- \[x ] Añadir reflexión final.



\---



\# 11. Despliegue



\- \[x ] Desplegar backend.

\- \[x ] Comprobar conexión del backend con MongoDB Atlas.

\- \[x ] Desplegar frontend.

\- \[x ] Configurar URL de producción de la API.

\- \[ x] Probar CRUD en producción.

\- \[x ] Guardar URL del frontend.

\- \[x ] Guardar URL de la API.



\---



\# 12. Revisión final



\- \[x ] Revisar estructura de carpetas.

\- \[x ] Revisar nombres de archivos.

\- \[x ] Revisar nombres de variables.

\- \[x ] Revisar nombres de funciones.

\- \[x ] Revisar orden interno de los archivos.

\- \[x ] Revisar comentarios necesarios.

\- \[x ] Eliminar código no utilizado.

\- \[x ] Revisar consola del navegador.

\- \[ x] Revisar errores del servidor.

\- \[ x] Comprobar CRUD completo.

\- \[x ] Comprobar archivos obligatorios.

\- \[x ] Comprobar commits de GitHub.

\- \[x ] Comprobar URLs de despliegue.

\- \[x ] Realizar prueba final completa.

