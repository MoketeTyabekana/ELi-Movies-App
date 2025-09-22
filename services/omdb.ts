import { MovieProps } from "@/interfaces";

const API_KEY = process.env.EXPO_PUBLIC_OMDB_API_KEY;

if (!API_KEY) {
  throw new Error("EXPO_PUBLIC_OMDB_API_KEY is not defined in .env");
}

export async function fetchMoviesByTitles(titles: string[]): Promise<MovieProps[]> {
  const promises = titles.map(async (title) => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${API_KEY}`
      );
      const data = await response.json();
      return data.Response === "True" ? data : null;
    } catch (error) {
      console.error(`Error fetching "${title}":`, error);
      return null;
    }
  });

  const results = await Promise.all(promises);
  return results.filter(Boolean) as MovieProps[];
}