import { Stack } from "expo-router";

export default function DetailsRootLayout() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
  <Stack.Screen
    name="[imdbID]"
    options={{
      headerStyle: {
        backgroundColor: "#00012C",
      },
      headerTitle: "", 
    }}
  />
</Stack>

  );
}