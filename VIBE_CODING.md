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

## 4. Desafíos y Resolución
- **Desafío:** Manejo de parámetros dinámicos asíncronos en Next.js.
- **Solución con IA:** Actualización de la firma de props en los componentes de página dinámicos (`params: Promise<{ id: string }>`) acorde a los estándares de las versiones más recientes de Next.js.