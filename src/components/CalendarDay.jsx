import { getDayLabel, formatDateKey } from '../data/helpers';

export default function CalendarDay({ date, isToday, isComplete, isVacation, onClick, onLongPress }) {
  const dateKey = formatDateKey(date);
  const dayNum = date.getDate();
  const label = getDayLabel(date);
  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

  let timerRef = null;

  const handleTouchStart = () => {
    timerRef = setTimeout(() => {
      onLongPress?.(dateKey);
    }, 600);
  };

  const handleTouchEnd = () => {
    clearTimeout(timerRef);
  };

  return (
    <button
      onClick={() => onClick(date)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className={`relative flex flex-col items-center justify-center p-1 rounded-lg min-h-[52px] transition-all ${
        isToday ? 'ring-2 ring-cyan-400 bg-slate-800' :
        isPast ? 'bg-slate-800/50' : 'bg-slate-800/30'
      }`}
    >
      <span className={`text-sm font-medium ${isToday ? 'text-cyan-400' : 'text-white/80'}`}>
        {dayNum}
      </span>
      <span className="text-[10px] text-white/40 leading-tight text-center">{label}</span>

      {/* Checkmark overlay */}
      {isComplete && (
        <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-emerald-500 rounded-full flex items-center justify-center">
          <span className="text-[8px] text-white font-bold">✓</span>
        </div>
      )}

      {/* Vacation overlay */}
      {isVacation && (
        <div className="absolute top-0.5 right-0.5 w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
          <span className="text-[8px]">✈</span>
        </div>
      )}
    </button>
  );
}
