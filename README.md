# DevTask Manager - Next.js 16 (App Router)

Plataforma web Full Stack avanzada de gestión de tareas desarrollada bajo la metodología de **Vibe Coding**, implementando Server y Client Components, tipado estricto con TypeScript, diseño moderno con Tailwind CSS y rutas dinámicas avanzadas.

---

## 🚀 Características Principales
- **Next.js 16 (App Router):** Estructura moderna basada en directorios optimizada para rendimiento y Server Components.
- **TypeScript:** Tipado estricto para garantizar robustez y escalabilidad en todo el código.
- **Tailwind CSS:** Interfaz oscura, minimalista y completamente responsive.
- **Capa de Datos Centralizada (`lib/task.ts`):** Repositorio optimizado para entornos Serverless (Vercel) que elimina la dependencia de llamadas HTTP internas a `localhost`.
- **Resiliencia UI:** Manejo integrado de estados de carga (`loading.tsx`) y errores (`error.tsx`).

---

## 📂 Estructura de Rutas y Directorios
1. **` app/ `** (Core Pages & API): Páginas de rutas dinámicas y endpoints de API del sistema.
2. **` lib/task.ts `** (Data Layer): Repositorio centralizado en servidor para gestión de tareas sin fricciones en la nube.
3. **` types/task.ts `** (Tipado): Interfaces estrictas de TypeScript para los modelos de datos.
4. **` /dashboard `** (Dashboard Principal): Panel de control con listado de tareas mediante Server Components directos.
5. **` /create `** (Creación): Formulario interactivo con hooks de estado (`useState`) para registrar nuevos requerimientos.
6. **` /dashboard/[id] `** (Detalle Dinámico): Vista individual de elementos mediante parámetros dinámicos de URL protegidos con límites de suspensión (`Suspense`).

---

## 🛠️ Requisitos Previos y Configuración Local

Asegúrate de tener instalado **Node.js** (versión 18 o superior recomendada).

1. Clona el repositorio e ingresa a la carpeta del proyecto:
   `git clone https://github.com/tu-usuario/my-nextjs-app.git`
   `cd my-nextjs-app`

2. Instala las dependencias necesarias:
   `npm install`

3. Configura tus variables de entorno creando un archivo `.env` basado en `.env.example`:
   `cp .env.example .env`

4. Ejecuta el servidor de desarrollo local:
   `npm run dev`

5. Abre tu navegador y accede a `http://localhost:3000`.

---

## ☁️ Despliegue en Producción
El proyecto está optimizado para ser desplegado instantáneamente en plataformas como **Vercel**, utilizando una arquitectura de Server Components sin llamadas de red internas:
- Enlace de Producción en Vercel: `https://tu-proyecto.vercel.app`