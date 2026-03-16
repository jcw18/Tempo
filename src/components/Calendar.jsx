import { useState } from 'react';
import CalendarDay from './CalendarDay';
import { getDaysInMonth, getFirstDayOfMonth, formatDateKey, getEffectiveWeek, isRecoveryWeek } from '../data/helpers';
import { getPhaseLabel } from '../data/running';

const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_HEADERS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar({ onSelectDate, store, onOpenSettings }) {
  const today = new Date();
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const daysInMonth = getDaysInMonth(viewYear, viewMonth);
  const firstDay = getFirstDayOfMonth(viewYear, viewMonth); // 0=Mon
  const percent = store.getMonthPercent(viewYear, viewMonth);

  // Calculate current effective week for display
  const effectiveWeek = store.startDate
    ? getEffectiveWeek(today, store.startDate, store.vacations)
    : 0;
  const phase = store.startDate ? getPhaseLabel(effectiveWeek) : null;
  const recovery = isRecoveryWeek(effectiveWeek);

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(viewYear - 1); setViewMonth(11); }
    else setViewMonth(viewMonth - 1);
  };
  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(viewYear + 1); setViewMonth(0); }
    else setViewMonth(viewMonth + 1);
  };

  // Build calendar grid
  const cells = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(new Date(viewYear, viewMonth, d));

  const todayKey = formatDateKey(today);

  // Determine which rows (weeks) are recovery weeks
  const getWeekRecovery = (date) => {
    if (!store.startDate || !date) return false;
    const week = getEffectiveWeek(date, store.startDate, store.vacations);
    return isRecoveryWeek(week);
  };

  return (
    <div className="h-full flex flex-col bg-slate-900 px-4 pb-4 overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between pt-6 pb-2">
        <h1 className="text-2xl font-bold text-white">Tempo</h1>
        <button onClick={onOpenSettings} className="text-white/50 text-xl p-2">⚙</button>
      </div>

      {/* Phase & Week info */}
      {store.startDate && (
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full">
            Week {effectiveWeek}
          </span>
          <span className="text-xs text-white/40">{phase}</span>
          {recovery && (
            <span className="text-xs bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">
              Recovery Week
            </span>
          )}
        </div>
      )}

      {/* Month navigation */}
      <div className="flex items-center justify-between mb-1">
        <button onClick={prevMonth} className="text-white/50 p-2 text-lg">‹</button>
        <h2 className="text-lg font-semibold text-white">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </h2>
        <button onClick={nextMonth} className="text-white/50 p-2 text-lg">›</button>
      </div>

      {/* Completion percentage */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-500"
            style={{ width: `${percent}%` }} />
        </div>
        <span className="text-sm text-white/60 font-medium w-12 text-right">{percent}%</span>
      </div>

      {/* Day headers */}
      <div className="grid grid-cols-7 gap-1 mb-1">
        {DAY_HEADERS.map((d) => (
          <div key={d} className="text-center text-xs text-white/40 font-medium py-1">{d}</div>
        ))}
      </div>

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;
          const key = formatDateKey(date);
          const isToday = key === todayKey;
          return (
            <CalendarDay
              key={key}
              date={date}
              isToday={isToday}
              isComplete={store.isComplete(key)}
              isVacation={store.isVacation(key)}
              onClick={onSelectDate}
              onLongPress={store.toggleVacation}
            />
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 justify-center">
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-emerald-500 rounded-full" />
          <span className="text-xs text-white/40">Done</span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-3 h-3 bg-amber-500 rounded-full" />
          <span className="text-xs text-white/40">Vacation</span>
        </div>
        <span className="text-xs text-white/30">Long press = vacation</span>
      </div>
    </div>
  );
}
