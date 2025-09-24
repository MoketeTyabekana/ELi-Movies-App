import { MovieProps } from "@/interfaces";
import { styles } from "@/styles/favourites";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FavoritesCard({
  Title,
  Year,
  Genre,
  Poster,
  imdbID,
}: MovieProps) {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/details/${imdbID}`);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handlePress}>
      <View style={styles.posterWrapper}>
        {Poster ? (
          <Image source={{ uri: Poster }} style={styles.poster} />
        ) : (
          <View style={styles.placeholder}>
            <MaterialCommunityIcons name="image-off" size={32} color="#999" />
          </View>
        )}
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{Title}</Text>
        <Text style={styles.meta}>{Year} • {Genre}</Text>
      </View>
    </TouchableOpacity>
  );
}