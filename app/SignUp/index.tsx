import React from "react";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


export default function SignUpScreen() {
  return (
    <SafeAreaView>
      <Text>Sign Up Screen</Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: 30,
          marginTop: 50,
        }}
      >
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "/",
            });
          }}
        >
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push({
              pathname: "(drawer)",
            });
          }}
        >
          <Text>Home Screen</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
