import MovieCard from "@/components/common/MovieCard";
import { MovieProps } from "@/interfaces";
import { searchMovies } from "@/services/omdb";
import { style } from "@/styles/search";
import Feather from "@expo/vector-icons/Feather";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Search({ navigation }: any) {
  const [searchText, setSearchText] = useState("");
  const [results, setResults] = useState<MovieProps[]>([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();


  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchText.length > 2) {
        fetchResults(searchText);
      } else {
        setResults([]);
      }
    }, 500); // debounce input

    return () => clearTimeout(delayDebounce);
  }, [searchText]);

  const fetchResults = async (query: string) => {
    setLoading(true);
    const data = await searchMovies(query);
    setResults(data);
    setLoading(false);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.flexOne}>
        <View style={style.flexOne}>
          <View style={style.search}>
            <TextInput
              style={style.input}
              underlineColorAndroid="transparent"
              placeholder="Search..."
              value={searchText}
              onChangeText={setSearchText}
              placeholderTextColor="#888"
            />
            <Feather name="search" size={24} color="#888" />
          </View>
          <Text style={style.headerText}>
            {searchText.trim().length > 0
              ? `Your Search Results For : ${searchText}`
              : "Your search results will appear below"}
          </Text>

          {loading ? (
            <ActivityIndicator size="large" style={{ marginTop: 20 }} />
          ) : (
            <ScrollView contentContainerStyle={style.movieGrid}>
              {results.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  Poster={movie.Poster}
             onPress={() => router.push(`/details/${movie.imdbID}`)}

                />
              ))}
            </ScrollView>
          )}
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
