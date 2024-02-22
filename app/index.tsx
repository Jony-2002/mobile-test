import React from "react";
import { router } from "expo-router";
import {
  // Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const BackgroundImageSVG = require("../src/assets/images/Vector.png") as any;
import SvgUri from "react-native-svg-uri";

// const Logo = require("../src/assets/images/logo.svg") as any;
import Logo from "../src/assets/images/Vector.png";

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={BackgroundImageSVG}
        style={{ width: "100%", height: "90%", alignItems: "center" }}
      >
        <View>
          <SvgUri
            width="200"
            height="200"
            source={require("../src/assets/images/logo.svg")}
          />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
