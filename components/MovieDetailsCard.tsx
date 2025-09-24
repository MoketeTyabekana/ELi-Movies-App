import { styles } from "@/styles/details";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Text, View } from "react-native";
import { MovieProps } from "../interfaces";
const MovieCard: React.FC<MovieProps> = ({
  Title,
  Year,
  Poster,
  Plot,
  imdbRating,
  Genre,
  Runtime,
  Actors,
  Director,
}) => {
  
  return (
    <View style={styles.card}>
      {Poster ? (
        <Image source={{ uri: Poster }} style={styles.poster} />
      ) : (
        <View style={styles.placeholder} />
      )}
      <View style={styles.content}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>{Title}</Text>
          <Text style={styles.meta}>
            {Year} • {Runtime}
          </Text>
        </View>

        <View style={styles.ratingBlock}>
          <View style={styles.rating}>
            <Entypo name="star" size={18} color="#ffbc02ff" />
            <Text style={styles.ratingText}>{imdbRating || "N/A"}/10</Text>
          </View>
          <Text style={styles.genre}>{Genre}</Text>
        </View>
        <Text style={styles.plot}>{Plot}</Text>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.meta}>Directed By</Text>
          <Text style={styles.meta}>{Director || "Unknown Director"}</Text>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.meta}>Cast</Text>
          <Text style={styles.meta}>{Actors || "Cast info not available"}</Text>
        </View>
      </View>
    </View>
  );
};

export default MovieCard;
