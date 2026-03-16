import { useTimer } from '../hooks/useTimer';

function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

export default function Timer({ duration, autoStart = false, onComplete, size = 120 }) {
  const { remaining, isRunning, start, pause, reset } = useTimer(duration, onComplete);
  const progress = duration > 0 ? remaining / duration : 0;
  const r = (size - 8) / 2;
  const circumference = 2 * Math.PI * r;
  const strokeDashoffset = circumference * (1 - progress);

  // Auto-start on mount
  if (autoStart && !isRunning && remaining === duration) {
    setTimeout(start, 100);
  }

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="6"
          />
          <circle
            cx={size / 2} cy={size / 2} r={r}
            fill="none" stroke="#22d3ee" strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            style={{ transition: 'stroke-dashoffset 1s linear' }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-mono font-bold text-white">
            {formatTime(remaining)}
          </span>
        </div>
      </div>
      <div className="flex gap-3">
        {remaining === 0 ? (
          <button onClick={reset} className="px-4 py-1.5 rounded-full bg-white/20 text-white text-sm">
            Reset
          </button>
        ) : isRunning ? (
          <button onClick={pause} className="px-4 py-1.5 rounded-full bg-white/20 text-white text-sm">
            Pause
          </button>
        ) : (
          <button onClick={start} className="px-4 py-1.5 rounded-full bg-cyan-500 text-white text-sm font-medium">
            {remaining < duration ? 'Resume' : 'Start'}
          </button>
        )}
      </div>
    </div>
  );
}
