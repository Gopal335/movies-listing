"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export function NavActions() {
  return (
    <div className="flex gap-2 items-center">
      <Link href="/movies" className="px-3 py-1 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition font-medium">Browse All Movies</Link>
      <DarkModeToggle />
    </div>
  );
}

function DarkModeToggle() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    const saved = window.localStorage.getItem('theme');
    if (saved === "dark" || (!saved && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setDark(true);
      document.documentElement.classList.add("dark");
    } else {
      setDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      window.localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove("dark");
      window.localStorage.setItem('theme', 'light');
    }
  }, [dark]);
  return (
    <button
      title={dark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      className="ml-2 inline-flex items-center transition rounded p-1 border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 hover:scale-110"
      onClick={() => setDark((v) => !v)}
    >
      <span className="inline-flex w-5 h-5">
        {dark ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2m6.36 1.64-1.42 1.42M23 12h-2m-1.64 6.36-1.42-1.42M12 23v-2m-6.36-1.64 1.42-1.42M1 12h2m1.64-6.36 1.42 1.42" /></svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79z" /></svg>
        )}
      </span>
    </button>
  );
}

