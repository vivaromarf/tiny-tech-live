import React from "react";
import { StyleSheet, Text, SafeAreaView } from "react-native";

const Header = ({ name }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{name}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Header;
