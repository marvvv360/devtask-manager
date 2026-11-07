# DevTask Manager - Next.js 16 (App Router)

Plataforma web Full Stack avanzada de gestión de tareas desarrollada bajo la metodología de **Vibe Coding**, implementando Server y Client Components, tipado estricto con TypeScript, diseño moderno con Tailwind CSS y rutas dinámicas avanzadas.

---

## 🚀 Características Principales
* **Next.js 16 (App Router):** Estructura moderna basada en directorios optimizada para rendimiento y Server Components.
* **TypeScript:** Tipado estricto para garantizar robustez y escalabilidad en todo el código.
* **Tailwind CSS:** Interfaz oscura, minimalista y completamente responsive.
* **API Interna (Route Handlers):** Endpoints seguros simulando un CRUD completo en memoria.
* **Resiliencia UI:** Manejo integrado de estados de carga (`loading.tsx`) y errores (`error.tsx`).

---

## 📂 Estructura de Rutas
1. **` / `** (Landing Page): Página de bienvenida institucional.
2. **` /dashboard `** (Dashboard Principal): Panel de control con listado de tareas mediante Server Components.
3. **` /create `** (Creación): Formulario interactivo con hooks de estado (`useState`) para registrar nuevos requerimientos.
4. **` /dashboard/[id] `** (Detalle Dinámico): Vista individual de elementos mediante parámetros dinámicos de URL protegidos con límites de suspensión (`Suspense`).

---

## 🛠️ Requisitos Previos y Configuración Local

Asegúrate de tener instalado **Node.js** (versión 18 o superior recomendada).

1. Clona el repositorio e ingresa a la carpeta del proyecto:
   git clone https://github.com/tu-usuario/my-nextjs-app.git
   cd my-nextjs-app

2. Instala las dependencias necesarias:
   npm install

3. Configura tus variables de entorno creando un archivo `.env` basado en `.env.example`:
   cp .env.example .env

4. Ejecuta el servidor de desarrollo local:
   npm run dev

5. Abre tu navegador y accede a http://localhost:3000.

---

## ☁️ Despliegue en Producción
El proyecto está optimizado para ser desplegado instantáneamente en plataformas como **Vercel**:
* Enlace de Producción en Vercel: https://tu-proyecto.vercel.app