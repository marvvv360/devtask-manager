import { NextResponse } from 'next/server';
import { Task } from '@/types/task';

// Mock de datos iniciales protegido por API
let tasks: Task[] = [
  { id: '1', title: 'Configurar entorno Next.js 16', description: 'Instalación de Tailwind y TypeScript', status: 'completed', priority: 'high', createdAt: '2026-10-01' },
  { id: '2', title: 'Implementar Server Actions', description: 'Conectar formularios con la capa de datos', status: 'in_progress', priority: 'medium', createdAt: '2026-10-02' },
  { id: '3', title: 'Desplegar en Vercel', description: 'Validar variables de entorno en producción', status: 'pending', priority: 'high', createdAt: '2026-10-03' },
];

export async function GET() {
  return NextResponse.json({ success: true, data: tasks });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTask: Task = {
      id: Date.now().toString(),
      title: body.title,
      description: body.description,
      status: body.status || 'pending',
      priority: body.priority || 'medium',
      createdAt: new Date().toISOString().split('T')[0],
    };
    tasks.push(newTask);
    return NextResponse.json({ success: true, data: newTask }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Error al procesar la solicitud' }, { status: 400 });
  }
}