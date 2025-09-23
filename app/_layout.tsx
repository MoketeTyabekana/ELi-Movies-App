import { FavoritesProvider } from "@/context/FavoritesContext";
import { MovieProvider } from "@/context/MovieContext";
import { Stack } from "expo-router";


export default function RootLayout() {
  return (
    <MovieProvider>
      <FavoritesProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="/" />
        </Stack>
      </FavoritesProvider>
    </MovieProvider>
  );
}