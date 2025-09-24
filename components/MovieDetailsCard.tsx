import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MovieProps } from "../interfaces";
const MovieCard: React.FC<MovieProps> = ({
  Title,
  Year,
  Poster,
  Plot,
  Genre,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {Poster ? (
        <Image source={{ uri: Poster }} style={styles.poster} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.content}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.meta}>{Year} • {Genre}</Text>
        <Text style={styles.plot} numberOfLines={3}>
          {Plot}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#0d0d2e",
    overflow: "hidden",
    marginBottom: 16,
  },
  poster: {
    width: "100%",
    height: 200,
  },
  placeholder: {
    width: "100%",
    height: 200,
    backgroundColor: "#333",
  },
  content: {
    padding: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  meta: {
    fontSize: 14,
    color: "#aaa",
    marginVertical: 4,
  },
  plot: {
    fontSize: 14,
    color: "#ddd",
  },
});

export default MovieCard;
