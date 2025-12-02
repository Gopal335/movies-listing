import { promises as fs } from 'fs';
import path from 'path';
import { Movie } from '../../data/types';
import Link from 'next/link';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'movies.json');

async function getMovies(): Promise<Movie[]> {
  const data = await fs.readFile(DATA_PATH, 'utf8');
  return JSON.parse(data);
}

export default async function MoviesPage({ searchParams }: { searchParams: Record<string, string | string[] | undefined> }) {
  const all = await getMovies();

  // Search/query/filter/sort params
  const q = (typeof searchParams.q === 'string' ? searchParams.q : '').toLowerCase();
  const genre = typeof searchParams.genre === 'string' ? searchParams.genre : '';
  const sort = typeof searchParams.sort === 'string' ? searchParams.sort : 'rating';

  let filtered = all.filter(m =>
    (!q || m.title.toLowerCase().includes(q)) &&
    (!genre || m.genres.includes(genre))
  );

  if (sort === 'rating') filtered = filtered.sort((a,b) => b.rating - a.rating);
  else if (sort === 'year') filtered = filtered.sort((a,b) => b.release_date.localeCompare(a.release_date));
  else filtered = filtered.sort((a,b) => a.title.localeCompare(b.title));

  const genres = Array.from(new Set(all.flatMap(m => m.genres))).sort();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Top Movies</h1>
      <form className="flex flex-wrap gap-3 mb-8 items-center bg-zinc-50/70 dark:bg-zinc-800/60 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow-sm">
        <input
          name="q"
          defaultValue={q}
          placeholder="Search by title..."
          className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 dark:text-zinc-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition w-44"
        />
        <select name="genre" defaultValue={genre} className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 dark:text-zinc-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition">
          <option value="">All genres</option>
          {genres.map(g => <option key={g} value={g}>{g}</option>)}
        </select>
        <select name="sort" defaultValue={sort} className="px-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-600 bg-white dark:bg-zinc-900 dark:text-zinc-100 shadow-inner focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 transition">
          <option value="rating">Sort by: Top Rated</option>
          <option value="year">Release Year</option>
          <option value="alpha">A-Z</option>
        </select>
        <button type="submit" className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition border border-indigo-600">Apply</button>
      </form>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map(movie => (
          <li key={movie.id} className="group bg-white dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-700 shadow hover:shadow-2xl hover:-translate-y-2 hover:border-indigo-400 dark:hover:border-indigo-500 hover:bg-indigo-50 dark:hover:bg-zinc-900 transition-all cursor-pointer">
            <Link href={`/movies/${movie.id}`} className="block p-4 h-full">
              <img src={movie.poster} alt={movie.title} className="mb-4 w-full aspect-[2/3] object-cover rounded-lg shadow group-hover:scale-105 transition-transform" />
              <h2 className="font-semibold text-lg group-hover:text-indigo-600 dark:group-hover:text-indigo-400 mb-1">{movie.title}</h2>
              <div className="text-xs text-zinc-500 mb-2 flex flex-wrap gap-1">
                {movie.genres.map((g) => <span key={g} className="inline-block px-2 py-1 bg-zinc-100 dark:bg-zinc-800 rounded">{g}</span>)}
              </div>
              <div className="text-xs text-zinc-400 flex gap-3"><span>⭐ {movie.rating}</span> <span>{movie.release_date.slice(0,4)}</span></div>
            </Link>
          </li>
        ))}
      </ul>
      {filtered.length === 0 && <div className="text-center text-zinc-400 my-16 text-xl">No movies found. Try another search or clear filters!</div>}
    </section>
  );
}
