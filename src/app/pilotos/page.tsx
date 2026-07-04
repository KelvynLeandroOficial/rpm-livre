import { supabase } from "@/services/supabase";
import Link from "next/link";

export const revalidate = 60; 

export default async function PilotosPage() {
  const { data: posts, error } = await supabase
    .from("posts")
    .select("*")
    .eq("category", "historia")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Erro ao buscar histórias:", error);
  }

  return (
    <main className="max-w-4xl mx-auto p-6 bg-black min-h-screen text-white">
      <h1 className="text-4xl font-black italic uppercase tracking-tighter mb-2 border-l-4 border-red-600 pl-4">
        Lendas & Histórias
      </h1>
      <p className="text-neutral-400 mb-8 pl-5">
        Biografias, rivalidades épicas e os momentos atemporais que definiram o automobilismo.
      </p>

      <div className="grid gap-6">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <Link 
              href={`/pilotos/${post.slug}`} 
              key={post.id} 
              className="block bg-neutral-900 border border-neutral-800 p-6 rounded-sm hover:border-red-600 transition-all group"
            >
              <div className="flex justify-between items-center text-xs text-neutral-500 uppercase font-mono mb-2">
                <span>Por: {post.author}</span>
                <span>{new Date(post.created_at).toLocaleDateString("pt-BR")}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-3 group-hover:text-red-500 transition-colors">
                {post.title}
              </h2>
              
              <p className="text-neutral-300 text-sm line-clamp-3 mb-4 leading-relaxed">
                {post.content}
              </p>

              <span className="text-red-500 font-bold text-sm uppercase tracking-wider inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Ler história completa →
              </span>
            </Link>
          ))
        ) : (
          <p className="text-neutral-500 italic">Nenhuma história publicada até o momento.</p>
        )}
      </div>
    </main>
  );
}