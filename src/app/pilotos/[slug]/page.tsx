import { supabase } from "@/services/supabase";
import { notFound } from "next/navigation";
import Link from "next/link";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function HistoriaPage({ params }: Props) {
  const { slug } = await params;

  const { data: post, error } = await supabase
    .from("posts")
    .select("*")
    .eq("slug", slug)
    .single();

  if (error || !post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto p-6 bg-black min-h-screen text-white py-12">
      <Link 
        href="/pilotos" 
        className="text-red-500 font-semibold uppercase tracking-wider text-xs hover:underline mb-8 inline-block"
      >
        ← Voltar para Lendas & Histórias
      </Link>

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

      <div className="text-neutral-200 text-lg leading-relaxed whitespace-pre-line font-sans space-y-6">
        {post.content}
      </div>

      <footer className="mt-16 pt-8 border-t border-neutral-900 text-center">
        <p className="text-neutral-400 mb-4">Gostou dessa história? Explore as nossas análises recentes.</p>
        <Link 
          href="/reviews" 
          className="inline-block bg-neutral-900 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-sm transition-colors uppercase tracking-wider text-sm"
        >
          Ler Reviews Recentes
        </Link>
      </footer>
    </article>
  );
}