# Registro de Vibe Coding - DevTask Manager

## 1. Prompts Principales Utilizados
- **Estructura Inicial:** *"Actúa como Senior Frontend Engineer. Diseña la estructura base de un proyecto Next.js 16 con App Router, TypeScript y Tailwind CSS enfocado en la modularidad y separación de Server/Client Components."*
- **Capa de Datos:** *"Genera un Route Handler en Next.js para gestionar un CRUD en memoria de tareas con tipados estrictos en TypeScript."*

## 2. Iteraciones con la IA
- **Iteración 1:** Corrección inicial de directivas `'use client'` en formularios interactivos que requerían hooks de estado (`useState`).
- **Iteración 2:** Integración de componentes nativos de manejo de asincronía (`loading.tsx` y `error.tsx`) para asegurar resiliencia en la experiencia de usuario.

## 3. Decisiones Técnicas
- Utilización de **Next.js App Router** por su alto rendimiento y optimización nativa de Server Components.
- Implementación de **Tailwind CSS** para un diseño moderno, minimalista y completamente responsive.
- Adopción de una **Capa de Datos Centralizada (`lib/task.ts`)** para asegurar la compatibilidad total con entornos Serverless (como Vercel), evitando peticiones HTTP internas a `localhost` que causaban fallos en tiempo de ejecución.

## 4. Desafíos y Resolución
- **Desafío 1:** Manejo de parámetros dinámicos asíncronos en Next.js.
- **Desafío 2:** Errores de tiempo de ejecución (Runtime #441) en Vercel derivados de `fetch` internos a `localhost` dentro de Server Components.
- **Solución con IA:** Actualización de la firma de props en los componentes de página dinámicos (`params: Promise<{ id: string }>`) acorde a los estándares recientes de Next.js, junto con la migración a un repositorio de datos centralizado a nivel de servidor.