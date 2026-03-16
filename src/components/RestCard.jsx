import Timer from './Timer';

export default function RestCard({ duration, onSkip }) {
  return (
    <div className="h-full w-full bg-gradient-to-br from-slate-700 to-slate-800 flex flex-col items-center justify-center px-6">
      <p className="text-white/50 text-sm font-medium uppercase tracking-wider mb-4">Rest</p>
      <Timer duration={duration} autoStart={true} />
      <button onClick={onSkip}
        className="mt-8 px-6 py-2 rounded-full border border-white/20 text-white/60 text-sm hover:bg-white/10 transition">
        Skip →
      </button>
      <p className="text-white/30 text-xs mt-4">Or swipe left to continue</p>
    </div>
  );
}
