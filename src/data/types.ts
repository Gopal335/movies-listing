export interface Movie {
  id: string;
  title: string;
  genres: string[];
  rating: number;
  release_date: string;
  poster: string;
  overview: string;
  cast: string[];
  director?: string;
  runtime?: number;
}

export type MovieList = Movie[];

