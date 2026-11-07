import Link from 'next/link';
import { Suspense } from 'react';

interface PageProps {
  params: Promise<{ id: string }>;
}

async function TaskDetailContent({ params }: PageProps) {
  const { id } = await params;

  return (
    <div className="max-w-xl w-full bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <span className="text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full font-medium">
          ID de Tarea: {id}
        </span>
        <Link href="/dashboard" className="text-xs text-slate-400 hover:text-white underline">
          &larr; Volver al Dashboard
        </Link>
      </div>
      <div className="space-y-3">
        <h1 className="text-2xl font-bold">Detalle del Registro #{id}</h1>
        <p className="text-slate-300 text-sm leading-relaxed">
          Esta vista demuestra el enrutamiento dinámico avanzado de Next.js App Router mediante parámetros en la URL, asegurando un renderizado eficiente y tipado estricto con TypeScript.
        </p>
      </div>
    </div>
  );
}

export default function TaskDetailPage({ params }: PageProps) {
  return (
    <div className="min-h-screen bg-slate-950 text-white p-8 flex items-center justify-center">
      <Suspense fallback={<div className="text-slate-400 text-sm">Cargando detalles...</div>}>
        <TaskDetailContent params={params} />
      </Suspense>
    </div>
  );
}