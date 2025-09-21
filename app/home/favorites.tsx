import { style } from '@/styles/favourites';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Favourites() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={style.flexOne}>
            <View style={style.container}>
                
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
