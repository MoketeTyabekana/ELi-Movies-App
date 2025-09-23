import { MovieProps } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

type FavoritesContextType = {
  favorites: MovieProps[];
  addToFavorites: (movie: MovieProps) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<MovieProps[]>([]);

  const addToFavorites = (movie: MovieProps) => {
    if (!favorites.find((fav) => fav.imdbID === movie.imdbID)) {
      setFavorites((prev) => [...prev, movie]);
    }
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prev) => prev.filter((movie) => movie.imdbID !== id));
  };

  const isFavorite = (id: string) => {
    return favorites.some((movie) => movie.imdbID === id);
  };
  

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) throw new Error("useFavorites must be used within a FavoritesProvider");
  return context;
};