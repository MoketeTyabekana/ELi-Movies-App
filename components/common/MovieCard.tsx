import { MovieProps } from "@/interfaces";
import React from "react";

import { Image, TouchableOpacity } from "react-native";

export default function MovieCard({ image, onPress }: MovieProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={image} style={{ width: 100, height: 150 }} />
    </TouchableOpacity>
  );
}
