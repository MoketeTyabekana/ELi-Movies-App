import MovieCard from "@/components/common/MovieCard";
import { allTitles } from "@/constants";
import { MovieProps } from "@/interfaces";
import { fetchMoviesByTitles } from "@/services/omdb";
import { style } from "@/styles/home";
import { getRandomTitles } from "@/utils/getRandomTitles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRouter } from "expo-router";
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const navigation = useNavigation();

  const loadMovies = useCallback(async () => {
    try {
      setLoading(true);
      const randomTitles = getRandomTitles(allTitles, 10);
      const moviesData = await fetchMoviesByTitles(randomTitles);
      setMovies(moviesData);
    } catch (error) {
      console.error("Error fetching movies:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadMovies();
  }, [loadMovies]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={loadMovies} style={{ marginRight: 16 }}>
          <MaterialCommunityIcons name="refresh" size={28} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, loadMovies]);

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
        <Text style={style.headerText}>Recommended Movies For You:</Text>
        <ScrollView style={style.container}>
          <View style={style.movieGrid}>
            {movies.map((movie) => (
              <MovieCard
                key={movie.imdbID}
                Poster={movie.Poster}
                onPress={() => router.push(`/details/${movie.imdbID}`)}
              />
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
