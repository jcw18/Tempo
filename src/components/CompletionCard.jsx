export default function CompletionCard({ workout, onComplete, onBack }) {
  const exerciseCount = workout?.sections?.reduce(
    (sum, s) => sum + (s.exercises?.length || 0), 0
  ) || 0;

  return (
    <div className="h-full w-full bg-gradient-to-br from-emerald-500 to-green-700 flex flex-col items-center justify-center px-8">
      <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mb-6">
        <span className="text-4xl">✓</span>
      </div>
      <h2 className="text-3xl font-bold text-white mb-2">Workout Complete</h2>
      <p className="text-white/70 text-lg mb-2">{workout?.title}</p>
      <p className="text-white/50 text-sm mb-8">
        {exerciseCount} exercises · {workout?.duration}
      </p>
      <button onClick={onComplete}
        className="w-full max-w-xs bg-white text-green-700 font-bold py-3 px-6 rounded-full text-lg shadow-lg active:scale-95 transition-transform">
        Mark as Done
      </button>
      <button onClick={onBack}
        className="mt-4 text-white/50 text-sm underline">
        Back to Calendar
      </button>
    </div>
  );
}
