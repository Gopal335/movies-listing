import './globals.css';
import Link from 'next/link';
import { ReactNode } from 'react';
import { NavActions } from '../components/NavActions';

export const metadata = {
  title: "Movies & Shows Directory",
  description: "Discover top movies and shows. Browse by genre, rating, year, and more.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-zinc-900 dark:bg-zinc-900 dark:text-zinc-100 transition-colors min-h-screen flex flex-col">
        <header className="border-b border-zinc-200 dark:border-zinc-800 py-4 px-6 flex items-center justify-between bg-white/80 dark:bg-zinc-900/70 backdrop-blur sticky top-0 z-20 shadow-sm">
          <div className="flex gap-6 items-center">
            <Link href="/" className="text-lg font-bold tracking-tight">Movies & Shows Directory</Link>
          </div>
          <NavActions />
        </header>
        <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">{children}</main>
        <footer className="border-t border-zinc-200 dark:border-zinc-800 py-4 text-xs text-center text-zinc-500 bg-white/70 dark:bg-zinc-900/60">
          © {new Date().getFullYear()} <span className="font-semibold">Movies & Shows Directory</span>. Made for intern assessment
        </footer>
      </body>
    </html>
  );
}
