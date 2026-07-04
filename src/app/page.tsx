import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section com Imagem de Fundo da Ferrari */}
      <section 
        className="relative py-32 px-6 text-center border-b border-neutral-900 bg-cover bg-center"
        style={{ backgroundImage: "url('/ferrari-bg.jpg')" }}
      >
        {/* Película escura (Overlay) para garantir que o texto fique 100% legível */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40 z-0" />

        {/* Conteúdo (fica por cima da película) */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-7xl font-black italic uppercase tracking-tighter mb-4 text-white drop-shadow-lg">
            RPM LIVRE
          </h1>
          <p className="text-xl text-neutral-200 max-w-2xl mx-auto mb-8 font-medium drop-shadow-md">
            A sua dose diária de automobilismo. Do calendário da temporada aos bastidores das pistas.
          </p>
          <Link 
            href="/calendario" 
            className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-10 rounded-sm transition-all uppercase tracking-widest shadow-lg shadow-red-600/30 hover:scale-105"
          >
            Ver Calendário 2026
          </Link>
        </div>
      </section>

      {/* Grid de Navegação */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid md:grid-cols-3 gap-8">
        
        <div className="bg-neutral-900/80 p-8 border border-neutral-800 hover:border-red-600 transition-colors rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Calendário</h2>
          <p className="text-neutral-400 mb-6">Confira as datas das próximas corridas e não perca nenhum detalhe da temporada.</p>
          <Link href="/calendario" className="text-red-500 font-bold hover:underline">
            Acessar →
          </Link>
        </div>

        <div className="bg-neutral-900/80 p-8 border border-neutral-800 hover:border-red-600 transition-colors rounded-sm">
          <h2 className="text-2xl font-bold mb-4">Reviews</h2>
          <p className="text-neutral-400 mb-6">Análises aprofundadas das corridas recentes, estratégias e polêmicas do grid.</p>
          <Link href="/reviews" className="text-red-500 font-bold hover:underline">
            Ler análises →
          </Link>
        </div>

        <div className="bg-neutral-900/80 p-8 border border-neutral-800 hover:border-red-600 transition-colors rounded-sm">
          <h2 className="text-2xl font-bold mb-4">História</h2>
          <p className="text-neutral-400 mb-6">Mergulhe na trajetória dos pilotos que definiram a era de ouro do esporte.</p>
          <Link href="/pilotos" className="text-red-500 font-bold hover:underline">
            Conhecer lendas →
          </Link>
        </div>

      </section>
    </main>
  );
}