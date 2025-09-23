import MovieCard from "@/components/common/MovieCard";
import { MovieProps } from "@/interfaces";
import { fetchMovie } from "@/services/omdb"; // ✅ updated import
import { style } from "@/styles/details";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetails() {
  const { imdbID } = useLocalSearchParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    const loadMovie = async () => {
      const result = await fetchMovie(imdbID as string, "id"); // ✅ fetch by ID
      console.log("Fetched movie:", result);
      setMovie(result);
      setLoading(false);
    };

    if (imdbID) loadMovie();
  }, [imdbID]);

  useLayoutEffect(() => {
    if (!movie) return;

    navigation.setOptions({
      headerStyle: { backgroundColor: "#00012C" },
      headerLeft: () => (
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 16 }}>
          <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity onPress={() => console.log("Add to favorites")} style={{ marginRight: 16 }}>
          <MaterialCommunityIcons name="heart-outline" size={28} color="#fff" />
        </TouchableOpacity>
      ),
    });
  }, [navigation, movie]);

  return (
    <SafeAreaView style={style.flexOne}>
      <View style={style.container}>
        {loading ? (
          <ActivityIndicator size="large" style={{ marginTop: 40 }} />
        ) : !movie ? (
          <Text style={{ margin: 20 }}>Movie not found.</Text>
        ) : (
          <ScrollView contentContainerStyle={{ paddingBottom: 40 }}>
            <MovieCard
              Poster={movie.Poster}
              Title={movie.Title}
              Year={movie.Year}
              Genre={movie.Genre}
              onPress={() => {}}
            />
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
}