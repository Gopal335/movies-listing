import { promises as fs } from 'fs';
import path from 'path';
import { Movie } from '../../../../data/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'movies.json');

async function getMovies(): Promise<Movie[]> {
  const data = await fs.readFile(DATA_PATH, 'utf8');
  return JSON.parse(data);
}

interface Params { genre: string }

export default async function GenrePage({ params }: { params: Params }) {
  const all = await getMovies();
  const genre = decodeURIComponent(params.genre);
  const filtered = all.filter(m => m.genres.includes(genre));

  if (!filtered.length) return notFound();

  return (
    <section>
      <h1 className="text-3xl font-bold mb-8">Best {genre} Movies</h1>
      <Link href="/movies" className="mb-6 text-indigo-600 dark:text-indigo-400 text-sm hover:underline">← Back to all movies</Link>
      <ul className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
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
    </section>
  );
}
