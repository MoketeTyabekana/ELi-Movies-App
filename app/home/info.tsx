import Banner from "@/components/Banner";
import { INFO_DATA } from "@/constants";
import { style } from "@/styles/info";
import React from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Info() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.flexOne}>
        <View style={style.container}>
          <Banner />
          <View style={style.bio}>
            <Text style={style.nameText}> {INFO_DATA.name}</Text>
            <Text style={style.titleText}>
               {INFO_DATA.title}
            </Text>
            <View>
              <Text style={style.bioHeader}> {INFO_DATA.bioHeader}</Text>
              <Text style={style.bioContent}>
                {INFO_DATA.biography}
              </Text>
            </View>


          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
