import { useState } from 'react';
import { getPhaseLabel } from '../data/running';
import { getEffectiveWeek } from '../data/helpers';

export default function Settings({ store, onBack }) {
  const [dateInput, setDateInput] = useState(store.startDate || '');

  const handleSave = () => {
    if (dateInput) {
      store.setStartDate(dateInput);
    }
  };

  const effectiveWeek = store.startDate
    ? getEffectiveWeek(new Date(), store.startDate, store.vacations)
    : 0;

  return (
    <div className="h-full bg-slate-900 px-6 py-8 overflow-y-auto">
      <div className="flex items-center gap-3 mb-8">
        <button onClick={onBack} className="text-white/60 text-sm">← Back</button>
        <h1 className="text-xl font-bold text-white">Settings</h1>
      </div>

      <div className="space-y-6">
        {/* Training start date */}
        <div>
          <label className="block text-sm text-white/60 mb-2">Training Start Date (Week 1 Monday)</label>
          <input
            type="date"
            value={dateInput}
            onChange={(e) => setDateInput(e.target.value)}
            className="w-full bg-slate-800 text-white border border-slate-600 rounded-lg px-4 py-3 text-base"
          />
          <button onClick={handleSave}
            className="mt-3 w-full bg-cyan-600 text-white font-medium py-2.5 rounded-lg active:scale-95 transition-transform">
            Save Start Date
          </button>
        </div>

        {/* Current status */}
        {store.startDate && (
          <div className="bg-slate-800 rounded-xl p-4 space-y-2">
            <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider">Current Status</h3>
            <p className="text-white">Week {effectiveWeek} of 36</p>
            <p className="text-white/60 text-sm">{getPhaseLabel(effectiveWeek)}</p>
            <div className="w-full h-2 bg-slate-700 rounded-full overflow-hidden mt-2">
              <div className="h-full bg-cyan-500 rounded-full"
                style={{ width: `${Math.min(100, (effectiveWeek / 36) * 100)}%` }} />
            </div>
          </div>
        )}

        {/* Vacation days count */}
        <div className="bg-slate-800 rounded-xl p-4">
          <h3 className="text-sm font-medium text-white/60 uppercase tracking-wider mb-2">Vacation Days</h3>
          <p className="text-white">{Object.keys(store.vacations).length} days marked</p>
          <p className="text-white/40 text-sm mt-1">Long-press any day on the calendar to toggle vacation</p>
        </div>
      </div>
    </div>
  );
}
