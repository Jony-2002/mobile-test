import React from "react";
import { Drawer } from "expo-router/drawer";

export default function DrawerNavigation() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen
        name="(tabs)"
        options={{
          headerTitle: "Home",
        }}
      />
      <Drawer.Screen
        name="Profile/index"
        options={{
          headerTitle: "Profile",
        }}
      />
    </Drawer>
  );
}
