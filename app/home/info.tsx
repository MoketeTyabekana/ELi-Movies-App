import Banner from '@/components/Banner';
import { style } from '@/styles/info';
import React from 'react';
import { View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Info() {
  return (
    <SafeAreaProvider>
        <SafeAreaView style={style.flexOne}>
            <View style={style.container}>
                <Banner/>
            </View>
        </SafeAreaView>
    </SafeAreaProvider>
  );
}
