import { MovieProps } from "@/interfaces";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function MovieCard({ Poster, onPress, Title, imdbID }: MovieProps) {
  const isValidPoster = Poster && Poster !== "N/A";

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={{ marginBottom: 16, width: "48%" }}
    >
      {isValidPoster ? (
        <View style={{ padding: 4, gap: 4 }}>
          <Image
            source={{ uri: Poster }}
            style={{ width: "100%", height: 250, borderRadius: 8 }}
            resizeMode="cover"
          />

           <View style={{ flexDirection: "column", paddingHorizontal: 4, justifyContent: "space-between", alignItems: "center" }}>
             <Text style={{ color: "#fff", marginTop: 8, fontSize: 16, fontWeight: "bold" }} numberOfLines={1}>
                {Title}
             </Text>

             <Text style={{ color: "#fff", marginTop: 4, fontSize: 14 }} numberOfLines={2}>
               {`ID: ${imdbID}`}
             </Text>
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
          <View style={{ justifyContent: "center", alignItems: "center", paddingHorizontal: 8 }}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }} numberOfLines={1}>
              {Title || 'No Poster'}
            </Text>

            <Text style={{ color: "#fff", marginTop: 6 }} numberOfLines={2}>
              {imdbID ? `ID: ${imdbID}` : ''}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
}
