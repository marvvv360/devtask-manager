'use client';

export default function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center p-6">
      <div className="bg-red-500/10 border border-red-500/20 p-8 rounded-2xl max-w-md text-center space-y-4">
        <h2 className="text-xl font-bold text-red-400">¡Algo salió mal!</h2>
        <p className="text-sm text-slate-300">{error.message || 'Ocurrió un error inesperado al cargar los datos.'}</p>
        <button onClick={() => reset()} className="bg-red-600 hover:bg-red-500 text-white text-sm font-medium px-4 py-2 rounded-lg transition">
          Intentar nuevamente
        </button>
      </div>
    </div>
  );
}