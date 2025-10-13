import MovieDetailsCard from "@/components/MovieDetailsCard";
import { useFavorites } from "@/context/FavoritesContext";
import { MovieProps } from "@/interfaces";
import { fetchMovie } from "@/services/omdb";
import { styles } from "@/styles/details";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MovieDetails() {
  const { imdbID } = useLocalSearchParams();
  const [movie, setMovie] = useState<MovieProps | null>(null);
  const [loading, setLoading] = useState(true);

  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const navigation = useNavigation();

  useEffect(() => {
    const loadMovie = async () => {
      const result = await fetchMovie(imdbID as string, "id");
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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginLeft: 16 }}
        >
          <MaterialCommunityIcons name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            if (isFavorite(movie?.imdbID)) {
              removeFromFavorites(movie.imdbID);
              console.log("Removed from favorites:", movie.Title);
            } else {
              addToFavorites(movie);
              console.log("Added to favorites:", movie.Title);
            }
          }}
          style={{ marginRight: 16 }}
        >
          <MaterialCommunityIcons
            name={isFavorite(movie.imdbID) ? "heart" : "heart-outline"}
            size={28}
            color="#fff"
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation, movie, isFavorite, addToFavorites, removeFromFavorites]);

  return (
    <SafeAreaView style={styles.flexOne}>
      {loading ? (
        <ActivityIndicator size="large" style={{ marginTop: 40 }} />
      ) : !movie ? (
        <Text style={{ margin: 20 }}>Movie not found.</Text>
      ) : (
        <ImageBackground source={{ uri: movie.Poster }} style={styles.card} resizeMode="cover">
          <LinearGradient
            colors={["#0a112907", "#00012ce5", "#00012C"]}
            locations={[0.1, 0.5, 1.0]}
            style={{ flex: 1 }}
          >
        
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end' }}>
              <MovieDetailsCard
                Title={movie.Title}
                Year={movie.Year}
                Genre={movie.Genre}
                Plot={movie.Plot}
                imdbID={movie.imdbID}
                imdbRating={movie.imdbRating}
                Runtime={movie.Runtime}
                Director={movie.Director}
                Actors={movie.Actors}
                onPress={() => console.log("Movie card pressed")}
              />
            </ScrollView>
          </LinearGradient>
        </ImageBackground>
      )}
    </SafeAreaView>
  );
}