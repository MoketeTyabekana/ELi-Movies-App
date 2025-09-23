import { Ionicons } from "@expo/vector-icons";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from "expo-router";
import { TouchableOpacity } from "react-native";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFC107",
        headerShown: true,
        tabBarShowLabel: true,
        headerStyle: {
          backgroundColor: "#00012C",
          marginBottom: 4,
        },
        headerTitleStyle: {
          color: "#fff",
          fontSize: 18,
          fontWeight: "bold",
        },
        tabBarStyle: {
          backgroundColor: "#00012C",
          borderTopWidth: 0,
          height: 70,
          paddingBottom: 6,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Trending",
          title: "Trending",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-filter-outline" size={24} color={color} />
          ),
              headerRight: () => (
      <TouchableOpacity onPress={() => {
      }} style={{ marginRight: 16 }}>
        <MaterialCommunityIcons name="refresh" size={32} color="#fff" />
      </TouchableOpacity>
    ),

        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarLabel: "Search",
          headerShown:false,
          tabBarIcon: ({ color }) => (
            <Ionicons name="search-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          tabBarLabel: "Favorites",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <Ionicons name="heart-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Info",
          headerShown: true,
          tabBarLabel: "Info",
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="information-circle-outline"
              size={24}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default HomeRootLayout;
