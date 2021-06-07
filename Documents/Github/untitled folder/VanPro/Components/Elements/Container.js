import * as React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import Theme from "./Theme";
import { useMediaQuery } from "react-responsive";

const Container = ({ gutter, style, children }) => {
  const isMobile = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width: 1224px)"
  });
  const theme_spacing_base = Theme.spacing.base;
  const containerStyle = [style, styles.container, { padding: gutter * theme_spacing_base }];
  return (
    <SafeAreaView style={styles.root}>
      <View style={containerStyle}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flexGrow: 1
  },
  container: {
    flexGrow: 1
  }
});

export default Container;
