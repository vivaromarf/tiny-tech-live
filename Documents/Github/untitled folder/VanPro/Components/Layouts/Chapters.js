import React from "react";
import { StyleSheet, Text, SafeAreaView, Animated, FlatList } from "react-native";
import Chapter from "../Elements/Chapter";
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Chapters = ({ firebaseChapters }) => {
  return (
    <AnimatedFlatList
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      data={firebaseChapters}
      keyExtractor={chapter => chapter.id}
      renderItem={({ item }) => {
        return Chapter({
          ...item
        });
      }}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Chapters;
