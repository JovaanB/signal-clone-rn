import React, { useLayoutEffect, useState } from "react";
import { View, StyleSheet, KeyboardAvoidingView } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import { StatusBar } from "expo-status-bar";

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profileUrl, setProfileUrl] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back to login",
    });
  }, []);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 20 }}>
        Create a signal account
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full Name"
          autoFocus
          type="text"
          value={name}
          onChange={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChange={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChange={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile picture URL (optional)"
          autoFocus
          type="text"
          value={profileUrl}
          onChange={(text) => setProfileUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        raised
        containerStyle={styles.button}
        onPress={register}
        title="Register"
      />
      <Button
        containerStyle={styles.button}
        onPress={() => navigation.navigate("Login")}
        type="outline"
        title="Login"
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: -40,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
});

export default RegisterScreen;
