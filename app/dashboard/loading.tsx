export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Header Skeleton */}
        <div className="flex justify-between items-center border-b border-slate-800 pb-4">
          <div className="space-y-2">
            <div className="h-8 w-48 bg-slate-800 rounded-lg animate-pulse" />
            <div className="h-4 w-72 bg-slate-900/60 rounded-lg animate-pulse" />
          </div>
          <div className="h-10 w-28 bg-slate-800 rounded-lg animate-pulse" />
        </div>

        {/* Cards Grid Skeletons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div 
              key={item} 
              className="bg-slate-900 border border-slate-800 rounded-xl p-6 space-y-4 animate-pulse"
            >
              <div className="flex justify-between items-center">
                <div className="h-5 w-16 bg-slate-800 rounded-full" />
                <div className="h-4 w-20 bg-slate-800 rounded" />
              </div>
              
              <div className="space-y-2 pt-2">
                <div className="h-6 w-3/4 bg-slate-800 rounded" />
                <div className="h-4 w-full bg-slate-800/60 rounded" />
                <div className="h-4 w-5/6 bg-slate-800/60 rounded" />
              </div>

              <div className="pt-6 border-t border-slate-800 flex justify-between items-center">
                <div className="h-4 w-20 bg-slate-800 rounded" />
                <div className="h-4 w-24 bg-slate-800 rounded" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}