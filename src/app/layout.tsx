import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "RPM Livre | O seu portal de automobilismo",
  description: "Calendário, reviews e a história do automobilismo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className="bg-black text-white antialiased min-h-screen flex flex-col">
        
        {/* Header Global Fixo */}
        <header className="border-b border-neutral-800 bg-neutral-950/90 backdrop-blur sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link 
              href="/" 
              className="text-2xl font-black italic tracking-tighter text-red-600 hover:opacity-80 transition-opacity"
            >
              RPM LIVRE
            </Link>
            
            <nav className="flex gap-6 text-sm font-semibold uppercase tracking-wider text-neutral-300">
              <Link href="/calendario" className="hover:text-red-500 transition-colors">
                Calendário
              </Link>
              <Link href="/reviews" className="hover:text-red-500 transition-colors">
                Reviews
              </Link>
              <Link href="/pilotos" className="hover:text-red-500 transition-colors">
                História
              </Link>
            </nav>
          </div>
        </header>

        {/* Onde as páginas específicas (page.tsx) são renderizadas */}
        <div className="flex-1">
          {children}
        </div>

        {/* Footer Global */}
        <footer className="border-t border-neutral-900 py-8 text-center text-xs text-neutral-500 mt-16">
          <p>&copy; 2026 RPM Livre. Todos os direitos reservados. Focado em alta performance.</p>
        </footer>

      </body>
    </html>
  );
}