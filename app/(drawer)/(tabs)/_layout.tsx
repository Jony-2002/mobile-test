import React from "react";
import { Tabs } from "expo-router";

export default function TabsNavigation() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="Cart/index" />
      <Tabs.Screen name="Favorites/index" />
      <Tabs.Screen name="Products/index" />
    </Tabs>
  );
}
