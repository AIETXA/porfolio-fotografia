# 📸 Aietxa | Portfolio de Fotografía (Proyecto Final)

Proyecto final del curso de Desarrollo Web Full Stack.

- **Frontend (Netlify):** https://portfolio-foto-aietxa.netlify.app/
- **Backend / API (Render):** https://porfolio-fotografia.onrender.com

> ⏳ **Nota:** el backend está alojado en el plan gratuito de Render, que entra en suspensión tras un período de inactividad. La primera petición (al cargar la galería o iniciar sesión) puede tardar entre 30 y 45 segundos mientras el servidor se reactiva (*cold start*). Las siguientes respuestas son inmediatas.



## 📖 Descripción

Este proyecto consiste en una **aplicación web Full Stack dinámica y administrable** para mostrar y gestionar un portfolio de fotografía. El objetivo principal de la aplicación es demostrar la implementación de arquitecturas decoupled (monorepo), diseño de APIs RESTful, gestión de estado en el cliente, autenticación segura con JWT y persistencia de datos en la nube.

---

## ✨ Características Principales

* **Galería Interactiva:** Grilla fluida de fotografías, búsqueda y filtrado dinámico por categorías y vista detallada con navegación entre imágenes.
* **Diseño responsive:** Interfaz limpia y adaptable a distintos tamaños de pantallas, con transiciones suaves y estética cuidada.
* **Modo Claro / Oscuro:** Sistema global de tematización que permite la alternancia fluida entre paletas de color con almacenamiento de preferencia.
* **Panel de Administración (CRUD Completo):** Área privado desde donde se pueden añadir, editar y eliminar fotografías de forma dinámica.
* **Autenticación & Rutas Protegidas:** Inicio de sesión respaldado por **JWT (JSON Web Tokens)** para restringir el acceso a las funciones de administración tanto en el frontend como en los endpoints de la API.
* **Gestión de imágenes:** Integración directa con la API de **Cloudinary** para la subida, transformación y optimización automática de imágenes.
* **Formulario de Contacto:** Integración con servicio externo (EmailJS) para el envío directo de mensajes.

---

## 🛠️ Tecnologías y stack tecnológico

### Frontend
* **React** con **Vite**
* **React Router** (rutas y vistas protegidas)
* **Context API** (estado global de Autenticación)
* **Custom hook** `useTheme` (tema claro/oscuro)
* **Framer Motion** (animaciones y transiciones)
* **CSS Modules / SASS** (maquetación y diseño modular)
* **EmailJS** (formulario de contacto)

### Backend & Base de Datos
* **Node.js** & **Express** (API RESTful)
* **MongoDB Atlas** & **Mongoose** (base de datos NoSQL y modelado de datos)
* **JWT** (autenticación y seguridad de rutas de administración)
* **Multer** (recepción de archivos) 
* **Cloudinary API** (gestión de recursos multimedia)

### Despliegue
* **Frontend:** Desplegado en **Netlify**
* **Backend:** Desplegado en **Render**
* **Control de versiones:** Git / GitHub

---

## 🔐 Panel de administración

Para que puedan probar la totalidad del flujo Full Stack y las funcionalidades del panel de administración (autenticación y operaciones CRUD), las credenciales se facilitan junto con la entrega del proyecto.

* **Acceso / Login:** `/admin/login`

* **Gestión y edición:** `/admin/edit`


---

## 📂 Estructura del Proyecto

El repositorio está organizado en una arquitectura monorepo que separa claramente la capa de cliente y de servidor:

```text
├── client/                 # Aplicación Frontend (React + Vite)
│   ├── src/
│   │   ├── assets/         # Imágenes estáticas (Home y AboutMe)
│   │   ├── components/     # Navbar, Footer, AdminPanel, EditPhotos, ProtectedRoute
│   │   ├── context/        # Contextos globales (Autenticación)
|   |   ├── hooks/          # Tema claro/oscuro
│   │   ├── pages/          # Vistas principales (Home, Galery, AboutMe, Detalis, Contact, Login)
│   │   ├── styles/         # Estilos globales
│   │   ├── App.jsx         # Componente raíz y definición de rutas
│   │   └── main.jsx        # Punto de entrada
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── .env                # Variables de entorno necesarias 
│   └── package.json
│   
│
├── server/                 # Aplicación Backend (Node.js + Express)
│   ├── config/             # Conexión a MongoDB y configuración de Cloudinary
│   ├── controllers/        # Lógica de negocio (autenticación y fotografías)
│   ├── middlewares/        # Protección de rutas (JWT) y subida de archivos (Multer)
│   ├── models/             # Esquema de Mongoose (Photo)
│   ├── routes/             # Endpoints de la API (Auth, Photos)  
│   ├── server.js           # Punto de entrada             
│   └── .env                # Variables de entorno necesarias
│   └── package.json
│
└── README.md
```

---


## 💻 Ejecución en local

**1. Clonar el reposkitorio**

```bash
git clone https://github.com/AIETXA/porfolio-fotografia.git
cd porfolio-fotografía

```

**2. Backend (`/server`)**

```bash
cd server
npm install

```

Crear un archivo `.env` en la raíz de `/server`con las siguientes variables: 

```

MONGO_URI=
JWT_SECRET=
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
AUTH_ADMIN=
AUTH_PASS=

```
Iniciar el servidor:

```bash
node server.js

```

**3. Frontend (`/client`)**

En otra terminal

```bash

cd client
npm install

```

Crear un archivo `.env` en la raíz de `/client`con las siguientes variables: 

```
VITE_API_URL=
VITE_EMAIL_SERVICE_ID=
VITE_EMAIL_TEMPLATE_ID=
VITE_EMAIL_API_KEYS=

```

Iniciar la aplicación:

```bash
npm run dev
```

---

**Proyecto desarrollado por Ailén Echaguibel con fines académicos y de evaluación profesional en Desarrollo Web Full Stack.**

