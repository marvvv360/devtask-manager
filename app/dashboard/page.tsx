import Link from 'next/link';
import { getStoredTasks } from '@/lib/task';
import { Task } from '@/types/task';

export default async function DashboardPage() {
  const tasks: Task[] = getStoredTasks();

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Panel de Control</h1>
            <p className="text-slate-400 text-sm">Monitoreo y control general de tareas del sistema.</p>
          </div>
          <Link href="/create" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
            + Crear Tarea
          </Link>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tasks.map((task: Task) => (
            <div key={task.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-slate-700 transition">
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                    task.priority === 'high' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  }`}>
                    {task.priority.toUpperCase()}
                  </span>
                  <span className="text-xs text-slate-500">{task.createdAt}</span>
                </div>
                <h3 className="text-lg font-semibold">{task.title}</h3>
                <p className="text-slate-400 text-sm line-clamp-2">{task.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 flex justify-between items-center">
                <span className="text-xs text-blue-400 font-medium capitalize">{task.status.replace('_', ' ')}</span>
                <Link href={`/dashboard/${task.id}`} className="text-sm font-medium text-slate-300 hover:text-white underline">
                  Ver detalles &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}