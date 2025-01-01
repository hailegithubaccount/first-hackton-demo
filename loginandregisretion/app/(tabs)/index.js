import React, { useState } from "react";
import { useRouter } from "expo-router";
import { View, TextInput, Button, Text, Alert, StyleSheet } from "react-native";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState(""); // State for password
  const router = useRouter();

  // Predefined email addresses and passwords for role-based navigation
  const customerEmail = "cu@gmail.com";
  const customerPassword = "123"; // Add a password for customer
  const delivererEmail = "de@gmail.com";
  const delivererPassword = "123"; // Add a password for deliverer
  const sellerEmail = "se@gmail.com";
  const sellerPassword = "123"; // Add a password for seller

  const handleLogin = () => {
    if (email === customerEmail && password === customerPassword) {
      router.push("/customerDashboard");
    } else if (email === delivererEmail && password === delivererPassword) {
      router.push("/deliverDashboard");
    } else if (email === sellerEmail && password === sellerPassword) {
      router.push("/sellerDashboard");
    } else {
      Alert.alert("Invalid credentials", "Please enter valid email and password.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry // Hides the password input
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    paddingHorizontal: 8,
    marginBottom: 20,
  },
});
