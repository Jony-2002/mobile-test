import React from "react";
import { Stack } from "expo-router";

export default function StackNavigation() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="SignUp/index" />
      <Stack.Screen name="(drawer)" />
    </Stack>
  );
}
