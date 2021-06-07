import * as React from "react";

import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import Container from "../Elements/Container";
import Theme from "../Elements/Theme";
import Text from "../Elements/Text";
import Button from "../Elements/Button";

const Welcome = ({ navigation }) => {
  const login = () => navigation.navigate("Login");
  const signUp = () => navigation.navigate("SignUp");
  return (
    <Container gutter={2} style={styles.root}>
      <View style={styles.container}>
        <Text type="header1" style={styles.header}>
          VanPro
        </Text>
      </View>
      <View style={styles.container} delay={600} duration={300}>
        <Button label="Login" onPress={login} full white style={{ backgroundColor: Theme.palette.buttonTheme, borderRadius: 32 }} />
        <Button label="Sign Up" onPress={signUp} full />
      </View>
      <TouchableOpacity style={styles.framer} onPress={Welcome.framer}>
        <Text type={"regular"} style={styles.framerText}></Text>
      </TouchableOpacity>
    </Container>
  );
};
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  root: {
    justifyContent: "flex-end",
    alignItems: "center"
  },
  container: {
    alignSelf: "stretch"
  },
  header: {
    textAlign: "center",
    marginTop: Theme.spacing.base * 2,
    marginBottom: Theme.spacing.base * 2
  },
  framer: {
    position: "absolute",
    bottom: Theme.spacing.tiny,
    width
  },
  framerText: {
    textAlign: "center",
    fontSize: 12
  }
});

export default Welcome;
