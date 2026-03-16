export default function ProgressDots({ total, current }) {
  // For large decks, show a progress bar instead of dots
  if (total > 20) {
    const pct = ((current + 1) / total) * 100;
    return (
      <div className="w-full px-6 py-2">
        <div className="h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full bg-white/70 rounded-full transition-all duration-300"
            style={{ width: `${pct}%` }} />
        </div>
        <p className="text-white/50 text-xs text-center mt-1">{current + 1} / {total}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center gap-1.5 py-2 flex-wrap px-4">
      {Array.from({ length: total }, (_, i) => (
        <div key={i} className={`w-2 h-2 rounded-full transition-all duration-300 ${
          i === current ? 'bg-white scale-125' :
          i < current ? 'bg-white/60' : 'bg-white/20'
        }`} />
      ))}
    </div>
  );
}
