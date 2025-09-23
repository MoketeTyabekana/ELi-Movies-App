// context/MovieContext.tsx
import { MovieProps } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

type MovieContextType = {
  currentMovie: MovieProps | null;
  fetchMovieById: (id: string) => Promise<void>;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentMovie, setCurrentMovie] = useState<MovieProps | null>(null);

  const fetchMovieById = async (id: string) => {
    const response = await fetch(`https://www.omdbapi.com/?apikey=YOUR_API_KEY&i=${id}`);
    const data = await response.json();
    if (data?.Response === "True") {
      setCurrentMovie(data);
    } else {
      setCurrentMovie(null);
    }
  };

  return (
    <MovieContext.Provider value={{ currentMovie, fetchMovieById }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useMovie = () => {
  const context = useContext(MovieContext);
  if (!context) throw new Error("useMovie must be used within a MovieProvider");
  return context;
};