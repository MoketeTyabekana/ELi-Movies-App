import FavoritesCard from "@/components/common/FavoritesCard"; // ✅ updated import
import { useFavorites } from "@/context/FavoritesContext";
import { styles } from "@/styles/favourites";
import { useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Favourites() {
  const { favorites } = useFavorites();
  const router = useRouter();

  if (favorites.length === 0) {
    return (
      <SafeAreaView style={styles.flexOne}>
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text style={{ color: "#fff" }}>No favorites yet</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.flexOne}>
      <View style={{ flex: 1, padding: 16 }}>
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.imdbID}
          renderItem={({ item }) => (
            <FavoritesCard
              {...item}
              onPress={() => router.push(`/details/${item.imdbID}`)}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}