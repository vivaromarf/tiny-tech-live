import React, { Fragment, useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, FlatList, Image, Linking } from "react-native";

const Chapter = ({ name }) => {
  return (
    <View style={styles.project_container}>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50
  },
  project_container: {
    // alignItems: "center",
    justifyContent: 'flex-start'
  },
  logo: {
    width: 200,
    height: 200
  },
  text: {
    // alignItems: "center",
    flexDirection: "row",
    // alignSelf: "center",
    justifyContent: 'flex-start',
    fontSize: 10,
    fontWeight: "bold"
  }
});

export default Chapter;
