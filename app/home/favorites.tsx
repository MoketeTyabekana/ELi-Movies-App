import MovieDetailsCard from "@/components/MovieDetailsCard";
import { useFavorites } from "@/context/FavoritesContext";
import { style } from "@/styles/favourites";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favourites() {
  const { favorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={style.flexOne}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>No favorites yet</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={style.flexOne}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => <MovieDetailsCard {...item} />}
        />
      </View>
    </SafeAreaView>
  );
}
