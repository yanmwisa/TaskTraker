import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from "react-native";

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/welcome-bg.jpg")} // Replace with your image path
      style={styles.background}
    >
      {/* Overlay to darken the image */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Welcome to Task Tracker</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Home")} // Navigate to Home Screen
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  overlay: {
    ...StyleSheet.absoluteFillObject, // Fill the entire background
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black (adjust the opacity as needed)
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center"
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});
