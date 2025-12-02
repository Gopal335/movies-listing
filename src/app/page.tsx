import Link from 'next/link';

export default function Home() {
  return (
    <section className="max-w-2xl mx-auto text-center my-16">
      <span className="text-6xl block mb-3">🎬🌟</span>
      <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-5">Movies & Shows Directory</h1>
      <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-6">
        Explore the top rated movies and trending shows from around the world. Browse, search, and discover your next favorite film!
      </p>
      <Link href="/movies" className="inline-block px-7 py-3 rounded bg-indigo-600 text-white font-semibold text-xl mt-2 shadow-lg hover:bg-indigo-700 transition">Browse All Movies</Link>
      <p className="text-xs text-zinc-400 mt-12 max-w-xl mx-auto opacity-80">Dataset: Top movies scraped from TMDB for demonstration. Inspired by the best of modern film catalogs.</p>
    </section>
  );
}
