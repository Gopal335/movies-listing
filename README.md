# Movies & Shows Directory

A modern directory for top movies (and tv shows), letterboxd-inspired, built with Next.js 14 App Router, Tailwind CSS, and TypeScript. Features multi-page navigation, search, filters, and permutations, using a local JSON dataset.

## ✨ Features
- Home/about: project pitch and dataset details
- Movie listing (grid, search, filter by genre, sort by rating/year/title)
- Detailed movie/show pages (poster, genres, release year, rating, plot, cast)
- Permutation pages: by genre, starring actor, year/decade (e.g. Best Crime Movies, Movies starring Tom Hanks, Best Movies of 1994)
- Clean responsive UI, dark/light mode, and sticky navigation
- SEO-ready: all routes have semantic metadata and a sitemap

## 🗃️ Dataset
- `src/data/movies.json` — static top 250 movies (sample, can expand)
- Fields: id, title, genres, rating, release_date, poster, overview, cast, director, runtime
- Inspired by TMDB, IMDb, and letterboxd feature set

## 🛠️ Stack
- Next.js 14
- TypeScript
- Tailwind CSS
- ESLint, Prettier
- No database, just fast static JSON

## 🎬 How to Use/Deploy
1. Run locally: `npm install && npm run dev` and open [http://localhost:3000](http://localhost:3000)
2. Add movie posters as `/public/[movie-poster].jpg` files for best results
3. Deploy to Vercel for instant production hosting

## 💡 AI Prompts Used
- Generate random movie json: "Give me JSON of the top movies, each with id, title, genres, rating, release_date, poster, overview, cast, director, runtime."
- "Write a Next.js App Router listing page for these movies."
- "Tailwind classes for beautiful movie card UI?"

## 🚀 Next Steps
- Add user reviews, watchlists, links to streaming.
- Pagination, more data 🎞️.
- More permutations/pages by decade/director.

---

**Intern project: Movies & Shows Directory, full-featured.**
