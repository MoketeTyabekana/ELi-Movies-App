import { style } from "@/styles/search";
import Feather from '@expo/vector-icons/Feather';
import React, { useState } from "react";
import { TextInput, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Search() {

const [searchText, setSearchText] = useState('');

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.flexOne}>
        <View>
             <View style={style.search}>
        
          <TextInput
            style={style.input}
            underlineColorAndroid="transparent"
            placeholder="Search..."
            value={searchText}
            onChangeText={setSearchText}
            placeholderTextColor="#888"
          />
           <Feather name="search" size={24} color="#888" />
        </View>
          <View style={style.container}></View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
