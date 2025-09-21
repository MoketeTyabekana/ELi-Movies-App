import { style } from '@/styles/search';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Search() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={style.flexOne}>
            <View style={style.container}>
                
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
