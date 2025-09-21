import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFC107", 
        headerShown: true,
        headerStyle: {
          backgroundColor: "#0A1128", 
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 20,
          fontWeight: "bold",
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0A1128",
          borderTopWidth: 0,
        },
      }}
    >
      <Tabs.Screen
        name="index" 
        options={{
          title: "Trending",
          tabBarIcon: ({ color }) => (
            <Ionicons name="trending-up-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search" 
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info" 
        options={{
          title: "Info",
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeRootLayout;
