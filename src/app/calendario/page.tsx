import { getCalendar } from "@/services/f1";

export default async function CalendarioPage() {
  const races = await getCalendar();

  return (
    <main className="max-w-4xl mx-auto p-6 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-8 border-l-4 border-red-600 pl-4">
        Calendário 2026
      </h1>
      <div className="grid gap-6">
        {races.map((race: any, index: number) => (
          <div key={index} className="bg-neutral-900 border border-neutral-800 p-6 rounded-sm">
            <h2 className="text-2xl font-bold uppercase">{race.raceName}</h2>
            <p className="text-neutral-400">{race.Circuit.circuitName} • {race.Circuit.Location.country}</p>
            <p className="text-red-500 font-mono font-bold mt-2">{race.date}</p>
          </div>
        ))}
      </div>
    </main>
  );
}