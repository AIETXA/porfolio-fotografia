# 📸 Aietxa | Portfolio de Fotografía (Proyecto Final)

> **Enlace a producción:** [https://portfolio-foto-aietxa.netlify.app/](https://portfolio-foto-aietxa.netlify.app/)


Este proyecto consiste en una **aplicación web Full Stack dinámica y administrable** desarrollada como **Proyecto Final de Desarrollo Web Full Stack**. El objetivo principal de la aplicación es demostrar la implementación de arquitecturas decoupled (monorepo), diseño de APIs RESTful, gestión de estado en el cliente, autenticación segura y persistencia de datos en la nube.

---

## ✨ Características Principales

* **Galería Interactiva:** Visualización de fotografías con distribución fluida, filtrado dinámico por categorías y vista detallada.
* **Experiencia de Usuario (UX/UI):** Interfaz limpia y adaptativa (Responsive Design) con transiciones suaves y estética cuidada.
* **Gestión Dinámica de Temas (Modo Claro / Oscuro):** Sistema global de tematización que permite la alternancia fluida entre paletas de color con almacenamiento de preferencia.
* **Panel de Administración (Backoffice CRUD Completo):** Dashboard privado desde el cual se pueden añadir, editar y eliminar fotografías del catálogo de forma dinámica.
* **Autenticación & Rutas Protegidas:** Sistema de inicio de sesión respaldado por **JWT (JSON Web Tokens)** para restringir el acceso a las funciones de administración tanto en el frontend como en los endpoints de la API.
* **Almacenamiento y Optimización Multimedia:** Integración directa con la API de **Cloudinary** para la subida, transformación y optimización automática de imágenes.
* **Formulario de Contacto:** Integración con servicio externo (EmailJS) para el envío directo de mensajes.

---

## 🛠️ Tecnologías y Stack Tecnológico

### Frontend
* **React** (con **Vite**)
* **React Router** (Gestión de rutas y vistas protegidas).
* **Context API** — Gestión de estado global (Tema de color y estado de Autenticación).
* **Framer Motion** (Animaciones y transiciones de interfaz)
* **CSS Modules / SASS** (Maquetación y diseño modular)

### Backend & Base de Datos
* **Node.js** & **Express** (API RESTful)
* **MongoDB Atlas** & **Mongoose** (Base de datos NoSQL y modelado de datos)
* **JWT (JSON Web Tokens)** (Autenticación y seguridad de rutas de administración)
* **Cloudinary API** (Gestión de recursos multimedia)

### Despliegue y DevOps
* **Frontend:** Desplegado en **Netlify**
* **Backend:** Desplegado en **Render**
* **Control de versiones:** Git / GitHub

---

## 🔐 Acceso de Evaluación (Panel Admin)

Para que puedan probar la totalidad del flujo Full Stack y las funcionalidades del panel de administración (alta, edición y borrado de imágenes):

* **Acceso / Login:** `/admin/login`
* **Usuario Demo:** `admin`
* **Contraseña Demo:** `franco`
* **Gestión y edición:** `/admin/edit`


---

## 📂 Estructura del Proyecto

El repositorio está organizado en una arquitectura monorepo que separa claramente la capa de cliente y de servidor:

```text
├── client/                 # Aplicación Frontend (React + Vite)
│   ├── src/
│   │   ├── components/     # Componentes reutilizables (Navbar, Footer, AdminPanel, EditPhotos, ProtectedRoute)
│   │   ├── context/        # Contextos globales (Autenticación)
|   |   ├──   hooks/        # Tema(claro/oscuro)
│   │   ├── pages/          # Vistas principales (Home, Galería, Detalle, Contacto)
│   │   └── services/       # Conexiones con la API y servicios externos
│   └── package.json
│
├── server/                 # Aplicación Backend (Node.js + Express)
│   ├── models/             # Esquemas de Mongoose (User, Photo)
│   ├── routes/             # Endpoints de la API (Auth, Photos, Contact)
│   ├── middleware/         # Validaciones y protección de rutas (JWT)
│   └── package.json
│
└── README.md
```



**Proyecto desarrollado por Ailén Echaguibel con fines académicos y de evaluación profesional en Desarrollo Web Full Stack.**