import { MovieProps } from "@/interfaces";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({ Poster, onPress,imdbID }: MovieProps) {
  const isValidPoster = Poster && Poster !== "N/A";

  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={{ marginBottom: 16, width: "48%" }}>
      {isValidPoster ? (
        <Image
          source={{ uri: Poster }}
          style={{ width: "100%", height: 250, borderRadius: 8 }}
          resizeMode="cover"
        />
      ) : (
        <View
          style={{
            width: "100%",
            height: 250,
            borderRadius: 8,
            backgroundColor: "#444",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff" }}>No Poster</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
