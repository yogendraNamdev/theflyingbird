const StatusWidget = () => (
  <div className="max-w-7xl mx-auto px-6 mb-12">
    <div className="bg-white border border-gray-100 rounded-3xl p-6 flex flex-wrap justify-center gap-12 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
        </span>
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">Systems Operational</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-blue-600 font-bold text-xs uppercase tracking-widest underline decoration-2 underline-offset-4">45+ Projects Live</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-green-600 font-black text-[10px] uppercase tracking-widest">Support: Online</span>
      </div>
    </div>
  </div>
);
export default StatusWidget;