import Link from "next/link";
import { promises as fs } from 'fs';
import path from 'path';

async function getTopMovies() {
  const dataPath = path.join(process.cwd(), 'src', 'data', 'movies.json');
  const raw = await fs.readFile(dataPath, 'utf8');
  const all = JSON.parse(raw);
  return all.slice(0, 4);
}

export default async function NotFound() {
  const suggestions = await getTopMovies();
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center gap-8">
      <div className="text-8xl">🎬</div>
      <div>
        <h1 className="text-3xl font-bold mb-2">Can’t find that page</h1>
        <p className="text-zinc-600 dark:text-zinc-300 max-w-md mb-4">Not all who wander are lost. Here are some top movies you might like!</p>
        <ul className="flex flex-wrap justify-center gap-5 my-8">
          {suggestions.map((movie: any) => (
            <li key={movie.id} className="w-48 bg-white/40 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow hover:shadow-xl transition-all flex flex-col items-center px-4 py-5">
              <img src={movie.poster} alt={movie.title} className="w-16 h-24 mb-2 object-cover rounded bg-zinc-100 dark:bg-zinc-700 p-1" />
              <h2 className="font-semibold mb-1 text-base">{movie.title}</h2>
              <div className="text-xs text-zinc-500 mb-2">{movie.release_date.slice(0,4)}</div>
              <Link href={`/movies/${movie.id}`} className="text-indigo-600 dark:text-indigo-400 text-xs font-medium hover:underline">View Details</Link>
            </li>
          ))}
        </ul>
        <form action="/movies" method="get" className="mb-5">
          <input type="text" name="q" placeholder="Search movies..." className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 dark:text-zinc-100 shadow-inner mx-2" />
          <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700">Search</button>
        </form>
        <Link href="/movies" className="px-6 py-2 rounded bg-indigo-600 text-white font-semibold text-lg shadow hover:bg-indigo-700 transition">Browse All Movies</Link>
      </div>
    </section>
  );
}
