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

export async function searchMovies(query: string): Promise<MovieProps[]> {
  try {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${API_KEY}`
    );
    const data = await response.json();

    if (data.Response === "True" && Array.isArray(data.Search)) {
      return data.Search as MovieProps[];
    }

    return [];
  } catch (error) {
    console.error(`Error searching for "${query}":`, error);
    return [];
  }
}


export async function fetchMovie(
  value: string,
  mode: "id" | "title" = "id"
): Promise<MovieProps | null> {
  const param = mode === "id" ? `i=${value}` : `t=${encodeURIComponent(value)}`;
  try {
    const response = await fetch(`https://www.omdbapi.com/?${param}&apikey=${API_KEY}`);
    const data = await response.json();
    return data.Response === "True" ? data : null;
  } catch (error) {
    console.error(`Error fetching movie by ${mode}:`, error);
    return null;
  }
}