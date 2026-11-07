import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl text-center space-y-6">
        <span className="bg-blue-600 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
          Vibe Coding Project
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          DevTask Manager <span className="text-blue-400">Next.js 16</span>
        </h1>
        <p className="text-slate-400 text-lg">
          Plataforma avanzada de gestión de tareas construida mediante flujos de desarrollo guiados por IA.
        </p>
        <div className="flex justify-center gap-4 pt-4">
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-xl transition shadow-lg">
            Ir al Dashboard
          </Link>
          <Link href="/create" className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl transition border border-slate-700">
            Nueva Tarea
          </Link>
        </div>
      </div>
    </main>
  );
}