import { promises as fs } from 'fs';
import path from 'path';
import { Movie } from '../../../data/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const DATA_PATH = path.join(process.cwd(), 'src', 'data', 'movies.json');

async function getMovie(id: string): Promise<Movie | null> {
  const data = await fs.readFile(DATA_PATH, 'utf8');
  const movies: Movie[] = JSON.parse(data);
  return movies.find(m => m.id === id) || null;
}

interface Params { id: string }

export default async function MovieDetailPage({ params }: { params: Params }) {
  const movie = await getMovie(params.id);
  if (!movie) return notFound();

  return (
    <article className="max-w-xl mx-auto bg-white/60 dark:bg-zinc-900/80 rounded-xl shadow-lg border border-zinc-200 dark:border-zinc-700 p-7 mt-10">
      <Link href="/movies" className="text-indigo-600 dark:text-indigo-400 text-sm hover:underline inline-flex items-center mb-5">← Back to Movies</Link>
      <div className="flex md:flex-row flex-col gap-6 items-center mb-7">
        <img src={movie.poster} alt={movie.title} className="w-32 md:w-40 rounded-lg shadow-lg" />
        <div className="text-left">
          <h1 className="text-3xl font-extrabold mb-3">{movie.title}</h1>
          <div className="flex flex-wrap gap-2 text-sm mb-1">
            {movie.genres.map(g => <span key={g} className="px-2 py-1 bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 rounded">{g}</span>)}
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded">⭐ {movie.rating}</span>
            <span className="px-2 py-1 bg-zinc-200 dark:bg-zinc-700 rounded">{movie.release_date.slice(0,4)}</span>
          </div>
          <div className="text-xs text-zinc-500 mb-2">Directed by <span className="font-semibold text-zinc-700 dark:text-zinc-100">{movie.director}</span> · {movie.runtime} min</div>
        </div>
      </div>
      <p className="text-lg mb-8 text-zinc-700 dark:text-zinc-200">{movie.overview}</p>
      <div className="mb-3 text-xs text-zinc-400">Cast: {movie.cast.join(', ')}</div>
    </article>
  );
}
