import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const dataPath = path.join(process.cwd(), 'src', 'data', 'movies.json');
  const raw = await fs.readFile(dataPath, 'utf8');
  const movies = JSON.parse(raw);

  const genres = Array.from(
    new Set<string>(movies.flatMap((m: any) => m.genres))
  ).map(g => encodeURIComponent(g));

  const years = Array.from(
    new Set(movies.map((m: any) => m.release_date.slice(0, 4)))
  );

  const allCast = Array.from(
    new Set<string>(movies.flatMap((m: any) => m.cast))
  ).map(c => encodeURIComponent(c));

  let items = [
    '',
    'movies',
    ...movies.map((m: any) => `movies/${m.id}`),
    ...genres.map(g => `movies/genre/${g}`),
    ...allCast.map(c => `movies/cast/${c}`),
    ...years.map(y => `movies/year/${y}`),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items
    .map(slug => `  <url><loc>${baseUrl}/${slug}</loc></url>`)
    .join('\n')}\n</urlset>`;

  return new NextResponse(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
}
