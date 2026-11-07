'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function CreateTaskPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch('/api/tasks', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, priority, status: 'pending' }),
      });
      router.push('/dashboard');
      router.refresh();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold">Nueva Tarea</h1>
          <p className="text-sm text-slate-400">Ingresa los detalles para registrar un nuevo requerimiento.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Título</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Ej. Refactorizar autenticación"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Descripción</label>
            <textarea 
              rows={3}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
              placeholder="Detalla los pasos a seguir..."
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-300 mb-1">Prioridad</label>
            <select 
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-blue-500"
            >
              <option value="low">Baja</option>
              <option value="medium">Media</option>
              <option value="high">Alta</option>
            </select>
          </div>
          <div className="flex gap-3 pt-2">
            <button 
              type="submit" 
              disabled={loading}
              className="flex-1 bg-blue-600 hover:bg-blue-500 text-white py-2 rounded-lg font-medium text-sm transition disabled:opacity-50"
            >
              {loading ? 'Guardando...' : 'Crear Tarea'}
            </button>
            <Link href="/dashboard" className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg text-sm font-medium transition text-center">
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}