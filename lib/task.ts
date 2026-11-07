import { Task } from '@/types/task';

// Repositorio centralizado de tareas para producción
let tasksStore: Task[] = [
  {
    id: '1',
    title: 'Configurar entorno de producción',
    description: 'Ajustar variables de entorno y verificar la conexión con la base de datos.',
    priority: 'high',
    status: 'in_progress',
    createdAt: '2026-11-07',
  },
  {
    id: '2',
    title: 'Optimizar rendimiento de componentes',
    description: 'Revisar Server Components y Client Components para mejorar la carga inicial.',
    priority: 'medium',
    status: 'pending',
    createdAt: '2026-11-06',
  },
  {
    id: '3',
    title: 'Revisar documentación de API',
    description: 'Actualizar los endpoints de autenticación y rutas protegidas para el equipo.',
    priority: 'low',
    status: 'completed',
    createdAt: '2026-11-05',
  },
];

export function getStoredTasks(): Task[] {
  return tasksStore;
}

export function addTask(newTask: Omit<Task, 'id' | 'createdAt'>): Task {
  const task: Task = {
    ...newTask,
    id: Date.now().toString(),
    createdAt: new Date().toISOString().split('T')[0],
  };
  tasksStore.unshift(task);
  return task;
}