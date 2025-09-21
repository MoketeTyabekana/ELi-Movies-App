import { avatar, banner } from "@/constants";
import React from "react";
import { Image, ImageBackground } from "react-native";
import { style } from '../styles/banner';

export default function Banner() {
  return <ImageBackground source={banner} style={{width:"100%"}}>
         <Image source={avatar} style={style.avatar} />
  </ImageBackground>;
}
