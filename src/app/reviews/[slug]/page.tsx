import { supabase } from "@/services/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ArtigoPage({ params }: Props) {
  const { slug } = await params;

  // Busca no Supabase apenas o artigo que tem o slug exato da URL
  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  // Se não encontrar o artigo, joga para a página 404
  if (error || !post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-white py-12">
      {/* Botão Voltar */}
      <Link 
        href="/reviews" 
        className="text-red-500 font-semibold uppercase tracking-wider text-xs hover:underline mb-8 inline-block"
      >
        ← Voltar para Reviews
      </Link>

      {/* Cabeçalho do Artigo */}
      <header className="border-b border-neutral-800 pb-8 mb-8">
        <div className="flex gap-4 text-xs text-neutral-500 uppercase font-mono mb-3">
          <span>Por: {post.author}</span>
          <span>•</span>
          <span>{new Date(post.created_at).toLocaleDateString("pt-BR")}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black italic uppercase tracking-tight text-white leading-tight">
          {post.title}
        </h1>
      </header>

      {/* ÁREA VIP DO ADSENSE: É aqui que inseriremos anúncios em meio ao texto no futuro */}

      {/* Conteúdo do Artigo */}
      <div className="text-neutral-200 text-lg leading-relaxed whitespace-pre-line font-sans space-y-6">
        {post.content}
      </div>

      {/* Rodapé do Artigo / Call to Action */}
      <footer className="mt-16 pt-8 border-t border-neutral-900 text-center">
        <p className="text-neutral-400 mb-4">Gostou da análise? Acompanhe o próximo GP no nosso calendário.</p>
        <Link 
          href="/calendario" 
          className="inline-block bg-neutral-900 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-sm transition-colors uppercase tracking-wider text-sm"
        >
          Ver Próximas Corridas
        </Link>
      </footer>
    </article>
  );
}