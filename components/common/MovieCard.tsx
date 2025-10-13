import { MovieProps } from "@/interfaces";
import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({
  Poster,
  onPress,
  Title,
  imdbRating,
  Year,
  imdbID,
}: MovieProps) {
  const isValidPoster = Poster && Poster !== "N/A";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ marginBottom: 16, width: "48%" }}
    >
      {isValidPoster ? (
        <View
          style={{
            padding: 4,
            gap: 4,
            borderBottomWidth: 1,
            borderBottomColor: "#ffffff27",
          }}
        >
          <Image
            source={{ uri: Poster }}
            style={{ width: "100%", height: 250, borderRadius: 4 }}
            resizeMode="cover"
          />

          <View
            style={{
              flexDirection: "column",
              paddingHorizontal: 4,
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                color: "#fff",
                marginTop: 8,
                fontSize: 12,
                fontWeight: "bold",
              }}
              numberOfLines={1}
            >
              {Title}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  marginTop: 4,
                  fontSize: 12,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Entypo name="star" size={14} color="#ffbc02ff" />
                {imdbRating ? ` ${imdbRating}` : ""}
              </Text>
              <Text style={{ color: "#fff", marginTop: 4, fontSize: 12 }}>
                {Year ? ` ${Year}` : ""}
              </Text>
            </View>
          </View>
        </View>
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
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingHorizontal: 8,
            }}
          >
            <Text
              style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}
              numberOfLines={1}
            >
              {Title || "No Poster"}
            </Text>

            <Text style={{ color: "#fff", marginTop: 6 }} numberOfLines={2}>
              {imdbID ? `ID: ${imdbID}` : ""}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
