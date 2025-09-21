import { backgroundImage } from "@/constants";
import { styles } from "@/styles/startScreen";
import Feather from '@expo/vector-icons/Feather';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "./common/Button";



const OnboardingScreen = () => {
  const router = useRouter();
  



  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <LinearGradient
        colors={['hsla(226, 60%, 10%, 0.00)', '#00012C', '#00012C']}
        locations={[0.1, 0.5, 1.0]} 
        style={styles.gradientOverlay}
      >
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.contentContainer}>
            <Feather name="video" size={48} color="white" style={{marginBottom:20}}  />
            <Text style={styles.appName}>ELiMovies</Text>
            <Text style={styles.tagline}>Discover Your Next Favourite Movie</Text>
            <Text style={styles.description}>
              Explore a world of cinema tailored to your taste. Get personalised recommendations based on your
              preferences and viewing history.
            </Text>
          </View>
          <Button title={"Get Started" }
          onPress={() => router.push("/home")} />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

export default OnboardingScreen;




