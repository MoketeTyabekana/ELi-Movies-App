import MovieCard from "@/components/common/MovieCard";
import { allTitles } from "@/constants";
import { MovieProps } from "@/interfaces";
import { fetchMoviesByTitles } from "@/services/omdb";
import { style } from "@/styles/home";
import { getRandomTitles } from "@/utils/getRandomTitles";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home({ navigation }: any) {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadMovies = async () => {
      setLoading(true);
      const randomTitles = getRandomTitles(allTitles, 10);
      const moviesData = await fetchMoviesByTitles(randomTitles);
      setMovies(moviesData);
      setLoading(false);
    };

    loadMovies();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
   <SafeAreaProvider>
 <SafeAreaView style={style.flexOne}>
   <ScrollView style={style.container}>
     <Text style={style.headerText}>Recommended Movies For You:</Text>
     <View
       style={style.movieGrid}
     >
     
       {movies.map((movie) => (
         <MovieCard
           key={movie.imdbID}
           Poster={movie.Poster}
           onPress={() => navigation.navigate("MovieDetail", { movie })}
         />
       ))}
     </View>
   </ScrollView>
 </SafeAreaView>
   </SafeAreaProvider>

  );
}
